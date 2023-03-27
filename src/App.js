import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Friends from './pages/friends/Friends';

import './Login.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate 
} from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='login' element={<Login />} />
                    <Route path='home' element={<Home />} />
                    <Route path='/*' element={<Navigate to='/login' />} />
                    <Route path='friends' element={<Friends />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;