import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER, 
      to: process.env.EMAIL_USER,   
      subject: `📩 ${subject} | From ${name}`,
      text: message,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #ddd;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">📩 New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #111;">Name:</td>
              <td style="padding: 8px; color: #333;">${name}</td>
            </tr>
            <tr style="background: #f1f5f9;">
              <td style="padding: 8px; font-weight: bold; color: #111;">Email:</td>
              <td style="padding: 8px; color: #333;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #111;">Subject:</td>
              <td style="padding: 8px; color: #333;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #fff; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="margin: 0; font-weight: bold; color: #111;">Message:</p>
            <p style="margin-top: 8px; color: #444; line-height: 1.5;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #6b7280;">This email was automatically generated from your website contact form.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
