import { useParams } from "react-router-dom"
import { useGetParticipantsQuery } from "../store/services/participantApi"
import { Spinner } from "../components/ui/Spinner"
import { TbGhost2 } from "react-icons/tb"
import Search from "../components/Search"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Participants = () => {
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id as string
  const [requestSearchValue, setRequestSearchValue] = useState("")

  const { data, isLoading } = useGetParticipantsQuery({
    id,
    searchValue: requestSearchValue,
  })

  return (
    <main>
      <div className="my-4">
        {!isLoading && <Search setRequestSearchValue={setRequestSearchValue} />}
      </div>
      {isLoading && (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-75">
          <Spinner className="h-10" />
        </div>
      )}
      {!isLoading && !data?.participants.length && (
        <div className="mt-32 flex">
          <div className="m-auto flex flex-col items-center">
            <h1 className="flex flex-col items-center gap-2">
              "{data?.eventName}" participants
              <TbGhost2 size={64} />
              <span className="text-xl"> Not found</span>
            </h1>
            <button
              onClick={() => navigate(-1)}
              className="btn btn-green mt-6 flex w-20 items-center justify-center"
            >
              Back
            </button>
          </div>
        </div>
      )}
      {!isLoading && !!data?.participants.length && (
        <div className='mb-10'>
          <h1 className="mb-4 ml-2 mt-4">"{data?.eventName}" participants</h1>

          <div className="grid-container">
            {data?.participants.map((participant) => (
              <div
                key={participant._id}
                className="flex flex-col gap-1 rounded-lg border bg-slate-50 p-3 shadow-sm transition-all duration-150"
              >
                <h3 className="mb-2 text-base font-bold">{participant.name}</h3>
                <div className="text-sm">
                  <span className="font-medium">Email: </span>
                  {participant.email}
                </div>
                <div>
                  <span className="font-medium">Birthday: </span>
                  <span className="text-sm">{participant.birthday}</span>
                </div>
                <div>
                  {participant.source && (
                    <span className="font-medium">Learned from: </span>
                  )}
                  <span className="text-sm">{participant.source}</span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-green my-6 flex w-20 items-center justify-center"
          >
            Back
          </button>
        </div>
      )}
    </main>
  )
}

export default Participants
