import { IEventResponse, IEventsResponse } from "../../types/types"
import { api } from "./api"

export const eventApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createEvent: builder.mutation<
      IEventResponse,
      {
        title: string
        description: string
        eventdate: string
        organizer: string
      }
    >({
      query: (eventData) => ({
        url: "/events",
        method: "POST",
        body: eventData,
      }),
    }),

    getEvents: builder.query<
      IEventsResponse,
      { sortValue: string; page: string }
    >({
      query: ({ page, sortValue }) => ({
        url: sortValue
          ? `/events/?page=${page}&events_sort=${sortValue}`
          : `/events/?page=${page}`,
        method: "GET",
      }),
    }),
  }),
})

export const {
  useCreateEventMutation,
  useGetEventsQuery,
  useLazyGetEventsQuery,
} = eventApi

export const {
  endpoints: { createEvent, getEvents },
} = eventApi
