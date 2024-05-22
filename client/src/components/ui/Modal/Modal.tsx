import React, { FC } from "react"
import "./Modal.scss"
import lockBody from "../../../utils/lockBody"

type Props = {
  active: boolean
  modalClose: () => void
  children: React.ReactNode
}

const Modal: FC<Props> = ({ active, modalClose, children }) => {
  lockBody(active)

  return (
    <div className={`modal ${active ? "active" : ""}`} onClick={modalClose}>
      <div className="modal__box">
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
