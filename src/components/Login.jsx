import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { getMyUserData } from '../store/slices/user.slice';

const API_URL = 'https://api-arias-chat.onrender.com/api/v1'

const Login = ({ setModalVisibility }) => {

  const [dataError, setDataError] = useState(false)

  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch()

  const submit = data => {
    const URL = `${API_URL}/auth/login`
    axios.post(URL, data)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        dispatch(getMyUserData())
        setModalVisibility(false)
      })
      .catch(() => setDataError(true))
  }

  const cancelLogin = () => {
    setModalVisibility(false)
    reset({
      email: '',
      password: ''
    })
    setDataError(false)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h3>Ingrese sus datos para Iniciar sesion:</h3>
      <div>
        <label htmlFor='email-input'>Email</label>
        <input type='email' id='email-input' {...register("email")} />
      </div>
      <div>
        <label htmlFor='password-input'>Password</label>
        <input type='password' id='password-input' {...register("password")} />
      </div>
      {
        dataError &&
        <p className='error_message'>Algunos datos son incorrectos!</p>
      }
      <div className="buttons">
        <button onClick={cancelLogin} type="button">Cancelar</button>
        <button>Iniciar sesión</button>
      </div>
    </form>
  )
}

export default Login