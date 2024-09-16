import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './component/navbar.jsx'
import { Container } from './component/Container.jsx'
import { Section } from './component/section.jsx'
import { Help } from './component/Help.jsx'
import { How } from './component/How.jsx'
import { Tesla } from './component/Tesla.jsx'
import { Caring } from './component/Caring.jsx'
import { FooterDiv } from './component/Footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Navbar/>
     <Container/>
     <Section/>
     <Help/>
     <How/>
     <Tesla/>
     <Caring/>
     <FooterDiv/>

  </StrictMode>,
)
