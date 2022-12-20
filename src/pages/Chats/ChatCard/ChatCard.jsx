import React, { useEffect, useState } from 'react'
import { ChatCardContainer } from './style'
import emptyChatImage from '/chat-empty.png'

const ChatCard = (props) => {

  const [participants, setParticipants] = useState('')

  useEffect(() => {
    var participantsArray = []
    for (let i = 0; i < props.participants.length; i++) {
      participantsArray.push(props.allUsers.filter(user => user.id === props.participants[i].userId)[0].firstName)
    }
    const participantsText = participantsArray.slice(0, -1).join(',')+' y '+participantsArray.slice(-1)
    setParticipants(participantsText)
  }, [props.allUsers])

  return (
    <ChatCardContainer>
      <img src={props.imageUrl || emptyChatImage} alt="" />
      <div>
        <strong>{props.title}</strong>
        <p>Participantes: {participants}</p>
      </div>
    </ChatCardContainer>
  )
}

export default ChatCard