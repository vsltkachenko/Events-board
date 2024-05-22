import mongoose from "mongoose"

const eventSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		eventdate: { type: String, required: true },
		organizer: { type: String, required: true },
		participants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Participant",
			},
		],
	},
	{ timestamps: true }
)

export default mongoose.model("Event", eventSchema)
