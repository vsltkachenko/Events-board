import CustomSelect from "./ui/CustomSelect/CustomSelect"
import { useSearchParams } from "react-router-dom"

const sortList = [
  { value: "createdAt", label: "New first" },
  { value: "title", label: "Title" },
  { value: "eventdate", label: "Event date" },
  { value: "organizer", label: "Organizer" },
]

const Sort = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchParamsObj = Object.fromEntries(searchParams.entries())

  const setSelected = (value: string) => {
    setSearchParams({ events_sort: value })
  }

  return (
    <CustomSelect
      options={sortList}
      selectedValue={searchParamsObj.events_sort || "createdAt"}
      setCurrentValue={(value: string) => {
        setSelected(value)
      }}
    />
  )
}

export default Sort
