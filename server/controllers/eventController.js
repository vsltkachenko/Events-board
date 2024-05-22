import Event from "../models/Event.js"
import Participant from "../models/Participant.js"

// create Event
export const createEvent = async (req, res) => {
	try {
		const newEvent = new Event(req.body)
		const savedEvent = await newEvent.save()

		res.status(200).json({
			...savedEvent._doc,
			message: "You have successfully added an event",
		})
	} catch (error) {
		res.status(404).json({ message: "Not create event" })
	}
}

// get Events
export const getEvents = async (req, res) => {
	const {
		page = "1",
		events_sort = "createdAt",
		quantityPerPage = 12,
	} = req.query
	const currentPage = Number(page)

	const sortDirection = events_sort === "createdAt" ? -1 : 1

	try {
		const allEvents = await Event.find({})
		const allEventsCount = allEvents.length
		const totalPages = Math.ceil(allEventsCount / quantityPerPage)
		const hasMorePages = page < totalPages

		const events = await Event.find({})
			.sort({ [events_sort]: sortDirection })
			.populate("participants")
			.skip((currentPage - 1) * quantityPerPage)
			.limit(quantityPerPage)

		res.status(200).json({
			events,
			message: "Received successfully",
			allEventsCount,
			totalPages,
			currentPage,
			hasMorePages,
		})
	} catch (error) {
		res.status(404).json({ message: "Not found" })
	}
}
