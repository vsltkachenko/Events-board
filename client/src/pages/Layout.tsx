import { FC } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Layout: FC = () => {
  return (
    <div className="min-h-screen font-roboto text-slate-900">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
