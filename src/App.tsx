import { Box, Container } from '@chakra-ui/react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Followers from './assets/pages/followers'
import ForgotPassword from './assets/pages/forgotPassword'
import HomePage from './assets/pages/home'
import Login from './assets/pages/login'
import Profile from './assets/pages/profilePage'
import Register from './assets/pages/registerPage'
import ResetPassword from './assets/pages/reset Password'
import Search from './assets/pages/searchPage'
import Status from './assets/pages/status'
import { useAppDispatch } from './hooks/use-store'
import { apiV1 } from './libs/api'
import Cookies from 'js-cookie'
import { setUser } from './store/auth-slice'
import { useEffect } from 'react'
function App() {
const dispatch = useAppDispatch()
async function checkAuth() {
  try {
    const response = await apiV1.get('/auth/check', {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });
    if (response.data) {
      dispatch(setUser(response.data));
    }
  } catch (error) {
    console.log(error);
  }

}

useEffect(() => {
  checkAuth();
}, []);

  return (
    <Box bg={'#1D1D1D'} minH={'100vh'} >
      <Container>
          <Router>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
              <Route path='/resetpassword' element={<ResetPassword />}></Route>
              <Route path= '/status/:threadId'element={<Status />}> </Route>
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
