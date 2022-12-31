import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setResetInfo } from '../../../store/slices/resetInfo.slice'
import { UserCardContainer } from './style'
import emptyUserImage from '/user-empty-avatar.png'

const ChatCard = ({id, email, firstName, lastName, phone, profileImage}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const setCreateUserData = () => {
    dispatch(setResetInfo({id, firstName, lastName, profileImage}))
    navigate('/new-chat')
  }

  return (
    <UserCardContainer onClick={setCreateUserData}>
      <div className="img-container">
          <img src={profileImage || emptyUserImage} />
      </div>
      <div className="text-container">
        <h3>{firstName} {lastName}</h3>
        <div>
          <p>Email:<br /><span>{email}</span></p>
          <p>Num. Telf.:<br /><span>{phone}</span></p>
        </div>
      </div>
    </UserCardContainer>
  )
}

export default ChatCard