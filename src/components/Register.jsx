import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { uploadFile } from '../firebase/config';

const API_URL = 'https://api-arias-chat.onrender.com/api/v1'

const Register = ({setModalVisibility, setModalSelected}) => {

  const { register, handleSubmit, reset } = useForm();

  const [photo, setPhoto] = useState(null)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [photoUrl, setPhotoUrl] = useState(undefined)
  const [dataError, setDataError] = useState(false)

  const goToImgUploader = (e) => {
    setPhoto(e.target.files[0])
    handlePhotoPreview(e.target.files[0])
    setIsUploading(true)
  }

  const handlePhotoPreview = (img) => {
    const imgPreview = URL.createObjectURL(img)
    setPhotoPreview(imgPreview)
  }

  const sendPhoto = async (e) => {
    e.preventDefault()
    setIsUploading(false)
    try {
      const result = await uploadFile(photo)
      setPhotoUrl(result)
      reset({
        profileImage: result
      })
    } catch (error) {
      console.error(error)
    }
  }

  const cancelRegister = () => {
    setModalVisibility(false)
    reset({
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      profileImage: null,
      phone: null
    })
    setPhoto(null)
    setPhotoPreview(null)
    setPhotoUrl('')
    setDataError(false)
  }

  const submit = data => {
    if (data.phone === "") {
      reset({
        phone: 'No proporcionado'
      })
    }
    const URL = `${API_URL}/users/`
    axios.post(URL, data)
      .then(res =>  {
        setModalSelected('login')
        console.log(res)
      })
      .catch(err => {
        setDataError(true)
        console.log(err)
      })
  }

  if (!isUploading) {
    return (
      <form onSubmit={handleSubmit(submit)}>
        <h3>Ingrese sus datos para Registrarse:</h3>
        <div>
          <label htmlFor='firstName-input'>Nombre</label>
          <input type='text' id='firstName-input' {...register("firstName")} />
        </div>
        <div>
          <label htmlFor='lastName-input'>Apellido</label>
          <input type='text' id='lastName-input' {...register("lastName")} />
        </div>
        <div>
          <label htmlFor='email-input'>Email</label>
          <input type='email' id='email-input' {...register("email")} />
        </div>
        <div>
          <label htmlFor='password-input'>Password</label>
          <input type='password' id='password-input' {...register("password")} />
        </div>
        {
          !photoPreview
          ? (
            <div onChange={e => goToImgUploader(e)}>
              <label className='profileImage-label' htmlFor='profileImage-input'>{"Subir foto de Perfil (Opcional)"}</label>
              <input type='file' accept='.png,.jpg,.jpeg' id='profileImage-input' />
            </div>
          )
          : (
            photoUrl
            ?
            <div className='photo_selected_container'>
              <p>Esta será tu foto de perfil:</p>
              <img style={{width: "60px", border: "1px solid #40e0d0"}} src={photoPreview} alt="" />
            </div>
            :
            <div className='photo_selected_container'>
              <p>Cargando foto de perfil<span>.</span></p>
            </div>
          )
        }
        <div>
          <label htmlFor='phone-input'>Número Telf. (Opcional)</label>
          <input type='text' id='phone-input' {...register("phone")} />
        </div>
        {
          dataError &&
          <p className='error_message'>Algunos datos son incorrectos!</p>
        }
        <div className="buttons">
          <button onClick={cancelRegister} type="button">Cancelar</button>
          <button>Registrarse</button>
        </div>
      </form>
    )
  } else {
    return (
      <form>
        <h3>Confirme si la foto seleccionada es correcta:</h3>
        <div className='imgContainer'></div>
        <img src={photoPreview} alt="" />
        <div className='buttons'>
          <button onClick={(e) => sendPhoto(e)}>Confirmar</button>
          <button onClick={() => {
            setPhotoPreview(null)
            setIsUploading(false)
          }}>Cancelar</button>
        </div>
      </form>
    )
  }
}

export default Register