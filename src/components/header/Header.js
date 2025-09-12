import {
  HeaderContainer,
  Headerleft,
  HeaderRight,
  HeaderAvatar,
  HeaderSearch,
 
} from '../cssStyle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'

function Header({switchTheme}) {
  const [user]= useAuthState(auth)
  console.log('user is', user);
  
  return (
    <HeaderContainer>
      {/* Header left */}
      <Headerleft>
        <HeaderAvatar 
        onClick={()=> auth.signOut()}
        alt={user?.displayName}
        src={user?.photoURL}
        />
        <AccessTimeIcon />
      </Headerleft>

      {/* Header Search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="SeArCh PaPaFaM..." />
      </HeaderSearch>

      {/* Header Right */}
      <HeaderRight>
        
          
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
