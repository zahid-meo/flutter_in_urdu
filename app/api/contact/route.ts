import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email aur message lazmi hain.' },
        { status: 400 }
      );
    }

    // Email configuration: SMTP credentials from environment variables
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      // Production SMTP Transporter (e.g. Gmail App Password, SendGrid, etc.)
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"${name} (Blog Reader)" <${smtpUser}>`,
        to: 'zahid.mobiledev@gmail.com',
        replyTo: email,
        subject: `[Muhammad Zahid Blog] ${subject || 'New Contact Form Message'} from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 10px;">
            <h2 style="color: #0284c7; border-bottom: 2px solid #0284c7; padding-bottom: 8px;">Naya Message Receive Hua Hai!</h2>
            <p>Aapke blog ke contact form se ek reader ne rabta kiya hai:</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px; font-weight: bold; width: 120px;">Naam:</td>
                <td style="padding: 8px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Email:</td>
                <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Maudhoo:</td>
                <td style="padding: 8px;">${subject || 'General Inquiry'}</td>
              </tr>
            </table>
            <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #0284c7; border-radius: 4px;">
              <h4 style="margin-top: 0; color: #1e293b;">Message Content:</h4>
              <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
            </div>
            <p style="font-size: 12px; color: #64748b; margin-top: 30px;">
              Yeh email Muhammad Zahid blog website (Serverless Contact API) ke zariye bheji gayi hai. Reader ko direct reply karne ke liye 'Reply' par click karein.
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      // Local dev fallback logging if SMTP is not configured yet
      console.log('--- [CONTACT FORM MESSAGE RECEIVED] ---');
      console.log(`From: ${name} <${email}>`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log('---------------------------------------');
    }

    return NextResponse.json(
      { success: true, message: 'Message kamyabi se receive ho gaya!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Message bhejne mein masla hua. Kripya dobara koshish karein.' },
      { status: 500 }
    );
  }
}
