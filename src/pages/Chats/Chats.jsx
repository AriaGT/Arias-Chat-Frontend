import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ChatCard from './ChatCard/ChatCard'
import { PageContainer } from '../../AppStyles'

const API_URL = 'https://api-arias-chat.onrender.com/api/v1'

const Chats = () => {

  const [myChats, setMyChats] = useState([])
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    const URL = `${API_URL}/users/`
    axios.get(URL)
      .then(res => {
        setAllUsers(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    const URL = `${API_URL}/conversations/`
    axios.get(URL, getConfig())
      .then(res => {
        setMyChats(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <PageContainer>
      <section>
        <h2>Tus Chats</h2>
        {
          myChats.map(chat => (
            <ChatCard
              key={chat.id}
              allUsers={allUsers}
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