import React, { FunctionComponent } from 'react'



interface MainProps {
  children?: React.ReactNode
}

const Main: FunctionComponent<MainProps> = ({children}) => {
  return <>{children}</>
}

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return null
}

interface TwoColumnLayoutProps {
  children: [React.ReactElement<MainProps>, React.ReactElement<SidebarProps>]
}

const TwoColumnLayout: FunctionComponent<TwoColumnLayoutProps> & {Main: typeof Main, Sidebar: typeof Sidebar} = ({
  children,
}) => {
  return (
    <div>
      {children[0]}
      {children[1]}
    </div>
  )
}
TwoColumnLayout.Main = Main
TwoColumnLayout.Sidebar = Sidebar
export default TwoColumnLayout