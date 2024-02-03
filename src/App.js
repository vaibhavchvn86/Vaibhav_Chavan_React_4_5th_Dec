import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Homepage/Home';
import Details from './component/Detailspage/Details';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />}></Route>
                <Route path="/home" element={<Home />} />
                <Route path="/details/:id" element={<Details />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;