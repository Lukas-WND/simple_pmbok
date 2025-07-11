import { NextResponse } from "next/server";

export async function GET() {
    console.log('chegou na api');

    return NextResponse.json({texto: 'teste de request'});
}