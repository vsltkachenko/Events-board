import mongoose from "mongoose"

const participantSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		birthday: {
			type: String,
			required: true,
		},
		source: {
			type: String,
		},
	},
	{ timestamps: true }
)

export default mongoose.model("Participant", participantSchema)
