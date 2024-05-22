import {
  IParticipantForm,
  IParticipantResponse,
  IParticipantsResponse,
} from "../../types/types"
import { api } from "./api"

export const participantApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addParticipant: builder.mutation<
      IParticipantResponse,
      IParticipantForm & { id: string }
    >({
      query: ({ id, ...participantData }) => ({
        url: `/participants/${id}`,
        method: "POST",
        body: participantData,
      }),
    }),

    getParticipants: builder.query<
      IParticipantsResponse,
      { id: string; searchValue: string }
    >({
      query: ({ id, searchValue }) => ({
        url: `/participants/${id}?search=${searchValue}`,
        method: "GET",
      }),
    }),
  }),
})

export const { useAddParticipantMutation, useGetParticipantsQuery } =
  participantApi

export const {
  endpoints: { addParticipant, getParticipants },
} = participantApi
