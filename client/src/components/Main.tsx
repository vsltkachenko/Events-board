import { FC, useState } from "react"
import Sort from "./Sort"
import Modal from "./ui/Modal/Modal"
import EventFullCard from "./EventFullCard"
import EventCard from "./EventCard"
import { Event, IEventsResponse } from "../types/types"
import Pagination from "./Pagination/Pagination"

const Main: FC<IEventsResponse> = ({ events, totalPages }) => {
  const [modalActive, setModalActive] = useState(false)
  const [activeCard, setActiveCard] = useState<Event>()
  
  const openCard = (id: string) => {
    setActiveCard(events.find((event) => event._id === id))
    setModalActive(true)
  }

  return (
    <>
      <>
        <div className="mb-3 mt-4 flex items-end justify-between pl-5">
          <h1 className="">Events</h1>
          <Sort />
        </div>
        <div className="grid-container">
          {events.map((event, index) => (
            <EventCard key={index} event={event} openCard={openCard} />
          ))}
        </div>
        <Pagination totalPages={totalPages} />
      </>
      <Modal active={modalActive} modalClose={() => setModalActive(false)}>
        <EventFullCard event={activeCard} />
      </Modal>
    </>
  )
}

export default Main
