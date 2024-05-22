import { FormEvent, useState } from "react"
import { toast } from "react-toastify"
import { Spinner } from "../components/ui/Spinner"
import { useCreateEventMutation } from "../store/services/eventApi"
import { IEventForm } from "../types/types"
import { formatDate } from "../utils/formatDate"
import { useNavigate } from "react-router-dom"

const CreateEvent = () => {
  const navigate = useNavigate()
  let [saving, setSaving] = useState(false)
  const [createEvent] = useCreateEventMutation()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()
      setSaving(true)
      let data = Object.fromEntries(
        new FormData(event.currentTarget),
      ) as IEventForm

      const response = await createEvent({
        ...data,
        eventdate: formatDate(data.eventdate),
      }).unwrap()

      setSaving(false)
      navigate("/")
      toast.success(response.message)
    } catch (err: any) {
      console.log("error")

      const error = err.data?.message
      toast.error(error.toString())
    }
  }

  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <h1 className="mb-6 text-xl">Add a new event</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-80 rounded-lg border p-4 shadow-sm"
      >
        <fieldset disabled={saving} className="group">
          <div className="group-disabled:opacity-50">
            <label htmlFor="name" className="block text-base">
              Title
            </label>
            <input
              type="text"
              className="input mb-4 w-full"
              id="title"
              name="title"
              placeholder="Title"
              autoComplete="off"
              required
            />
            <label htmlFor="email" className="block text-base">
              Description
            </label>
            <textarea
              className="input mb-4 w-full"
              id="description"
              name="description"
              placeholder="Description"
              autoComplete="off"
              required
            />
            <label htmlFor="eventdate" className="block text-base">
              Event date
            </label>
            <input
              type="date"
              className="input mb-4 w-full"
              id="eventdate"
              name="eventdate"
              required
            />
            <label htmlFor="organizer" className="block text-base">
              Organizer
            </label>
            <input
              type="text"
              className="input mb-4 w-full"
              id="organizer"
              name="organizer"
              placeholder="Organizer"
              autoComplete="off"
              required
            />
            <div className="flex ">
              <button
                onClick={() => navigate(-1)}
                className="btn btn-orange relative mx-auto group-disabled:pointer-events-none"
              >
                <span className="group-disabled:opacity-0">Cancel</span>
              </button>
              <button className="btn btn-green relative mx-auto group-disabled:pointer-events-none">
                <Spinner className="absolute left-[40%] h-4 group-enabled:opacity-0" />
                <span className="group-disabled:opacity-0">Submit</span>
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default CreateEvent
