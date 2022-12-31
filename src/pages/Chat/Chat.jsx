import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'
import { ChatContainer } from './styles'
import emptyChatImg from '/chat-empty.png'

const API_URL = 'https://api-arias-chat.onrender.com/api/v1'

const Chat = ({chat}) => {

  const { register, handleSubmit, reset } = useForm();

  const myId = useSelector(state => state.userSlice.id)

  console.log(myId)

  const submit = data => {
    if (data.message) {
      const URL = `${API_URL}/conversations/${chat.id}/messages/`
      axios.post(URL, data, getConfig())
        .then(res => {
          console.log(res.data)
        })
        .catch(err => console.log(err))
    }
    reset({
      message: ""
    })
  }

  console.log(chat)

  return (
    <ChatContainer>
      <header>
        <img src={chat.imageUrl || emptyChatImg} alt="" />
        <h1>{chat.title}</h1>
      </header>
      <section>
        {
          chat.messages.map(message => (
            <div key={message.id} className={message.userId === myId && 'my_message'}>
              <span><img src="" alt="" />{message.message}</span>
              <p>Envíado a las {message.updatedAt.substring(11, 16)}</p>
            </div>
          ))
        }
      </section>
      <form className='message_bar' onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder='Mensaje' {...register("message")} />
        <button><i className="fa-solid fa-paper-plane"></i></button>
      </form>
    </ChatContainer>
  )
}

export default Chat