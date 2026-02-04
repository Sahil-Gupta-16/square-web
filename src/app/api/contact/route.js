import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json();

        // LOGGING (Placeholder for Resend/SendGrid)
        console.log("New Contact Form Submission:", data);

        // In a real production app, you would use Resend here:
        // const { error } = await resend.emails.send({ ... });

        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
