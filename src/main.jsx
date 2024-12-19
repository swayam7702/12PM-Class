import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


let refElement = document.getElementById('root')

let rootElement = createRoot(refElement) 
rootElement.render(
  <>
      <App/>
  </>
  
)
