import { Button } from '@mui/material'
import { auth, provider } from '../firebase'
import { LoginContainer, LoginInnerContainer } from './cssStyle'

function Login() {
const signIn = (e)=>{
    e.preventDefault()
    auth.signInWithPopup(provider).catch((error)=>
    alert(error.message)
    )
}

  return (
    <LoginContainer>
        <LoginInnerContainer>
             <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1647545127005/74GQszMw8.png"
          alt=""
        />
        <h1>Sign in to the PAPA Fam</h1>
        <p>papa.slack.com</p>
        <Button onClick={signIn}>
            Sign in with Google
        </Button>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

