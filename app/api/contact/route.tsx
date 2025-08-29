import nodemailer from "nodemailer";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// --- Configuration & Schema ---

// Zod schema updated to match the new contact form
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.string().email("A valid email address is required."),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// In-memory store for rate limiting (replace with Redis/Upstash in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// --- Helper Functions ---

/**
 * Retrieves the client's IP address from request headers.
 */
function getClientIP(request: NextRequest): string {
  const headers = request.headers;
  return (
    headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    headers.get("x-real-ip") ||
    headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

/**
 * Checks if a client has exceeded the rate limit.
 */
function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(key);
  const limit = 5;
  const windowMs = 15 * 60 * 1000; // 15 minutes

  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return false;
  }

  record.count++;
  return record.count > limit;
}

/**
 * Performs basic spam detection.
 */
function detectSpam(data: ContactFormData): boolean {
  const fullText = `${data.name} ${data.email} ${data.message}`.toLowerCase();
  const spamKeywords = ["viagra", "casino", "lottery", "free money"];
  return spamKeywords.some((keyword) => fullText.includes(keyword));
}

/**
 * Generates the HTML content for the notification email.
 */
function generateEmailHTML(data: ContactFormData, clientIP: string): string {
  const { name, email, message, company } = data;
  return `
    <!DOCTYPE html>
    <html>
      <head><title>New Contact Form Submission</title></head>
      <body style="font-family: Arial, sans-serif; color: #333;">
        <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #2257B3;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          <div><strong>Message:</strong>
            <p style="white-space: pre-wrap; border-left: 3px solid #eee; padding-left: 10px;">${message}</p>
          </div>
          <hr>
          <p style="font-size: 12px; color: #777;"><em>Submitted from IP: ${clientIP}</em></p>
        </div>
      </body>
    </html>`;
}

/**
 * Sends the email using nodemailer.
 */
async function sendEmail(data: ContactFormData, clientIP: string) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const html = generateEmailHTML(data, clientIP);

  await transporter.sendMail({
    from: `"Praseonix Contact Form" <${SMTP_USER}>`,
    to: CONTACT_EMAIL || SMTP_USER,
    subject: `New Inquiry from ${data.name}`, // Using name in subject now
    html,
  });
}

// --- API Route Handler ---

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);

    // 1. Rate Limiting
    if (isRateLimited(`contact_${clientIP}`)) {
      return NextResponse.json({ success: false, error: "Too many requests." }, { status: 429 });
    }

    // 2. Validate Request Body with Zod
    const body = await request.json();
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, error: "Validation failed.", details: validationResult.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;

    // 3. Spam Detection
    if (detectSpam(validatedData)) {
      // Silently succeed to prevent spam bots from knowing they were caught
      return NextResponse.json({ success: true, message: "Message received." });
    }

    // 4. Send Email
    await sendEmail(validatedData, clientIP);

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json({ success: false, error: "An internal server error occurred." }, { status: 500 });
  }
}
