import { Source } from "../enums/source"

export type IEventForm = {
  title: string
  description: string
  eventdate: string
  organizer: string
}

export interface IEventResponse extends IEventForm {
  _id: string
  participants: Omit<IParticipantResponse, "message">[]
  createdAt: Date
  updatedAt: Date
  __v: number
  message: string
}
export type Event = Omit<IEventResponse, "message">

export interface IEventsResponse {
  events: Event[]
  message: string
  allEventsCount: number
  totalPages: number
  currentPage: number
  hasMorePages: boolean
}

export interface IParticipantForm {
  name: string
  email: string
  birthday: string
  source?: Source
}
export interface IParticipantResponse extends IParticipantForm {
  _id: string
  createdAt: Date
  updatedAt: Date
  __v: number
  message: string
}
export interface IParticipantsResponse {
  participants: Omit<IParticipantResponse, "message">[]
  message: string
  eventName: string
}

export type EventOptions = {
  sortValue: string
  page: string
}
