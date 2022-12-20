import React from 'react'
import { useDispatch } from 'react-redux'
import { getMyUserData } from '../store/slices/user.slice'

const CloseConfirmation = ({setModalVisibility}) => {

  const dispatch = useDispatch()

  const confirmClose = () => {
    localStorage.clear()
    dispatch(getMyUserData())
    setModalVisibility(false)
  }

  const cancelClose = () => {
    setModalVisibility(false)
  }

  return (
    <article>
      <h3>¿Estás seguro de que quieres cerrar sesión?</h3>
      <p>Tendrás que iniciar sesión nuevamente para acceder a tus chats.</p>
      <div className="buttons">
        <button onClick={cancelClose}>Cancelar</button>
        <button onClick={confirmClose}>Cerrar sesión</button>
      </div>
    </article>
  )
}

export default CloseConfirmation