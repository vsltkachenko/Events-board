import { FC } from "react"
import Select from "react-select"
import "./CustomSelect.scss"

type SortOption = {
  value: string
  label: string
}
type Props = {
  options: SortOption[]
  selectedValue: string
  setCurrentValue: (value: string) => void
}

const CustomSelect: FC<Props> = ({
  options,
  selectedValue,
  setCurrentValue,
}) => {
  const getValue = () =>
    options.find((option) => option.value === selectedValue)

  const onChange = (newValue: any) => {
    setCurrentValue(newValue.value)
  }

  return (
    <Select
      onChange={onChange}
      value={getValue()}
      options={options}
      isSearchable={false}
      classNamePrefix={"custom-select"}
      required
      // menuIsOpen={true}
    />
  )
}

export default CustomSelect
