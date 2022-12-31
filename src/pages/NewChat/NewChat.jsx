import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { uploadFile } from '../../firebase/config';
import { PageContainer } from '../../AppStyles';
import getConfig from '../../utils/getConfig';
import { useDispatch, useSelector } from 'react-redux';
import chatCreate from '/chat-create.png'
import { setResetInfo } from '../../store/slices/resetInfo.slice';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://api-arias-chat.onrender.com/api/v1'

const NewChat = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm();
  const [allUsers, setAllUsers] = useState()
  const [participantId, setParticipantId] = useState()

  const [photo, setPhoto] = useState()
  const [photoPreview, setPhotoPreview] = useState()
  const [isUploading, setIsUploading] = useState(false)
  const [photoUrl, setPhotoUrl] = useState()
  const [dataError, setDataError] = useState(false)

  const autocompleteData = useSelector(state => state.resetInfoSlice)

  useEffect(() => {
    const URL = `${API_URL}/users/`
    axios.get(URL, getConfig())
    .then(res => {
      setAllUsers(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  //! Email Input
  
  const findUserIdByEmail = (e) => {
    const email = e.target.value
    const user = allUsers.filter(user => user.email === email)[0]
    user && setParticipantId(user.id)
  }
  
  console.log(participantId)

  useEffect(() => {
    if (participantId) {
      reset({
        imgUrl: photoUrl,
        participantId: participantId.id
      })
    }
  }, [participantId])

  //! Image Input

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
        imgUrl: result,
        participantId: participantId || autocompleteData.id
      })
    } catch (error) {
      console.error(error)
    }
  }

  //! Buttons

  const submit =  data => {
    const URL = `${API_URL}/conversations/`
    console.log(data)
    if (autocompleteData) {
      axios.post(URL, {
        title: data.title,
        imgUrl: photoUrl,
        participantId: autocompleteData.id
      }, getConfig())
        .then(() =>  {
          dispatch(setResetInfo(null))
          navigate('/chats')
        })
        .catch(err => {
          setDataError(true)
          console.log(err)
        })
    } else {
      axios.post(URL, {
        title: data.title,
        imgUrl: photoUrl,
        participantId: participantId
      }, getConfig())
        .then(() =>  {
          dispatch(setResetInfo(null))
          navigate('/chats')
        })
        .catch(err => {
          setDataError(true)
          console.log(err)
        })
    }
  }

  const cancelCreate = () => {
    reset({
      title: null,
      imgUrl: null,
      participantId: null
    })
    setPhoto(null)
    setPhotoPreview(null)
    setPhotoUrl('')
    setDataError(false)
    dispatch(setResetInfo(null))
    navigate('/')
  }

  if (!isUploading) {
    return (
      <PageContainer>
        {
          !autocompleteData &&
          <form className='default_questionary' onSubmit={handleSubmit(submit)}>
            <h3>Ingrese los datos para crear un nuevo Chat:</h3>
            <img style={{borderRadius: "50%"}} src={chatCreate} alt="" />
            {
              !photoPreview
              ? (
                <div onChange={e => goToImgUploader(e)}>
                  <label className='chatImg-label' htmlFor='chatImg-input'>Imagen (Opcional)</label>
                  <input type='file' accept='.png,.jpg,.jpeg' id='chatImg-input' />
                </div>
              )
              : (
                photoUrl
                ?
                <div className='photo_selected_container'>
                  <p>Esta será la imagen del Chat:</p>
                  <img style={{width: "60px", border: "1px solid #40e0d0"}} src={photoPreview} alt="" />
                </div>
                :
                <div className='photo_selected_container'>
                  <p>Cargando imagen<span>.</span></p>
                </div>
              )
            }
            <div>
              <label htmlFor='title-input'>Título</label>
              <input type='text' id='title-input' {...register("title")} />
            </div>
            <div>
              <label htmlFor='email-input'>Email del participante</label>
              <input onChange={findUserIdByEmail} type='text' id='email-input' />
            </div>
            
            {
              dataError &&
              <p className='error_message'>Algunos datos son incorrectos!</p>
            }
            <div className="buttons">
              <button onClick={cancelCreate} type="button">Cancelar</button>
              <button>Crear</button>
            </div>
          </form>
        }
        {
          autocompleteData &&
          <form className='default_questionary' onSubmit={handleSubmit(submit)}>
            <h3>Estás iniciando un nuevo chat con:</h3>
            <img src={autocompleteData.profileImage} alt="" />
            <h1>{autocompleteData.firstName} {autocompleteData.lastName}</h1>
            {
              !photoPreview
              ? (
                <div onChange={e => goToImgUploader(e)}>
                  <label className='chatImg-label' htmlFor='chatImg-input'>Imagen (Opcional)</label>
                  <input type='file' accept='.png,.jpg,.jpeg' id='chatImg-input' />
                </div>
              )
              : (
                photoUrl
                ?
                <div className='photo_selected_container'>
                  <p>Esta será la imagen del Chat:</p>
                  <img style={{width: "60px", border: "1px solid #40e0d0"}} src={photoPreview} alt="" />
                </div>
                :
                <div className='photo_selected_container'>
                  <p>Cargando imagen<span>.</span></p>
                </div>
              )
            }
            <div>
              <label htmlFor='title-input'>Crea un título</label>
              <input type='text' id='title-input' {...register("title")} />
            </div>
            {
              dataError &&
              <p className='error_message'>Algunos datos son incorrectos!</p>
            }
            <div className="buttons">
              <button onClick={cancelCreate} type="button">Cancelar</button>
              <button>Crear</button>
            </div>
          </form>
        }
      </PageContainer>
    )
  } else {
    return (
      <PageContainer>
        <section>
          <form className='default_questionary'>
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
        </section>
      </PageContainer>
    )
  }
}

export default NewChat