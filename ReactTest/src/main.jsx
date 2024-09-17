import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './component/navbar.jsx'

import { FooterDiv } from './component/Footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Navbar/>
     <App/>
     <FooterDiv/>

  </StrictMode>,
)
