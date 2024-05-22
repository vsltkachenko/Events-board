import Event from "../models/Event.js"
import Participant from "../models/Participant.js"

// add Participant
export const addParticipant = async (req, res) => {
	try {
		const id = req.params.id

		const newParticipant = new Participant(req.body)
		const savedParticipant = await newParticipant.save()

		await Event.findByIdAndUpdate(id, {
			$push: { participants: savedParticipant },
		})

		res.status(200).json({
			...savedParticipant._doc,
			message: "You have successfully registered for the event",
		})
	} catch (error) {
		res.status(500).json({ message: "Failed to add. Try again" })
	}
}

// get Participants by event id
export const getParticipants = async (req, res) => {
	const id = req.params.id
	const searchValue = req.query.search.toLowerCase()

	try {
		const event = await Event.findById(id).populate("participants")
		const participants = event.participants

		if (searchValue) {
			const filteredParticipants = participants.filter((p) => {
				return (
					p.name.toLowerCase().includes(searchValue) ||
					p.email.toLowerCase().includes(searchValue)
				)
			})
			res.status(200).json({
				message: "Successfully filtered",
				participants: filteredParticipants,
				eventName: event.title,
			})
		} else {
			res.status(200).json({
				message: "Successfully found",
				participants,
				eventName: event.title,
			})
		}
	} catch (error) {
		res.status(404).json({ message: "Not found" })
	}
}
