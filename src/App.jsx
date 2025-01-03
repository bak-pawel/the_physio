import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import Main from './components/Main/Main.jsx'
import Menu from './components/Menu/Menu'
import Osteo from './components/Osteo/Osteo.jsx';

function App() {
    return (
        <>        
            <Routes>
                <Route path="/" element={<Menu><Main /></Menu>} />
                <Route path="/osteo" element={<Menu><Osteo /></Menu>} />
                <Route path="/gym" element={<Main />} />
            </Routes>
        </>

    )
}
export default App;
