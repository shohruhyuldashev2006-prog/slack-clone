import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { auth, db, firebaseTime } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import {ChatInputContainer} from './cssStyle'
function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState('')
  

  const [user] = useAuthState(auth)

  const sendMassage = (e) => {
    e.preventDefault()

    if (!channelId) {
      return false
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebaseTime,
      user: 'shox',
      userImage:user.photoURL
       
    })

    chatRef.current.scrollIntoView({
      behavior: 'smooth'
    })

    setInput('')
  }

  

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`massage #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMassage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput


