import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './component/navbar.jsx'
import { Container } from './component/Container.jsx'
import { Section } from './component/section.jsx'
import { Help } from './component/Help.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Navbar/>
     <Container/>
     <Section/>
     <Help/>


  </StrictMode>,
)
