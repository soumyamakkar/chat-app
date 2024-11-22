import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ChatContextProvider } from './components/UserList.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ChatContextProvider>
  <AuthContextProvider>
      <App />
  </AuthContextProvider>
  </ChatContextProvider>
  </BrowserRouter>

)
