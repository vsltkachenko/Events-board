import { FC } from "react"
import { GoPlus } from "react-icons/go"
import { Link } from "react-router-dom"
import logo from "../assets/elifTech.png"

const Header: FC = () => {
  return (
    <header className="bg-slate-800 text-white backdrop-blur-sm">
      <div className="container flex flex-wrap items-center justify-between gap-5 py-4">
        <Link to="/" className="flex">
          <img src={logo} className="w-7" alt="eliftech" />
          <h1 className="ml-4 text-xl">Events Board</h1>
        </Link>
        <div>
          <Link to="/addevent" className="btn btn-green">
            <GoPlus size={18} />
            Add event
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
