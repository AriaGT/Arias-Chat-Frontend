import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import UserCard from './UserCard/UserCard'
import { PageContainer } from '../../AppStyles'
import { useSelector } from 'react-redux'

const API_URL = 'https://api-arias-chat.onrender.com/api/v1'

const Users = () => {

  const me = useSelector(state => state.userSlice)
  const [allUsers, setAllUsers] = useState([])

  const [recomendedUsers, setRecomendedUsers] = useState([])
  const [searchUserResults, setSearchUserResults] = useState([])

  useEffect(() => {
    const URL = `${API_URL}/users/`
    axios.get(URL)
      .then(res => {
        const usersArray = res.data
        const myUserIndex = usersArray.indexOf(usersArray.filter(user => user.id === me.id)[0])
        usersArray.splice(myUserIndex, 1)
        setAllUsers(usersArray)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    const newArray = allUsers
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    shuffleArray(newArray)
    setRecomendedUsers(newArray)
  }, [allUsers])

  const searchPeople = (e) => {
    const data = e.target.value
    const usersArray = allUsers.filter(user => user.firstName.toLowerCase().includes(data.toLowerCase()) || user.lastName.includes(data.toLowerCase()))
    if (data.length > 0) {
      setSearchUserResults(usersArray)
    } else {
      setSearchUserResults([])
    }
  }

  return (
    <PageContainer>
      <section>
        <h2>Buscar personas:</h2>
        <form className='default_questionary'>
          <div>
            <input className='full_input' onChange={searchPeople} type="text" />
          </div>
        </form>
        {
          searchUserResults.length === 0 && <h4>Recomendados:</h4>
        }
        <div className='users-container'>
        {
          searchUserResults.map(result => (
            <UserCard
              key={result.id}
              id={result.id}
              email={result.email}
              firstName={result.firstName}
              lastName={result.lastName}
              phone={result.phone}
              profileImage={result.profileImage}
            />
          ))
        }
        {
          searchUserResults.length === 0 &&
          recomendedUsers.map(user => (
            <UserCard
              key={user.id}
              id={user.id}
              email={user.email}
              firstName={user.firstName}
              lastName={user.lastName}
              phone={user.phone}
              profileImage={user.profileImage}
            />
          ))
        }
        </div>
      </section>
    </PageContainer>
  )
}

export default Users