import React, { useEffect, useState } from 'react'
import ChatCard from './ChatCard/ChatCard'
import { PageContainer } from '../../AppStyles'
import axios from 'axios'
import getConfig from '../../utils/getConfig'

const API_URL = 'https://api-arias-chat.onrender.com/api/v1'

const Chats = ({myChats}) => {

  const [chatsToShow, setChatsToShow] = useState([])

  useEffect(() => {
    myChats.map(chat => {
      const URL = `${API_URL}/conversations/${chat.id}/`
      axios.get(URL, getConfig())
        .then(res => {
          setChatsToShow(chatsToShow)
          chatsToShow.push(res.data)
        })
        .catch(err => console.log(err))
    })
  }, [])

  return (
    <PageContainer>
      <section>
        <h2>Tus Chats</h2>
        {
          chatsToShow.map(chat => (
            <ChatCard
              key={chat.id}
              chatId={chat.id}
              imageUrl={chat.imageUrl}
              title={chat.title}
              participants={chat.participants}
            />
          ))
          
        }
      </section>
    </PageContainer>
  )
}

export default Chats