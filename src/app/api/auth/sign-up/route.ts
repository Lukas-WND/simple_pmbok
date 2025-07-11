import { NextResponse } from "next/server";

export async function POST(params: string) {
    return NextResponse.json({response: 'teste'})
}