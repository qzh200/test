import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Search from './search.tsx'
import Home from './home.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<h1>404 N</h1>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>,
)