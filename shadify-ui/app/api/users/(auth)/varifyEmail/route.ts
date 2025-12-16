import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect"
import User from "@/lib/models/user";

export const POST = async (request: NextRequest) => {
    const body = await request.json();
    const { token } = body;

    console.log("Varify Email body:", token);
    if (!token) {
      return NextResponse.json(
        { message: "varifyToken is required" },
        { status: 400 }
      );
    }
    await dbConnect();

    try{   
        const user = await User.findOne({ varifyToken: token , varifyTokenExpiry: {$gt: Date.now()} })

        if(!user) {
            return new NextResponse(JSON.stringify({ message: "Invalid token or token expired" }), { status: 500 })
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

        