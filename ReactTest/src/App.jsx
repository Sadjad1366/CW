import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container } from './component/Container.jsx'
import { Section } from './component/section.jsx'
import { Help } from './component/Help.jsx'
import { How } from './component/How.jsx'
import { Tesla } from './component/Tesla.jsx'
import { Caring } from './component/Caring.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
<div className='container'>
<Container/>
     <Section/>
     <Help/>
     <How/>
     <Tesla/>
     <Caring/>
</div>
  )
}

export default App
