import { FC } from "react"
import { Link } from "react-router-dom"
import img from "../assets/page_not_found.png"

const ErrorPage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-slate-900 font-roboto">
      <img src={img} className="w-96" alt="" />
      <Link
        to={"/"}
        className="rounded-md bg-sky-600 px-6 py-2 text-white transition hover:bg-sky-700"
      >
        Back home
      </Link>
    </div>
  )
}

export default ErrorPage
