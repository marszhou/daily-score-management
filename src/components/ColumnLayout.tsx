import React, { FunctionComponent } from 'react'

interface ColProps {
  children?: React.ReactNode;
  cols: 1|2|3|4|5|6|7|8|9|11|12|0
}

const Col: FunctionComponent<ColProps> = ({ children, cols }) => {
  return <div className={`col-${cols}`}>{children}</div>
}

interface ColumnLayoutProps {
  children: React.ReactElement<ColProps>|Array<React.ReactElement<ColProps>>;
  gap?: 1|2|3|4|5|0
}

const ColumnLayout: FunctionComponent<ColumnLayoutProps> & {
  Col: typeof Col
} = ({ children, gap=0 }) => {
  // const cols = React.Children.toArray(children)// as unknown as Array<typeof Col>
  return (
    <div className="container">
      <div className={`row g-${gap}`}>
        {children}
      </div>
    </div>
  )
}
ColumnLayout.Col = Col
export default ColumnLayout
