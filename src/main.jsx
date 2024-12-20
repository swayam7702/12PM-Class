import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes } from 'react-router-dom'


let refElement = document.getElementById('root')

let rootElement = createRoot(refElement) 
rootElement.render(
  <BrowserRouter>

      <App/>

  </BrowserRouter>
  
)
