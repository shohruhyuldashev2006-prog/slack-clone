import  { useState } from 'react'
import { Button } from '@mui/material'
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import {ChatInputContainer} from './cssStyle'
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore'
function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState('')
  

  const [user] = useAuthState(auth)

  const sendMassage = async (e) => {
    e.preventDefault()

    if (!channelId) {
      return false
    }

   await addDoc(
    collection(doc(db, 'rooms', channelId), 'messages'),
    {
      message:input,
      timestamp:serverTimestamp(),
      user:user?.displayName || 'shox',
      userImage:user?.photoURL || ''

    }
   )

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


