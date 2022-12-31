import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatCardContainer } from './style'
import emptyChatImage from '/chat-empty.png'

const ChatCard = (props) => {

  const navigate = useNavigate()

  const [participantsText, setParticipantsText] = useState('')

  useEffect(() => {
    var participantsArray = props.participants.map(participant => participant.user.firstName)
    const participantsString = participantsArray.slice(0, -1).join(',')+' y '+participantsArray.slice(-1)
    setParticipantsText(participantsString)
  }, [props.participants])

  const goToChat = () => {
    navigate(`/chats/${props.chatId}`)
  }

  return (
    <ChatCardContainer onClick={goToChat}>
      <img src={props.imageUrl || emptyChatImage} alt="" />
      <div>
        <strong>{props.title}</strong>
        <p>Participantes: {participantsText}</p>
      </div>
    </ChatCardContainer>
  )
}

export default ChatCard