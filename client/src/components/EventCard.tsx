import { LuCalendarCheck } from "react-icons/lu"
import { useNavigate } from "react-router-dom"
import { IEventResponse } from "../types/types"
import { FC } from "react"
import { textSlice } from "../utils/textSlice"

type Props = {
  event: Omit<IEventResponse, "message">
  openCard: (value: string) => void
}

const EventCard: FC<Props> = ({ event, openCard }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => openCard(event._id)}
      className="group flex flex-col gap-1 overflow-hidden rounded-lg border bg-slate-50 p-3 shadow-sm transition-all duration-150 hover:cursor-pointer hover:bg-slate-200"
    >
      <h3 className="text-base font-bold decoration-slate-400 decoration-[1.5px] group-hover:underline group-hover:underline-offset-4">
        {textSlice(event.title, 50)}
      </h3>
      <div className="flex-1 text-sm">{textSlice(event.description, 100)}</div>

      <div className="mb-4 mt-2 flex items-end justify-between gap-4">
        <div className="flex flex-1 basis-full items-end space-x-1.5">
          <LuCalendarCheck size={18} className="mb-1" />
          <span className="text-sm">{event.eventdate}</span>
        </div>
        <div className="flex flex-wrap justify-end gap-x-1 text-xs">
          <span>Organizer:</span>
          <span className="text-right font-medium">
            {textSlice(event.organizer, 25)}
          </span>
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

export default EventCard
