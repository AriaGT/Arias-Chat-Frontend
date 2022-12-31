import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ProtectedRouteContainer } from './styles'
import missingUser from '/an-user.png'

const ProtectedRoute = ({setModalSelected, setModalVisibility}) => {

  const myUser = useSelector(state => state.userSlice)

  const openLogin = () => {
    setModalSelected('login')
    setModalVisibility(true)
  }

  const openRegister = () => {
    setModalSelected('register')
    setModalVisibility(true)
  }

  if (!myUser) {
    return (
      <ProtectedRouteContainer>
        <h2>Lo sentimos, es necesario iniciar sesión para entrar aquí!</h2>
        <img src={missingUser} alt="" />
        <p>Por favor inicie sesión o registrese:</p>
          <div className='buttons'>
            <button onClick={openLogin}>Iniciar sesión</button>
            <button onClick={openRegister}>Registrarse</button>
          </div>
      </ProtectedRouteContainer>
    )
  } else {
    return <Outlet />
  }
}

export default ProtectedRoute