import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SideNavbarContainer } from './styles'
import emptyUserPhoto from '/user-empty-avatar.png'

const sideNavBar = ({ setModalVisibility, setModalSelected }) => {

  const myUser = useSelector(state => state.userSlice)

  const goToCloseSession = () => {
    setModalSelected('closeConfirm')
    setModalVisibility(true)
  }

  return (
    <SideNavbarContainer>
      <nav>
        <ul>
          <li>
            <Link to='/me' className='profileSection'>
              <img src={myUser.profileImage || emptyUserPhoto} alt="" />
              <span className='nav-item'>{myUser.firstName || 'Arias Chat'}</span>
            </Link>
          </li>
          <li>
            <Link to="/">
            <i className="fa-solid fa-house"></i>
              <span className='nav-item'>Pagina principal</span> 
            </Link>
          </li>
          <li>
            <Link to="/new-chat">
              <i className="fa-solid fa-envelope-open-text"></i>
              <span className='nav-item'>Nuevo chat</span> 
            </Link>
          </li>
          <li>
            <Link to="/chats">
              <i className="fa-solid fa-comments"></i>
              <span className='nav-item'>Mostrar chats</span> 
            </Link>
          </li>
          <li>
            <Link to="/users">
              <i className="fa-solid fa-users"></i>
              <span className='nav-item'>Buscar personas</span> 
            </Link>
          </li>
          {
            myUser &&
            <li>
              <a onClick={goToCloseSession} className='logout'>
                <i className="fa-solid fa-right-from-bracket"></i>
                <span className='nav-item'>Cerrar Sesión</span> 
              </a>
            </li>
          }
        </ul>
      </nav>
    </SideNavbarContainer>
  )
}

export default sideNavBar