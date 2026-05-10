import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";
import * as sendgrid from "@sendgrid/mail";

@Injectable()
export class EmailService {
  private readonly transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  async sendOtpEmail(email: string, otp: string, purpose: string) {
    await this.transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Your OTP Code",
      html: `
        <div>
          <h2>LMS OTP Verification</h2>
          <p>Purpose: ${purpose}</p>
          <p>Your OTP is: <strong>${otp}</strong></p>
          <p>This OTP will expire in 5 minutes.</p>
        </div>
      `,
    });
  }

  async sendBookADemoRequest(input: {
    to: string;
    requestId: string;
    name: string;
    email: string;
    phone: string;
    interest: string;
    consent: boolean;
    createdAt: Date;
    ip?: string;
    userAgent?: string;
  }) {
    const apiKey = process.env.SENDGRID_API_KEY;
    const from = process.env.SENDGRID_FROM_EMAIL || process.env.SENDGRID_FROM;

    if (!apiKey || !from) {
      throw new Error(
        "Missing SENDGRID_API_KEY or SENDGRID_FROM_EMAIL (or SENDGRID_FROM) in environment variables."
      );
    }

    sendgrid.setApiKey(apiKey);

    const subject = `Book a Demo request — ${input.name}`;
    const createdAt = input.createdAt instanceof Date ? input.createdAt.toISOString() : `${input.createdAt}`;

    await sendgrid.send({
      to: input.to,
      from,
      subject,
      text: [
        `New Book a Demo request`,
        ``,
        `Request ID: ${input.requestId}`,
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        `Phone: ${input.phone}`,
        `Interest: ${input.interest}`,
        `Consent: ${input.consent ? "Yes" : "No"}`,
        `Created At: ${createdAt}`,
        input.ip ? `IP: ${input.ip}` : undefined,
        input.userAgent ? `User-Agent: ${input.userAgent}` : undefined,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5">
          <h2>New Book a Demo request</h2>
          <table cellpadding="6" cellspacing="0" border="0">
            <tr><td><strong>Request ID</strong></td><td>${input.requestId}</td></tr>
            <tr><td><strong>Name</strong></td><td>${input.name}</td></tr>
            <tr><td><strong>Email</strong></td><td>${input.email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${input.phone}</td></tr>
            <tr><td><strong>Interest</strong></td><td>${input.interest}</td></tr>
            <tr><td><strong>Consent</strong></td><td>${input.consent ? "Yes" : "No"}</td></tr>
            <tr><td><strong>Created At</strong></td><td>${createdAt}</td></tr>
            ${input.ip ? `<tr><td><strong>IP</strong></td><td>${input.ip}</td></tr>` : ""}
            ${
              input.userAgent
                ? `<tr><td><strong>User-Agent</strong></td><td>${input.userAgent}</td></tr>`
                : ""
            }
          </table>
        </div>
      `,
    });
  }

  async sendTalkToOurExpertRequest(input: {
    to: string;
    requestId: string;
    name: string;
    email: string;
    phone: string;
    interest: string;
    message: string;
    consent: boolean;
    createdAt: Date;
    ip?: string;
    userAgent?: string;
  }) {
    const apiKey = process.env.SENDGRID_API_KEY;
    const from = process.env.SENDGRID_FROM_EMAIL || process.env.SENDGRID_FROM;

    if (!apiKey || !from) {
      throw new Error(
        "Missing SENDGRID_API_KEY or SENDGRID_FROM_EMAIL (or SENDGRID_FROM) in environment variables."
      );
    }

    sendgrid.setApiKey(apiKey);

    const subject = `Talk to Our Expert — ${input.name}`;
    const createdAt =
      input.createdAt instanceof Date
        ? input.createdAt.toISOString()
        : `${input.createdAt}`;

    await sendgrid.send({
      to: input.to,
      from,
      subject,
      text: [
        `New Talk to Our Expert request`,
        ``,
        `Request ID: ${input.requestId}`,
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        `Phone: ${input.phone}`,
        `Interest: ${input.interest}`,
        `Message: ${input.message}`,
        `Consent: ${input.consent ? "Yes" : "No"}`,
        `Created At: ${createdAt}`,
        input.ip ? `IP: ${input.ip}` : undefined,
        input.userAgent ? `User-Agent: ${input.userAgent}` : undefined,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5">
          <h2>New Talk to Our Expert request</h2>
          <table cellpadding="6" cellspacing="0" border="0">
            <tr><td><strong>Request ID</strong></td><td>${input.requestId}</td></tr>
            <tr><td><strong>Name</strong></td><td>${input.name}</td></tr>
            <tr><td><strong>Email</strong></td><td>${input.email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${input.phone}</td></tr>
            <tr><td><strong>Interest</strong></td><td>${input.interest}</td></tr>
            <tr><td><strong>Message</strong></td><td>${input.message}</td></tr>
            <tr><td><strong>Consent</strong></td><td>${input.consent ? "Yes" : "No"}</td></tr>
            <tr><td><strong>Created At</strong></td><td>${createdAt}</td></tr>
            ${input.ip ? `<tr><td><strong>IP</strong></td><td>${input.ip}</td></tr>` : ""}
            ${
              input.userAgent
                ? `<tr><td><strong>User-Agent</strong></td><td>${input.userAgent}</td></tr>`
                : ""
            }
          </table>
        </div>
      `,
    });
  }

  async sendContactUsRequest(input: {
    to: string;
    requestId: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    consent: boolean;
    createdAt: Date;
    ip?: string;
    userAgent?: string;
  }) {
    const apiKey = process.env.SENDGRID_API_KEY;
    const from = process.env.SENDGRID_FROM_EMAIL || process.env.SENDGRID_FROM;

    if (!apiKey || !from) {
      throw new Error(
        "Missing SENDGRID_API_KEY or SENDGRID_FROM_EMAIL (or SENDGRID_FROM) in environment variables."
      );
    }

    sendgrid.setApiKey(apiKey);

    const subject = `Contact Us — ${input.name}`;
    const createdAt =
      input.createdAt instanceof Date
        ? input.createdAt.toISOString()
        : `${input.createdAt}`;

    await sendgrid.send({
      to: input.to,
      from,
      subject,
      text: [
        `New Contact Us request`,
        ``,
        `Request ID: ${input.requestId}`,
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        `Phone: ${input.phone}`,
        `Message: ${input.message}`,
        `Consent: ${input.consent ? "Yes" : "No"}`,
        `Created At: ${createdAt}`,
        input.ip ? `IP: ${input.ip}` : undefined,
        input.userAgent ? `User-Agent: ${input.userAgent}` : undefined,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5">
          <h2>New Contact Us request</h2>
          <table cellpadding="6" cellspacing="0" border="0">
            <tr><td><strong>Request ID</strong></td><td>${input.requestId}</td></tr>
            <tr><td><strong>Name</strong></td><td>${input.name}</td></tr>
            <tr><td><strong>Email</strong></td><td>${input.email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${input.phone}</td></tr>
            <tr><td><strong>Message</strong></td><td>${input.message}</td></tr>
            <tr><td><strong>Consent</strong></td><td>${input.consent ? "Yes" : "No"}</td></tr>
            <tr><td><strong>Created At</strong></td><td>${createdAt}</td></tr>
            ${input.ip ? `<tr><td><strong>IP</strong></td><td>${input.ip}</td></tr>` : ""}
            ${
              input.userAgent
                ? `<tr><td><strong>User-Agent</strong></td><td>${input.userAgent}</td></tr>`
                : ""
            }
          </table>
        </div>
      `,
    });
  }
}