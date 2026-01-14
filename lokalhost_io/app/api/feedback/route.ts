import { NextResponse , NextRequest } from "next/server";
import Feedback from "@/lib/models/feedback";
import dbConnect from "@/lib/dbConnect";

await dbConnect()
export const POST = async (request: Request) => {
    const body = await request.json();
    const { feedback_title , feedback_discription } = body

    if(!feedback_title || !feedback_discription) {
        return new NextResponse(
            JSON.stringify({message: "Please give the correct feedback"}),{status: 400}
        )
    }
    try{
        const feedback = {
            feedback_title,
            feedback_discription
        }
        const newFeedback = new Feedback(feedback)
        await newFeedback.save();

        return new NextResponse(
            JSON.stringify({ message: "Thanks for your Feedback", feed: newFeedback }),{status: 200}
        )

    }catch(error:any) {
        return new NextResponse(
            JSON.stringify({ message:"Failed to send feedback, some internal issues"+ error.message }),{status: 501}
        )
    }
}
