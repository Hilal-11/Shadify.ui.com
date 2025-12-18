import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect"
import User from "@/lib/models/user";
import Jwt from "jsonwebtoken";

dbConnect();
export const POST = async (request: NextRequest) => {
    const body = await request.json();
    const { token } = body;

    console.log("Varify Email Token = ", token);
    // if (!token) {
    //   return NextResponse.json(
    //     { message: "varifyToken is required" },
    //     { status: 400 }
    //   );
    // }
    // await dbConnect();

    try{
        const decodeToken:any = Jwt.verify(token , process.env.JWT_SECRET!);
        console.log("Decode Token = ", decodeToken);
        console.log("Decode Token ID = ", decodeToken.id);
        const user = await User.findById(decodeToken.id)
        console.log("User fetched for email varification = ", user);
        if(!user) {
            return new NextResponse(JSON.stringify({ message: "User not found or token expired" }), { status: 500 })
        }

        user.isVarified = true;
        user.varifyToken = undefined;
        user.varifyTokenExpiry = undefined

        await user.save();
        
        return new NextResponse(
            JSON.stringify({ message: "Email verified successfully" , user: user }),
            {status: 200}
        )

    }catch(error:any) {
        return new NextResponse(
            JSON.stringify({ message: "failed to verify email"+ error.message}),
            {status: 500}
        )
    }
}

        