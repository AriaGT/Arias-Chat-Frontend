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
import { useDispatch } from "react-redux"
import { getMyUserData } from "./store/slices/user.slice"
import Users from "./pages/Users/Users"

function App() {

  const [modalSelected, setModalSelected] = useState(false)
  const [modalVisibility, setModalVisibility] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyUserData())
  }, [])
  

  return (
    <AppGlobal>
      <HashRouter>
        <Modal modalSelected={modalSelected} setModalSelected={setModalSelected} modalVisibility={modalVisibility} setModalVisibility= {setModalVisibility} />
        <SideNavbar setModalVisibility={setModalVisibility} setModalSelected={setModalSelected} />
        <Routes>
          <Route path="/" element={<HomePage setModalSelected={setModalSelected} setModalVisibility={setModalVisibility} />} />
          <Route element={<ProtectedRoute setModalSelected={setModalSelected} setModalVisibility={setModalVisibility} />}>
            <Route path="/me" element={<User setModalSelected={setModalSelected} setModalVisibility={setModalVisibility} />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/new-chat" element={<NewChat />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </HashRouter>
    </AppGlobal>
  )
}

export default App