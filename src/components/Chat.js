import  { useEffect, useRef } from 'react'
import {ChatContainer, Header, HeaderLeft, Headerright, ChatMassages, ChatBottom } from './cssStyle'
import ChatInput from './ChatInput'
import Message from './Message'
import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { useSelector } from 'react-redux'
import { selectRoomId } from '../features/appSlice'
import { db } from '../firebase'
import { collection, doc, orderBy } from 'firebase/firestore'


function Chat() {
  const chatRef = useRef(null)
  const roomId = useSelector(selectRoomId)
  const [roomDetails] = useDocument(
    roomId && doc(db, 'rooms', roomId)
  )
  const [roomMessages, loading] = useCollection(
    roomId &&
      collection(doc(db, 'rooms', roomId), 'messages'),
      orderBy('timestamp', 'asc')
  )

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [roomId, loading])

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlined />
            </HeaderLeft>

            <Headerright 
>
              <p>
                <InfoOutlined /> Details
              </p>
            </Headerright>
          </Header>

          <ChatMassages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data()

              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              )
            })}
            <ChatBottom ref={chatRef} />
          </ChatMassages>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  )
}

export default Chat


