import React, { useState } from 'react'
import CloseConfirmation from '../CloseConfirmation'
import DeleteConfirmation from '../DeleteConfirmation'
import Login from '../Login'
import Register from '../Register'
import { ModalScreen } from './styles'

const Modal = ({modalSelected, setModalSelected, modalVisibility, setModalVisibility}) => {

  return (
    <ModalScreen className={modalVisibility && 'modal_visible'}>
      <section className='form_container'>
        {
          modalSelected === 'login' && <Login setModalVisibility={setModalVisibility} />
        }
        {
          modalSelected === 'register' && <Register setModalSelected={setModalSelected} setModalVisibility={setModalVisibility} />
        } 
        {
          modalSelected === 'closeConfirm' && <CloseConfirmation setModalVisibility={setModalVisibility} />
        }
        {
          modalSelected === 'deleteConfirm' && <DeleteConfirmation setModalVisibility={setModalVisibility} />
        }
      </section>
    </ModalScreen>
  )
}

export default Modal