import { FunctionComponent } from 'react'

interface SaveButtonProps {}

const SaveButton: FunctionComponent<SaveButtonProps> = () => {
  return (
    <div className="d-grid gap-2 mt-4">
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          navigator.clipboard
            .readText()
            .then((clipText) => console.log(clipText))
        }}
      >
        保存
      </button>
    </div>
  )
}

export default SaveButton
