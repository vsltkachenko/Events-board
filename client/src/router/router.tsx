import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import Layout from "../pages/Layout"
import Participants from "../pages/Participants"
// import Registration from "../pages/Registration" // without react-hook-form
import RegistrationWhithHookForm from "../pages/RegistrationWhithHookForm"
import CreateEvent from "../pages/CreateEvent"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "addevent",
        element: <CreateEvent />,
      },
      {
        path: "registration/:id",
        element: <RegistrationWhithHookForm />,
      },
      {
        path: "participants/:id",
        element: <Participants />,
      },
    ],
  },
])
