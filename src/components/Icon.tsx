import { DetailedHTMLProps } from 'react'
import { FunctionComponent } from 'react'

interface IconProps
  extends DetailedHTMLProps<
    React.BaseHTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  iconName: string
}

const Icon: FunctionComponent<IconProps> = ({ iconName, ...props }) => {
  return <i className={'bi bi-' + iconName} {...props}/>
}

export default Icon
