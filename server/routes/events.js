import { Router } from "express"
import { createEvent, getEvents } from "../controllers/eventController.js"

const router = new Router()

// create event
router.post("/", createEvent)

// get all events
router.get("/", getEvents)

export default router
