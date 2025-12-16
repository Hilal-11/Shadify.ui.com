import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect"
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"


dbConnect()
export const POST = async (request: NextRequest) => {
    const body = await request.json();
    const { email, password } = body;
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    await dbConnect();
    console.log("Login body:", email, password);
    try{
        const user = await User.findOne({ email }).select("+password");
        if(!user) {
            return new NextResponse(JSON.stringify({ message: "Email not found, user not exists" }), { status: 500 })
        }   
        const isPasswordValid = await bcrypt.compare(password , user.password);
        if(!isPasswordValid){
            return new NextResponse(JSON.stringify({ message: "Email and password does not match, Invalid password" }), { status: 500 })
        }

        // Generate JWT Token
        const token = jwt.sign(
            { id: user._id, username: user.username, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: "1d" }
        )

        const { password: _, ...userData } = user.toObject();

        const response = NextResponse.json({
            message: "User logged in successfully",
            success: true,
            status: 200,
        })
        response.cookies.set("token", token, {
            httpOnly: true,
        })
        return response;

    }catch(error:any) {
        return new NextResponse(
            JSON.stringify({ message: "nternal server error"+ error.message}),
            {status: 500}
        )
    }
}