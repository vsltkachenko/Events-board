import { FormEvent, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { Spinner } from "../components/ui/Spinner"
import { useAddParticipantMutation } from "../store/services/participantApi"
import { IParticipantForm } from "../types/types"
import { Source } from "../enums/source"
import { formatDate } from "../utils/formatDate"

const Registration = () => {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id as string
  const [saving, setSaving] = useState(false)

  const [addParticipant] = useAddParticipantMutation()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()
      setSaving(true)

      const formData = Object.fromEntries(
        new FormData(event.currentTarget),
      ) as Record<string, string>

      const data: IParticipantForm = {
        name: formData.name,
        email: formData.email,
        birthday: formData.birthday,
        source: formData.sourсe as Source,
      }

      const response = await addParticipant({
        id,
        ...data,
        birthday: formatDate(data.birthday),
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
    <div className="mt-32 flex flex-col items-center justify-center">
      <h1 className="mb-6 text-xl">Event registration</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[22rem] rounded-lg border p-4 shadow-sm"
      >
        <fieldset disabled={saving} className="group">
          <div className="group-disabled:opacity-50">
            <label htmlFor="name" className="block text-base">
              Full name
            </label>
            <input
              type="text"
              className="input mb-4 w-full"
              id="name"
              name="name"
              placeholder="Full name"
              autoComplete="off"
              required
            />
            <label htmlFor="email" className="block text-base">
              Email
            </label>
            <input
              type="email"
              className="input mb-4 w-full"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <label htmlFor="birthday" className="block text-base">
              Date of birth
            </label>
            <input
              type="date"
              className="input mb-4 w-full"
              id="birthday"
              name="birthday"
              required
            />

            <div className="mb-8 flex items-center justify-start text-sm">
              <input
                type="radio"
                id="social"
                name="sourсe"
                value="social"
                className="input-radio"
              />
              <label htmlFor="social" className="ml-1.5 mr-5">
                Social social
              </label>
              <input
                type="radio"
                id="friends"
                name="sourсe"
                value="friends"
                className="input-radio"
              />
              <label htmlFor="friends" className="ml-1.5 mr-5">
                Friends
              </label>
              <input
                type="radio"
                id="myself"
                name="sourсe"
                value="myself"
                className="input-radio"
              />
              <label htmlFor="myself" className="ml-1.5">
                Found myself
              </label>
            </div>
            <button className="btn btn-green relative mx-auto group-disabled:pointer-events-none">
              <Spinner className="absolute left-[40%] h-4 group-enabled:opacity-0" />
              <span className="group-disabled:opacity-0">Submit</span>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Registration
