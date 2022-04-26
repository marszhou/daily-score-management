import { FunctionComponent, ReactNode } from 'react'

interface AddButtonProps {
  children: ReactNode
  onClick(): void
}

const AddButton: FunctionComponent<AddButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <div className="d-grid gap-2 mt-2 mb-2">
      <button
        className="btn btn-success btn-sm"
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}

export default AddButton
