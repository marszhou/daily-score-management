import style from './Month.module.scss'

const WDPMonth = () => {
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
