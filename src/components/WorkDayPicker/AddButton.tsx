import { FunctionComponent } from 'react'

interface AddButtonProps {}

const AddButton: FunctionComponent<AddButtonProps> = () => {
  return (
    <div className="d-grid gap-2 mt-2 mb-2">
      <button className="btn btn-success btn-sm" type="button">
        Button
      </button>
    </div>
  )
}

export default AddButton
