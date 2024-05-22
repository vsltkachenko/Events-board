import { LuCalendarCheck } from "react-icons/lu"
import { useNavigate } from "react-router-dom"
import { IEventResponse } from "../types/types"
import { FC } from "react"

type Props = {
  event?: Omit<IEventResponse, "message">
}

const EventFullCard: FC<Props> = ({ event }) => {
  const navigate = useNavigate()

  if (event) {
    return (
      <div className="flex min-w-72 flex-col gap-2 overflow-hidden bg-slate-50 p-5 sm:min-w-96  ">
        <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
        <div className="mb-4 flex-1 text-sm">{event.description}</div>

        <div className="mb-4 mt-2 flex items-end justify-between gap-4">
          <div className="flex flex-1 basis-full items-end space-x-1.5">
            <LuCalendarCheck size={18} className="mb-1" />
            <span className="text-sm">{event.eventdate}</span>
          </div>
          <div className="flex flex-wrap justify-end gap-x-1 text-xs">
            <span>Organizer:</span>
            <span className="text-right font-medium">{event.organizer}</span>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            className="btn btn-blue"
            onClick={() => {
              navigate(`/registration/${event._id}`)
            }}
          >
            Register
          </button>
          <button
            className="btn btn-orange"
            onClick={() => {
              navigate(`/participants/${event._id}`)
            }}
          >
            View
          </button>
        </div>
      </div>
    )
  }
}

export default EventFullCard
