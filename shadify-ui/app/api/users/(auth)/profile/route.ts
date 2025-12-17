import { NextRequest, NextResponse } from 'next/server';
import User from '@/lib/models/user';
import dbConnect from '@/lib/dbConnect';
import Jwt from 'jsonwebtoken';
dbConnect();

const GET = async (request: NextRequest) => {
    // extract token from cookies
    const token = request.cookies.get("token")?.value;



}