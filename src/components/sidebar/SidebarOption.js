import { SidebarOptionsContainer, SidebarOptionChannel } from '../cssStyle'
import { useDispatch } from 'react-redux'
import { enterRoom } from '../../features/appSlice'
import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'  // 🔥 qo‘shildi

function SidebarOptions({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch()

  const addChannel = async () => {
    const channelName = prompt('Please enter the channel name')

    if (channelName) {
      await addDoc(collection(db, 'rooms'), {
        name: channelName
      })
    }
  }

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id
        })
      )
    }
  }

  return (
    <SidebarOptionsContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionsContainer>
  )
}

export default SidebarOptions
