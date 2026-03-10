import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    try {
        const res = await fetch("https://dummyjson.com/auth/refresh", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (e) {
        return NextResponse.json(
            { error: "Proxy refresh failed" },
            { status: 500 }
        );
    }
}
