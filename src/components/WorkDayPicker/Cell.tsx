import React, { FunctionComponent, DetailedHTMLProps } from 'react'
import { ArrowLeftShort, ArrowRightShort } from 'react-bootstrap-icons'
import style from './Cell.module.scss'

export interface SetDateProps {
  onChoose?(date: Date): void
  onSetBegin?(date: Date): void
  onSetEnd?(date: Date): void
}
interface CellProps
  extends DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {
  date: Date
  displayMonth: boolean
  selected: boolean
}

const Cell: FunctionComponent<CellProps & SetDateProps> = ({
  date,
  displayMonth,
  className,
  selected,
  onChoose,
  onSetBegin,
  onSetEnd,
}) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  return (
    <td
      className={className + ' ' + (selected ? style.selected : '')}
      onClick={() => onChoose?.(date)}
    >
      <div className="d-flex justify-content-center">
        <div className="flex-fill">{`${
          displayMonth ? `${month}/` : ''
        }${day}`}</div>
        <div className={'flex-fill ' + style.actions}>
          <button
            className={'badge rounded-pill bg-warning ' + style.btnSm}
            onClick={(e) => {
              e.stopPropagation()
              onSetBegin?.(date)
            }}
          >
            开始
            <ArrowLeftShort size={12} />
          </button>
          <br />
          <button
            className={'badge rounded-pill bg-danger ' + style.btnSm}
            onClick={(e) => {
              e.stopPropagation()
              onSetEnd?.(date)
            }}
          >
            结束
            <ArrowRightShort size={12} />
          </button>
        </div>
      </div>
    </td>
  )
}

export default Cell
