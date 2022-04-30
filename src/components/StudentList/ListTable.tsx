import { FunctionComponent } from 'react'
import { toSvg } from 'jdenticon'
import { ArrowReturnLeft, PencilFill } from 'react-bootstrap-icons'
import style from './ListTable.module.scss'

interface ListTableProps {}

const ListTable: FunctionComponent<ListTableProps> = () => {
  const svgString = toSvg('hahah', 32)

  return (
    <table className={`table table-hover caption-top ${style.ListTable}`}>
      <caption>
        已有 <input type="checkbox" name="all" id="" /> 全选
      </caption>

      <tbody>
        <tr>
          <th scope="row" className={style.check}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              defaultChecked
            />
          </th>
          <td className={style.avatar}>
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`}
            />
          </td>
          <td style={{ verticalAlign: 'middle' }}>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Default checkbox
            </label>
          </td>
          <td className={style.action}>
            <button className="btn btn-success btn-sm" type="button">
              <PencilFill />
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              defaultChecked
            />
          </th>
          <td>
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`}
            />
          </td>
          <td>
            <input type="text" className='form-control form-control-sm'/>
          </td>
          <td style={{ width: 80, textAlign: 'right' }}>
            <button className="btn btn-primary btn-sm" type="button">
              <ArrowReturnLeft />
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              defaultChecked
            />
          </th>
          <td>
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`}
            />
          </td>
          <td>
            <input type="text" className='is-invalid form-control form-control-sm'/>
          </td>
          <td style={{ width: 80, textAlign: 'right' }}>
            <button className="btn btn-primary btn-sm" type="button">
              <ArrowReturnLeft />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ListTable
