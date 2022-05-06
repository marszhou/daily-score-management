import { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'

interface ClipboardImportButtonProps {
  onImport(names: Array<string>): void
  currentNames: Array<string>
}

const ClipboardImportButton: FunctionComponent<ClipboardImportButtonProps> = ({
  onImport,
  currentNames,
}) => {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const [names, setNames] = useState<Array<string>>([])
  const getAvalibleNames = useCallback((text: string) => {
    return [...new Set(text.split('\n').map((s) => s.trim()))]
      .filter((s) => s.length > 0)
      .filter((s) => !currentNames.includes(s))
  }, [currentNames])

  useEffect(() => {
    timer.current = setInterval(() => {
      navigator.clipboard
        .readText()
        .then((clipText) => {
          setNames(getAvalibleNames(clipText))
        })
        .catch(() => {})
    }, 500)
    return () => {
      clearInterval(timer.current as ReturnType<typeof setInterval>)
      timer.current = null
    }
  }, [currentNames, getAvalibleNames])
  return (
    <div className="d-grid gap-2">
      <button
        className="btn btn-success"
        type="button"
        onClick={() => {
          onImport(names)
        }}
        disabled={names.length === 0}
      >
        拷贝文本后点击此按钮导入
        {names.length > 0 && <span>({names.length})</span>}
      </button>
    </div>
  )
}

export default ClipboardImportButton
