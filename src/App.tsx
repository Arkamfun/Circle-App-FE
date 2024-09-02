import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'
import Home from './assets/pages/home'
import Login from './assets/pages/login'
import Register from './assets/pages/registerPage'
function App() {


  return (
    <Box bg={'#1D1D1D'} minH={'100vh'} >
      <Container>
          <Router>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
            </Routes>
          </Router>
      </Container>
    </Box>

  )
}

export default App
