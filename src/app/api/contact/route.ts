import { NextResponse } from "next/server";

interface ContactBody {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();
    const { name, phone, email, interest, message } = body;

    if (!name || !phone || !email || !interest) {
      return NextResponse.json(
        { error: "Name, phone, email and product interest are required." },
        { status: 400 }
      );
    }

    // In production, send email or save to database here.
    // For now, we simulate success and log the enquiry.
    console.info("Yodha Furniture enquiry:", {
      name,
      phone,
      email,
      interest,
      message,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to process enquiry." },
      { status: 500 }
    );
  }
}
