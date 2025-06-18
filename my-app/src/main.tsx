import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Search from './tsx/search.tsx'
import Home from './tsx/home.tsx'
import TicTacToe from './tsx/TicTacToe.tsx'
import Counter from './tsx/counter.tsx'
import CustomHeader from './tsx/header.tsx'
import './back.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/search" element={<Search/>}/>
                <Route path="*" element={<h1>404</h1>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/tic-tac-toe" element={<TicTacToe/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/header" element={<CustomHeader/>}/>
            </Routes>
        </Router>
    </StrictMode>,
)