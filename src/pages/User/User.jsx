import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getMyUserData } from '../../store/slices/user.slice'
import getConfig from '../../utils/getConfig'
import { PageContainer } from '../../AppStyles'
import emptyUserPhoto from '/user-empty-avatar.png'

const API_URL = 'https://api-arias-chat.onrender.com/api/v1'

const User = ({setModalSelected, setModalVisibility}) => {

  const dispatch = useDispatch()
  const myUser = useSelector(state => state.userSlice)

  const [isEditing, setIsEditing] = useState(false)

  const [firstNameWriting, setFirstNameWriting] = useState(false)
  const [firstNameLength, setFirstNameLength] = useState(0)
  const firstNameInputLengthChange = (e) => {
    const data = e.target.value
    if (data.length) {
      setFirstNameLength(data.length)
      setFirstNameWriting(true)
    } else {
      setFirstNameWriting(false)
    }
  }

  const [lastNameWriting, setLastNameWriting] = useState(false)
  const [lastNameLength, setLastNameLength] = useState(0)
  const lastNameInputLengthChange = (e) => {
    const data = e.target.value
    if (data.length) {
      setLastNameLength(data.length)
      setLastNameWriting(true)
    } else {
      setLastNameWriting(false)
    }
  }

  const [phoneWriting, setPhoneWriting] = useState(false)
  const [phoneLength, setPhoneLength] = useState(0)
  const phoneInputLengthChange = (e) => {
    const data = e.target.value
    if (data.length) {
      setPhoneLength(data.length)
      setPhoneWriting(true)
    } else {
      setPhoneWriting(false)
    }
  }

  const { register, handleSubmit, reset } = useForm();

  const submit = data => {
    const URL = `${API_URL}/users/me`
    axios.patch(URL, {
      firstName: data.firstName || myUser.firstName,
      lastName: data.lastName || myUser.lastName,
      phone: data.phone || myUser.phone,
      profileImage: data.profileImage || myUser.profileImage
    }, getConfig())
      .then(res => {
        console.log(res.data)
        setIsEditing(false)
        dispatch(getMyUserData())
      })
      .catch(err => {
        console.log(err)
      })
  }

  const cancelSubmit = () => {
    setIsEditing(false)
    reset({
      firstName: '',
      lastName: '',
      phone: '',
      profileImage: ''
    })
  }
  
  const goToDeleteAccount = () => {
    setModalSelected('deleteConfirm')
    setModalVisibility(true)
  }

  const goToCloseSession = () => {
    setModalSelected('closeConfirm')
    setModalVisibility(true)
  }

  return (
    <PageContainer>
      {
        !isEditing
        ?
        <div className='user_image_container'>
          <h2>Mi Perfil</h2>
          <img src={myUser.profileImage || emptyUserPhoto} alt="" />
          <div className='user_data'>
            <h1>{myUser.firstName + ' ' + myUser.lastName}</h1>
            <p>Nombre:<br /> {myUser.firstName}</p>
            <p>Apellido:<br /> {myUser.lastName}</p>
            <p>Número telefónico:<br /> {myUser.phone || 'No proporcionado'}</p>
            <div className='spacerMedium'></div>
          </div>
          <div className="buttons">
            <button onClick={() => setIsEditing(true)}>Editar</button>
            <button onClick={goToCloseSession}>Cerrar sesión</button>
            <button className='danger' onClick={goToDeleteAccount}>Eliminar</button>
          </div>
        </div>
        :
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <div className='image_edit'>
              <h2>Mi Perfil</h2>
              <label htmlFor="profileImage-input"><img src={myUser.profileImage || emptyUserPhoto} alt="" /></label>
            </div>
            <h1>{myUser.firstName + ' ' + myUser.lastName}</h1>
            <div>
              <label htmlFor="firstName-input">Nombre: </label>
              <input {...register("firstName")} onChange={firstNameInputLengthChange} size={(firstNameWriting) ? firstNameLength : myUser.firstName.length} type='text' id='firstName-input' placeholder={myUser.firstName} />
            </div>
            <div>
              <label htmlFor="lastName-input">Apellido: </label>
              <input {...register("lastName")} onChange={lastNameInputLengthChange} size={(lastNameWriting) ? lastNameLength : myUser.lastName.length} type='text' id='lastName-input' placeholder={myUser.lastName} />
            </div>
            <div>
              <label htmlFor="phone-input">Número telefónico: </label>
              <input {...register("phone")} onChange={phoneInputLengthChange} size={(phoneWriting) ? phoneLength : myUser.phone.length} type='text' id='phone-input' placeholder={myUser.phone || 'No proporcionado'} />
            </div>
            <button>Guardar</button>
          </form>
          <div className="buttons">
            <button onClick={cancelSubmit}>Cancelar</button>
          </div>
        </div>
      }
      
    </PageContainer>
  )
}

export default User