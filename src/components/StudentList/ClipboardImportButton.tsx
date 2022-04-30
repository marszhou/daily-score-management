import { FunctionComponent } from 'react'

interface ClipboardImportButtonProps {}

const ClipboardImportButton: FunctionComponent<
  ClipboardImportButtonProps
> = () => {
  return (
    <div className="d-grid gap-2">
      <button
        className="btn btn-success"
        type="button"
        onClick={() => {
          navigator.clipboard
            .readText()
            .then((clipText) => console.log(clipText))
        }}
      >
        拷贝文本后点击此按钮导入
      </button>
    </div>
  )
}

export default ClipboardImportButton
