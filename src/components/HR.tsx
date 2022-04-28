import React, { DetailedHTMLProps, FunctionComponent } from 'react'
import style from './HR.module.scss'

interface HRProps
  extends DetailedHTMLProps<
    React.BaseHTMLAttributes<HTMLHRElement>,
    HTMLHRElement
  > {
  text: string
}

const HR: FunctionComponent<HRProps> = ({ text, className, ...props }) => {
  return (
    <hr
      data-text={text}
      className={`${style.textHr} ${className}`}
      {...props}
    />
  )
}

export default HR
