import { NextResponse } from "next/server";
import { createSupabaseClient } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body.website) {
  return NextResponse.json(
    { error: "Spam detected" },
    { status: 400 }
  );
}

    const supabase = createSupabaseClient();

    const { error } = await supabase
      .from("consultation_requests")
      .insert([
        {
          full_name: body.full_name,
          phone: body.phone,
          email: body.email,
          treatment: body.treatment,
          message: body.message,
          status: "New",
        },
      ]);

    if (error) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
    });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}