import styled from 'styled-components'
import { Avatar } from '@mui/material'

{/* App.js */ }


export const AppBody = styled.div`
  display: flex;
  height: 100vh;
`

export const Apploading = styled.div`
display:grid;
place-items:center;
width:100%;
`
export const AploadingContents = styled.div`
text-align:center;
padding-bottom:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

>img{
  height:100px;
  padding:20px;
  margin-bottom:40px;
}
`

{/* header.js */ }


export const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`
export const Headerleft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`





export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover{
    opacity:0.8
  }
`

/*{ sideBar style }*/

export const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`

export const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`

export const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 1px;
    color: green;
  }
`

/* {sidebarOption} */
export const SidebarOptionsContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`

export const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`


/* chat.js */
export const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;

  background-color:--body-background;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 23px;
  border-bottom: 1px solid lightgray;
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
  }

  > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`

export const Headerright = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`

export const ChatMassages = styled.div``

export const ChatBottom = styled.div`
  padding-bottom: 200px;
`

/* chatInput.js */

export const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`

/* message.jd */

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`
export const MessageInfo = styled.div`
  padding: 10px;
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`


/* login.js */


export const LoginContainer = styled.div`
 background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;

`
export const LoginInnerContainer = styled.div`
padding: 100px;
  text-align: center;
  border-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;

  }

  > button {
    margin-top:50px;
    text-transform:inherit !important;
    background-color:#0a8d48 !important;
    color:white
  }
` 
