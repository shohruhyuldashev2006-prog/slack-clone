import { MessageContainer, MessageInfo } from './cssStyle'
function Message({ message, timestamp, user, userImage }) {
  console.log(message, timestamp)

  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toTimeString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  )
}

export default Message


