import { Resend } from "resend";
import { NextRequest } from "next/server";
import { format } from "date-fns";
import { isSpamHoneypot } from "@/lib/spam";
import { isValidEmail, isValidPhone } from "@/lib/validations";

const PST_TIME_ZONE = "America/Los_Angeles";

const parseDateOnly = (value: string) => {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  if ([year, month, day].some((num) => Number.isNaN(num))) {
    return null;
  }
  return new Date(Date.UTC(year, month - 1, day));
};

const getTodayInPstDate = () => {
  const todayString = new Intl.DateTimeFormat("en-CA", {
    timeZone: PST_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  return parseDateOnly(todayString)!;
};

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      message,
      company,
      address,
      serviceStart,
      serviceEnd,
      visitsPerDay,
      visitTime,
    } = body;
    console.log("Received form submission:", body);

    // 🛡️ Honeypot spam check
    if (isSpamHoneypot(company)) {
      console.warn("🚨 Spam detected (honeypot triggered)");
      return new Response(JSON.stringify({ success: false, spam: true }), {
        status: 400,
      });
    }

    // Basic required field validation
    if (
      !name ||
      !email ||
      !message ||
      !phone ||
      !address ||
      !serviceStart ||
      !serviceEnd ||
      !visitsPerDay ||
      !visitTime
    ) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields." }),
        { status: 400 },
      );
    }

    // Validate email and phone
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email address" }),
        { status: 400 },
      );
    }

    if (!isValidPhone(phone)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid phone number" }),
        { status: 400 },
      );
    }

    const visitsNumber = Number(visitsPerDay);
    if (
      !Number.isFinite(visitsNumber) ||
      visitsNumber < 1 ||
      visitsNumber > 6
    ) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Visits per day must be between 1 and 6.",
        }),
        { status: 400 },
      );
    }

    const startDate = parseDateOnly(serviceStart);
    const endDate = parseDateOnly(serviceEnd);
    if (!startDate || !endDate) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid service dates provided.",
        }),
        { status: 400 },
      );
    }

    const todayPst = getTodayInPstDate();

    if (startDate < todayPst) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Service start date cannot be in the past.",
        }),
        { status: 400 },
      );
    }

    if (startDate > endDate) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Service end date cannot be before the start date.",
        }),
        { status: 400 },
      );
    }

    const formattedStartDate = format(startDate, "MM-dd-yyyy");
    const formattedEndDate = format(endDate, "MM-dd-yyyy");

    const recipientEmail =
      process.env.DEV_EMAIL?.trim() || "szaboukos@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "leads@edcwebdesign.com",
      to: recipientEmail,
      subject: `🚨 NEW PETSITTING LEAD: Message from ${name} via Website Contact Form`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
          <h2 style="color: #2e7d32;">📬 New Lead Form Submission</h2>
          <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone:</td>
              <td style="padding: 8px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Address:</td>
              <td style="padding: 8px;">${address}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Service Dates:</td>
              <td style="padding: 8px;">${formattedStartDate} to ${formattedEndDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Visits/Day:</td>
              <td style="padding: 8px;">${visitsNumber}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Preferred Time:</td>
              <td style="padding: 8px;">${visitTime}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <h3 style="margin-bottom: 10px;">Message:</h3>
            <div style="padding: 15px; background-color: #fff; border-left: 4px solid #2e7d32;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      throw error;
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
