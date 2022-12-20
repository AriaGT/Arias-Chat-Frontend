import React from 'react'
import { useSelector } from 'react-redux'
import { HomePageContainer } from './styles'
import logo from '/vite.svg'

const HomePage = ({setModalSelected, setModalVisibility}) => {

  const myUser = useSelector(state => state.userSlice)

  const openLogin = () => {
    setModalSelected('login')
    setModalVisibility(true)
  }

  const openRegister = () => {
    setModalSelected('register')
    setModalVisibility(true)
  }

  return (
    <HomePageContainer>
    {
      myUser ?
        <>
          <h2>Hola {myUser.firstName}!</h2>
          <img src={logo} alt="" />
          <p>Ahora puedes ver tus chats o iniciar una nueva conversación</p>
          <div className='buttons'>
            <button>Ver chats</button>
            <button>Nuevo chat</button>
          </div>
        </>
      :
        <>
          <h2>Bienvenido a Arias Chat App!</h2>
          <img src={logo} alt="" />
          <p>Inicie sesión o Registrese para continuar:</p>
          <div className='buttons'>
            <button onClick={openLogin}>Iniciar sesión</button>
            <button onClick={openRegister}>Registrarse</button>
          </div>
        </>
    }
    </HomePageContainer>
    
  )
}

export default HomePage