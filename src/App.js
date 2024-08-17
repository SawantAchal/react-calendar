import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import AppContent from './components/AppContent';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AppContent />} />
            </Routes>
        </>
    );
}

export default App;
