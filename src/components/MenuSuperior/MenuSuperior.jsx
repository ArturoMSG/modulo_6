import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAutenticacionContext } from '../../hooks/useUsuario'
import './MenuSuperior.scss'
import logo from '../../assets/react.svg'

const MenuSuperior = () => {
  const { autenticado, logout } = useAutenticacionContext()

  const linkIsActive = (isActive) => isActive ? 'menusuperior__item-link--is-active' : 'menusuperior__item-link'

  return (
    <>
      <nav className='menusuperior'>
        <NavLink to='/' className='menusuperior__logo'><img
          src={logo}
          alt='LOGO'
          width={30}
          height={40}
                                                       />
        </NavLink>
        <ul className='menusuperior__ul'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => linkIsActive(isActive)}
            >Home
            </NavLink>
          </li>

          {autenticado
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
                    to='/Carrito'
                    className={({ isActive }) => linkIsActive(isActive)}
                  >Carrito
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
