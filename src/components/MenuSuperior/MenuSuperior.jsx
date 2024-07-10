import React from 'react'
import { NavLink } from 'react-router-dom'
import './MenuSuperior.scss'

const MenuSuperior = () => {
  const isAuth = (false)
  const logout = (true)

  const linkIsActive = (isActive) => isActive ? 'menusuperior__item-link--is-active' : 'menusuperior__item-link'

  return (
    <>
      <nav className='menusuperior'>
        <NavLink to='/' className='menusuperior__logo'>LOGO </NavLink>
        <ul className='menusuperior__ul'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => linkIsActive(isActive)}
            >Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/dashboard'
              className={({ isActive }) => linkIsActive(isActive)}
            >Dashboard
            </NavLink>
          </li>

          {isAuth
            ? (
              <>
                <li>
                  <NavLink
                    to='/micuenta'
                    className={({ isActive }) => linkIsActive(isActive)}
                  >Mi Cuenta
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to='/'
                    className='menusuperior__item-link'
                    onClick={logout}
                  >Logout
                  </NavLink>
                </li>
              </>
              )
            : (
              <>
                <li>
                  <NavLink
                    to='/login'
                    className={({ isActive }) => linkIsActive(isActive)}
                  >Login
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to='/Registro'
                    className={({ isActive }) => linkIsActive(isActive)}
                  >Registro
                  </NavLink>
                </li>
              </>
              )}
        </ul>
      </nav>
    </>
  )
}

export default MenuSuperior
