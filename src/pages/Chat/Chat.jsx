import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'
import { ChatContainer } from './styles'
import emptyChatImg from '/chat-empty.png'

const API_URL = 'https://api-arias-chat.onrender.com/api/v1'

const Chat = ({chat}) => {

  const { register, handleSubmit, reset } = useForm();

  const myId = useSelector(state => state.userSlice.id)

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

  const messages_container = useRef(null)

  const scrollToBottoms = () => {
    if (messages_container.current) {
      messages_container.current.scrollTop = messages_container.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottoms()
  }, [chat])

  return (
    <ChatContainer>
      <header>
        <img src={chat.imageUrl || emptyChatImg} alt="" />
        <h1>{chat.title}</h1>
      </header>
      <div className='messages_container' ref={messages_container}>
        <div className='messages_list' >
          {
            chat.messages.map(message => (
              <div key={message.id} className={message.userId === myId ? 'my_message' : undefined}>
                <span><img src="" alt="" />{message.message}</span>
                <p>Envíado a las {message.updatedAt.substring(11, 16)}</p>
              </div>
            ))
          }
        </div>
      </div>
      <form className='message_bar' onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder='Mensaje' {...register("message")} />
        <button><i className="fa-solid fa-paper-plane"></i></button>
      </form>
    </ChatContainer>
  )
}

export default Chat