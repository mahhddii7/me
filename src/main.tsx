import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/index.css'
import  ContextApp  from './context/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextApp>
      <App />
      <canvas id="canvas" className='fixed top-0 left-0 w-full h-full'></canvas>
    </ContextApp>
  </StrictMode>,
)
