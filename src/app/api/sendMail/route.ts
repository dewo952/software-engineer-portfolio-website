import { PrismaClient } from "@prisma/client";
import Mailjet from "node-mailjet";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: any) {
  if (req.method === "POST") {
    let body;

    try {
      body = await req.json();
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return NextResponse.json(
        { user: null, message: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    const {
      first_name,
      last_name,
      email,
      budget,
      message,
      terms,
    } = body;

    if (!first_name || !last_name || !email || !budget || !message || !terms) {
      return NextResponse.json(
        { user: null, message: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      await prisma.contact.create({
        data: {
          firstName: first_name,
          lastName: last_name,
          email: email,
          budget: budget,
          message: message,
          termsAccepted: terms,
        },
      });

      const mailjet = Mailjet.apiConnect(
        process.env.MAIL_JET_API_KEY!,
        process.env.MAIL_JET_SECRET_KEY!
      );

      const request = mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: process.env.CONTACT_EMAIL!,
              Name: `${first_name} ${last_name}`,
            },
            To: [
              {
                Email: process.env.CONTACT_EMAIL!,
                Name: "Diven Khatri",
              },
            ],
            Subject: "New Contact Form Submission",
            TemplateLanguage: true,
            TemplateID: 6418736,
            Variables: {
              firstName: first_name,
              lastName: last_name,
              email: email,
              budget: budget,
              message: message,
            },
          },
        ],
      });

      await request;

      return NextResponse.json(
        { message: "Form submitted and email sent successfully!" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { user: null, message: "Unable to submit form and send email" },
        { status: 500 }
      );
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return NextResponse.json(
      { user: null, message: "Method not allowed" },
      { status: 405 }
    );
  }
}
