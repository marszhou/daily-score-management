import React, { FunctionComponent, DetailedHTMLProps } from 'react'
import { ArrowLeftShort, ArrowRightShort } from 'react-bootstrap-icons'
import style from './Cell.module.scss'

interface CellProps
  extends DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {
  day: number
  month: number
  displayMonth: boolean
  selected: boolean
}

const Cell: FunctionComponent<CellProps> = ({
  day,
  month,
  displayMonth,
  className,
  selected,
}) => {
  return (
    <td className={className + ' ' + (selected ? style.selected : '')}>
      <div className="d-flex justify-content-center">
        <div className="flex-fill">{`${
          displayMonth ? `${month}/` : ''
        }${day}`}</div>
        <div className={'flex-fill ' + style.actions}>
          <button className={'badge rounded-pill bg-warning ' + style.btnSm}>
            开始
            <ArrowLeftShort size={12} />
          </button>
          <br />
          <button className={'badge rounded-pill bg-danger ' + style.btnSm}>
            结束
            <ArrowRightShort size={12} />
          </button>
        </div>
      </div>
    </td>
  )
}

export default Cell
