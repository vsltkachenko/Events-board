import { TbGhost2 } from "react-icons/tb"
import { Spinner } from "../components/ui/Spinner"
import { useGetEventsQuery } from "../store/services/eventApi"
import Main from "../components/Main"
import { useSearchParams } from "react-router-dom"
import { useMemo } from "react"

const Home = () => {
  const [searchParams] = useSearchParams()
  const searchParamsObj = Object.fromEntries(searchParams.entries())

  const option = useMemo(() => {
    return {
      page: searchParamsObj.page || "1",
      sortValue: searchParamsObj.events_sort,
    }
  }, [searchParamsObj.page, searchParamsObj.events_sort])

  const { data, isLoading } = useGetEventsQuery(option)

  return (
    <main className="main">
      {isLoading && (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-75">
          <Spinner className="h-10" />
        </div>
      )}
      {!isLoading && !data?.events.length && (
        <div className="m-auto flex flex-col items-center justify-center">
          <h1 className="flex items-center gap-2">
            <TbGhost2 size={64} />
            No events found
          </h1>
        </div>
      )}
      {!isLoading && !!data?.events.length && <Main {...data} />}
    </main>
  )
}

export default Home
