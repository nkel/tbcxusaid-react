import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name, userId } = await request.json();

    try {
        if (!name ) throw new Error('Name are required');
        await sql`Update users SET name = ${name} WHERE id=${Number(userId)};`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const users = await sql`SELECT * FROM users;`;
    return NextResponse.json({ users }, { status: 200 });
}