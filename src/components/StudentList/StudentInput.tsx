import { FunctionComponent, useRef, useState } from 'react'

interface StudentInputProps {
  isExist(name: string): boolean
  onSubmit?(name: string): boolean
}

const StudentInput: FunctionComponent<StudentInputProps> = ({
  onSubmit,
  isExist,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isValidated, setIsValidated] = useState(false)

  return (
    <form
      className={`needs-validation ${isValidated ? 'was-validated' : ''}`}
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        if (inputRef.current) {
          const name = inputRef.current.value.trim()
          if (name === '') {
            inputRef.current.setCustomValidity('填写有效名字')
            setIsValidated(true)
          } else {
            if (!onSubmit?.(name)) {
              inputRef.current.setCustomValidity('该名称已经存在')
              setIsValidated(true)
            } else {
              inputRef.current.setCustomValidity('')
              inputRef.current.value = ''
              setIsValidated(false)
            }
          }
          form.reportValidity()
        }
      }}
    >
      <div className="input-group mb-3">
        <span className="input-group-text">输入学生名字</span>
        <input
          type="text"
          className="form-control "
          placeholder=""
          aria-label="学生名字"
          aria-describedby="button-addon2"
          ref={inputRef}
          name="name"
          autoComplete='off'
          onChange={() => {
            const name = inputRef.current?.value.trim() || ''
            if (isExist(name)) {
              inputRef.current?.setCustomValidity('该名称已存在')
            } else {
              inputRef.current?.setCustomValidity('')
            }
            inputRef.current?.reportValidity()
          }}
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          添加
        </button>
      </div>
    </form>
  )
}

export default StudentInput
