import React from 'react'
import Home from './Home'
import Otp from './Otp'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/otp" element={<Otp />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
