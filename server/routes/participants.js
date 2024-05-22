import { Router } from "express"
import {
	addParticipant,
	getParticipants,
} from "../controllers/participantController.js"

const router = new Router()

// add Participant
router.post("/:id", addParticipant)

// get Participants
router.get("/:id", getParticipants)

export default router
