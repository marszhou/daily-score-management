import { FunctionComponent } from 'react'

interface SaveButtonProps {
  onSave?(): void
}

const SaveButton: FunctionComponent<SaveButtonProps> = ({onSave}) => {
  return (
    <div className="d-grid gap-2 mt-4">
      <button
        className="btn btn-primary btn-sm"
        type="submit"
        onClick={onSave}
      >
        保存
      </button>
    </div>
  )
}

export default SaveButton
