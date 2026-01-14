import { Schema , model } from "mongoose"
interface IFeedback {
    id: string,
    feedback_title: string,
    feedback_disceiption: string
}
const FeedbackSchema:Schema<IFeedback> = new Schema({
    id: { type: String, required: true, unique: true },
    feedback_title: { type: String, required: true, trim: true},
    feedback_disceiption: { type: String, required: true, trim: true }
}, { timestamps: true })

const Feedback = model<IFeedback>("Feedback" , FeedbackSchema)
export default Feedback;