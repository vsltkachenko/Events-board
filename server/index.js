import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"

import eventRoute from "./routes/events.js"
import participantRoute from "./routes/participants.js"

dotenv.config()
const PORT = process.env.PORT || 8000
const app = express()
const corsOptions = {
	origin: true,
	credentials: true,
}

// database connection
const connect = async () => {
	try {
		const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.cnv5buc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
		await mongoose.connect(MONGO_URI)
		console.log("MongoDB database connected")
	} catch (error) {
		console.log("MongoDB database connection failed")
	}
}

//middleware
app.use(express.json())
app.use(cors(corsOptions))

app.use("/api/v1/events", eventRoute)
app.use("/api/v1/participants", participantRoute)

app.listen(PORT, () => {
	connect()
	console.log(`Server started on ${PORT} port`)
})
