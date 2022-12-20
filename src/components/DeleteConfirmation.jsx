import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getMyUserData } from '../store/slices/user.slice'
import getConfig from '../utils/getConfig'

const API_URL = 'https://api-arias-chat.onrender.com/api/v1'

const DeleteConfirmation = ({setModalVisibility}) => {
  
  const dispatch = useDispatch()

  const confirmDelete = () => {
    const URL = `${API_URL}/users/me`
    axios.delete(URL, getConfig())
      .then(res => {
        console.log(res.data)
        localStorage.clear()
        dispatch(getMyUserData())
        setModalVisibility(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const cancelDelete = () => {
    setModalVisibility(false)
  }

  return (
    <article>
      <h3>¿Estás seguro de que quieres eliminar tu Usuario?</h3>
      <p className='error_message'>Esta acción no se puede deshacer</p>
      <div className="buttons">
        <button onClick={cancelDelete}>Cancelar</button>
        <button className='danger' onClick={confirmDelete}>Eliminar</button>
      </div>
    </article>
  )
}

export default DeleteConfirmation