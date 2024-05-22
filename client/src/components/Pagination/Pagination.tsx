import { FC, useEffect, useState } from "react"

import "./Pagination.scss"
import { scrollToTop } from "../../utils/scrollToTop"
import { useSearchParams } from "react-router-dom"

type Props = {
  totalPages: number
  isLoading?: boolean
}

const Pagination: FC<Props> = ({ totalPages, isLoading = false }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchParamsObj = Object.fromEntries(searchParams.entries())
  const currentPage = Number(searchParamsObj.page) - 1 || 0

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setOffset(Math.floor(currentPage / 5) * 5)
  }, [currentPage])

  const setCurrentPage = (value: number) => {
    setSearchParams({
      page: String(value + 1),
      events_sort: searchParamsObj.events_sort || "createdAt",
    })
    scrollToTop()
  }
  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }
  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    !isLoading &&
    totalPages !== 1 && (
      <ul className="pagination">
        {currentPage > 0 && (
          <li key="first" onClick={() => setCurrentPage(0)}>
            <span>‹‹</span>
          </li>
        )}
        {currentPage > 0 && (
          <li key="prev" onClick={prevPage}>
            <span>‹</span>
          </li>
        )}
        {[...Array(Math.min(5, totalPages - offset))]?.map((_, index) => (
          <li
            key={index + offset}
            onClick={() => setCurrentPage(index + offset)}
          >
            <span
              className={currentPage === index + offset ? "active-page" : ""}
            >
              {index + offset + 1}
            </span>
          </li>
        ))}
        {currentPage + 1 < totalPages && (
          <li key="next" onClick={nextPage}>
            <span>›</span>
          </li>
        )}
        {currentPage + 1 !== totalPages && (
          <li key="last" onClick={() => setCurrentPage(totalPages - 1)}>
            <span>››</span>
          </li>
        )}
      </ul>
    )
  )
}

export default Pagination
