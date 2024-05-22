import { FC, useCallback, useEffect, useState } from "react"
import { debounce } from "ts-debounce"

type Props = {
  setRequestSearchValue: (searchValue: string) => void
}

const Search: FC<Props> = ({ setRequestSearchValue }) => {
  const [searchValue, setSearchValue] = useState("")

  const makeRequest = useCallback(
    debounce((searchValue: string) => {
      setRequestSearchValue(searchValue)
    }, 500),
    [],
  )

  useEffect(() => {
    makeRequest(searchValue)
  }, [searchValue])

  return (
    <div className="flex items-center">
      <input
        type="text"
        name="search"
        className="input h-10 w-72"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Search participants by name or email..."
        autoComplete="off"
      />
    </div>
  )
}

export default Search
