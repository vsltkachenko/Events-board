import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { Spinner } from "../components/ui/Spinner"
import { useAddParticipantMutation } from "../store/services/participantApi"
import { IParticipantForm } from "../types/types"
import { formatDate } from "../utils/formatDate"
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form"
import FormInputGroup from "../components/FormInputGroup"
import { patternEmail } from "../utils/patternEmail"

const RegistrationWhithHookForm = () => {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id as string
  const [saving, setSaving] = useState(false)

  const [addParticipant] = useAddParticipantMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({ mode: "onTouched" })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const typedData = data as IParticipantForm

    try {
      setSaving(true)

      const response = await addParticipant({
        id,
        ...typedData,
        birthday: formatDate(typedData.birthday),
      }).unwrap()

      setSaving(false)
      navigate("/")
      toast.success(response.message)
    } catch (err: any) {
      console.log("error")
      const error = err.data?.message
      toast.error(error.toString())
    }
  }

  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <h1 className="mb-6 text-xl">Event registration</h1>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[22rem] rounded-lg border p-4 shadow-sm"
      >
        <fieldset disabled={saving} className="group">
          <div className="mb-12 flex flex-col gap-6 group-disabled:opacity-50">
            <FormInputGroup
              type="text"
              name="name"
              errorField={errors.name}
              placeholder="Full name"
              labelText="Full name"
              register={register}
              required="This field is required"
              minLength={{ value: 3, message: "Minimum 3 characters" }}
              classNameInput="input w-full"
            />
            <FormInputGroup
              type="email"
              name="email"
              errorField={errors.email}
              placeholder="Email"
              labelText="Email"
              register={register}
              required="Email address is required"
              pattern={patternEmail}
              classNameInput="input w-full"
            />
            <FormInputGroup
              type="date"
              name="birthday"
              errorField={errors.birthday}
              labelText="Date of birth"
              register={register}
              required="Date of birth is required"
              classNameInput="input w-full"
            />
            <div>
              <div className="mb-2">Where did you hear about this event?</div>
              <div className="flex items-center justify-start text-sm">
                <Controller
                  name="source"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="radio"
                        id="social"
                        className="input-radio"
                        onChange={(e) => {
                          field.onChange(e)
                          setValue("source", "social")
                        }}
                        value="social"
                      />
                      <label htmlFor="social" className="ml-1.5 mr-5">
                        Social social
                      </label>
                    </>
                  )}
                />
                <Controller
                  name="source"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="radio"
                        id="friends"
                        className="input-radio"
                        value="friends"
                        onChange={(e) => {
                          field.onChange(e)
                          setValue("source", "friends")
                        }}
                      />
                      <label htmlFor="friends" className="ml-1.5 mr-5">
                        Friends
                      </label>
                    </>
                  )}
                />
                <Controller
                  name="source"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="radio"
                        id="myself"
                        className="input-radio"
                        value="myself"
                        onChange={(e) => {
                          field.onChange(e)
                          setValue("source", "myself")
                        }}
                      />
                      <label htmlFor="myself" className="ml-1.5">
                        Found myself
                      </label>
                    </>
                  )}
                />
              </div>
            </div>
          </div>
          <div className='flex'>
            <button
                  onClick={() => navigate(-1)}
                  className="btn btn-orange relative mx-auto group-disabled:pointer-events-none"
                >
                  <span className="group-disabled:opacity-0">Cansel</span>
                </button>
            <button
              type="submit"
              className="btn btn-green relative mx-auto group-disabled:pointer-events-none"
            >
              <Spinner className="absolute left-[40%] h-4 group-enabled:opacity-0" />
              <span className="group-disabled:opacity-0">Submit</span>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default RegistrationWhithHookForm
