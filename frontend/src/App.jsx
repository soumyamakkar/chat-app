import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import NavigationBar from './components/NavigationBar';
import {Route,Routes,Navigate} from "react-router-dom"
import Chat from './pages/Chat';


function App() {

  return (
    <>
    <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Chat/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
