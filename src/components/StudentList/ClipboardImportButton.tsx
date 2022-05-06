import { FunctionComponent, useEffect, useRef, useState } from 'react'

interface ClipboardImportButtonProps {
  getAvalibleNames(text: string): Array<string>
}

const ClipboardImportButton: FunctionComponent<ClipboardImportButtonProps> = ({
  getAvalibleNames,
}) => {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const [lines, setLines] = useState(0)
  useEffect(() => {
    timer.current = setInterval(() => {
        navigator.clipboard.readText().then((clipText) => {
          setLines(getAvalibleNames(clipText).length)
        }).catch(() => {})
    }, 500)
    return () => {
      clearInterval(timer.current as ReturnType<typeof setInterval>)
      timer.current = null
    }
  }, [])
  return (
    <div className="d-grid gap-2">
      <button
        className="btn btn-success"
        type="button"
        onClick={() => {}}
        disabled={lines === 0}
      >
        拷贝文本后点击此按钮导入{lines > 0 && <span>({lines})</span>}
      </button>
    </div>
  )
}

export default ClipboardImportButton
