import React, { DetailedHTMLProps, FunctionComponent } from 'react'
import WDPMonthCell from './Cell'
import style from './Month.module.scss'

interface WDPMonthInterface
  extends DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  year?: number
  month?: number
  selectedDates: Array<number>
}

const WDPMonth: FunctionComponent<WDPMonthInterface> = ({
  year,
  month,
  selectedDates = [],
}) => {
  return (
    <table className={`table ${style.monthTable}`}>
      <thead>
        <tr>
          <th scope="col">周一</th>
          <th scope="col">周二</th>
          <th scope="col">周三</th>
          <th scope="col">周四</th>
          <th scope="col">周五</th>
          <th scope="col" className="table-light">
            周六
          </th>
          <th scope="col" className="table-light">
            周日
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <WDPMonthCell date={12} />
          <WDPMonthCell date={12} />
          <WDPMonthCell date={12} />
          <WDPMonthCell date={12} />
          <WDPMonthCell date={12} />
          <WDPMonthCell date={12} className="table-light" />
          <WDPMonthCell date={12} className="table-light" />
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td className="table-light">6</td>
          <td className="table-light">7</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td className="table-light">6</td>
          <td className="table-light">7</td>
        </tr>
      </tbody>
    </table>
  )
}

export default WDPMonth
