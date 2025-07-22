// app/api/send/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // This will be the "from" email address
      to: "jayktr736@gmail.com", // This is your email address
      subject: `New message from ${name}: ${subject}`,
      html: `<p>You have a new message from your portfolio website:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
