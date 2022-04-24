import React, { FunctionComponent, DetailedHTMLProps } from 'react'
import { ArrowLeftShort, ArrowRightShort } from 'react-bootstrap-icons'
import style from './Cell.module.scss'

interface CellProps
  extends DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {
  date: number
}

const Cell: FunctionComponent<CellProps> = ({
  date,
  className,
}) => {
  return (
    <td className={className}>
      <div className="d-flex justify-content-center">
        <div className="flex-fill">{date}</div>
        <div className={'flex-fill ' + style.actions}>
          <button className="badge rounded-pill bg-primary">
            开始
            <ArrowLeftShort />
          </button>
          <br />
          <button className="badge rounded-pill bg-danger">
            结束
            <ArrowRightShort />
          </button>
        </div>
      </div>
    </td>
  )
}

export default Cell
