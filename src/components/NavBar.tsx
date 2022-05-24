import React, { DetailedHTMLProps, FunctionComponent } from 'react'
import { Link, NavLink } from 'react-router-dom'

interface NavBarProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const NavBar: FunctionComponent<NavBarProps> = (props) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark rounded" {...props}>
      <div className="container-fluid">
        <h3 style={{color: '#FFF'}}>
          DSM
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                首页
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                作业
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                课堂回答
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                测验
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                考勤
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                月考
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                设置
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
