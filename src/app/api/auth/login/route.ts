import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    // dummy login
    if (body.password !== "1234") {
        return NextResponse.json(
            { message: "Invalid credentials" },
            { status: 401 }
        );
    }

    return NextResponse.json({
        token: "fake-access-token",
        id: 1,
    });
}
