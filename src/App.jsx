import React, { useEffect, useState } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import SideNavbar from "./components/SideNavbar/SideNavbar"
import { AppGlobal } from "./AppStyles"
import Modal from "./components/modal/Modal"
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute"
import User from "./pages/User/User"
import Chats from "./pages/Chats/Chats"
import NewChat from "./pages/NewChat/NewChat"
import { useDispatch, useSelector } from "react-redux"
import { getMyUserData } from "./store/slices/user.slice"
import { getChatsInfo } from "./store/slices/chatsInfo.slice"
import Users from "./pages/Users/Users"
import Chat from "./pages/Chat/Chat"

function App() {

  const dispatch = useDispatch()

  const [modalSelected, setModalSelected] = useState(false)
  const [modalVisibility, setModalVisibility] = useState(false)
  const [counter, setCounter] = useState(0)

  const myChats = useSelector(state => state.chatsInfoSlice)

  useEffect(() => {
    dispatch(getMyUserData())
    dispatch(getChatsInfo())
    setTimeout(function(){
      setCounter(counter + 1)
    }, 2000)
    console.log(counter)
  }, [counter])

  return (
    <AppGlobal>
      <HashRouter>
        <Modal modalSelected={modalSelected} setModalSelected={setModalSelected} modalVisibility={modalVisibility} setModalVisibility= {setModalVisibility} />
        <SideNavbar setModalVisibility={setModalVisibility} setModalSelected={setModalSelected} />
        <Routes>
          <Route path="/" element={<HomePage setModalSelected={setModalSelected} setModalVisibility={setModalVisibility} />} />
          <Route element={<ProtectedRoute setModalSelected={setModalSelected} setModalVisibility={setModalVisibility} />}>
            <Route path="/me" element={<User setModalSelected={setModalSelected} setModalVisibility={setModalVisibility} />} />
            <Route path="/chats" element={<Chats myChats={myChats} />} />
            <Route path="/new-chat" element={<NewChat />} />
            <Route path="/users" element={<Users />} />
            {
              myChats.map(chat => (
                <Route key={chat.id} path={`/chats/${chat.id}`} element={<Chat chat={chat} />} />
              ))
            }
          </Route>
        </Routes>
      </HashRouter>
    </AppGlobal>
  )
}

export default App