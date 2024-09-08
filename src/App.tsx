import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'
import Home from './assets/pages/home'
import Login from './assets/pages/login'
import Register from './assets/pages/registerPage'
import Status from './assets/pages/status'
import Search from './assets/pages/searchPage'
import Profile from './assets/pages/profilePage'
import Followers from './assets/pages/followers'
import ForgotPassword from './assets/pages/forgotPassword'
import ResetPassword from './assets/pages/reset Password'
function App() {


  return (
    <Box bg={'#1D1D1D'} minH={'100vh'} >
      <Container>
          <Router>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
              <Route path='/resetpassword' element={<ResetPassword />}></Route>
              
              <Route path= '/status'element={<Status />}> </Route>
              <Route path= '/search'element={<Search />}> </Route>
              <Route path= '/profile'element={<Profile />}> </Route>
              <Route path= '/followers'element={<Followers />}> </Route>
            </Routes>
          </Router>
      </Container>
    </Box>

  )
}

export default App
