import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPasswrod from './pages/ForgotPassword'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore/>}/>
          <Route path='/Offers' element={<Offers/>}/>
          <Route path='/Profile' element={<SignIn/>}/>
          <Route path='/Sign-In' element={<SignIn/>}/>
          <Route path='/Sign-Up' element={<SignUp/>}/>
          <Route path='/Forgot-Passwrod' element={<ForgotPasswrod/>}/>
        </Routes>
        <Navbar />
      </Router>

    </>
  );
}

export default App;
