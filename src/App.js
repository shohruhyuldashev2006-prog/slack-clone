// import component
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
//import css
import './App.css'
//import B.R.D
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
//import S.C
import Chat from './components/Chat'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import Login from './components/Login'
import Spinner from 'react-spinkit'
import { AppBody, Apploading, AploadingContents } from './components/cssStyle' 

function App() {
  const [user, loading] = useAuthState(auth)

 


  if(loading){
    return(
      <Apploading>
        <AploadingContents>
           <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1647545127005/74GQszMw8.png"
          alt=""
        />
        <Spinner name='ball-spin-fade-loader'color='purple' fadeIn='none'/>
        </AploadingContents>
      </Apploading>
    )
  }
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/">
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  )
}

export default App
