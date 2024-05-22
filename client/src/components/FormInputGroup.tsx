import React, { FC } from "react"

import { FieldValues, UseFormRegister, ValidationRule } from "react-hook-form"

type LengthType = {
  value: number
  message: string
}

type Props = {
  type: string
  name: string
  errorField?: any
  placeholder?: string
  register: UseFormRegister<FieldValues>
  required?: string
  pattern?: ValidationRule<RegExp>
  minLength?: LengthType
  labelText?: string
  classNameInput?: string
  classNameLabel?: string
}

const FormInputGroup: FC<Props> = ({
  type,
  name,
  errorField,
  placeholder,
  register,
  required,
  pattern,
  minLength,
  labelText,
  classNameInput = "",
  classNameLabel = "",
}) => {
  return (
    <div>
      {labelText && (
        <label className={classNameLabel} htmlFor={name}>
          {labelText}
        </label>
      )}
      <input
        className={`${classNameInput} ${errorField ? "input-error" : ""}`}
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name, {
          required,
          pattern,
          minLength,
        })}
      />
      {errorField && (
        <div className="absolute mt-1 text-xs text-[#e03f3c]">
          {errorField.message}
        </div>
      )}
    </div>
  )
}

export default React.memo(FormInputGroup)
