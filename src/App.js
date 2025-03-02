import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Versiculos from './components/Versiculos';
import Libros from './components/Libros';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <h1>API de la Biblia</h1>
                <Routes>
                    <Route path="/versiculos" element={<Versiculos />} />
                    <Route path="/libros" element={<Libros />} />
                    <Route path="/" element={
                        <div>
                            <h2>Bienvenido a la API de la Biblia</h2>
                            <p>Utiliza el menú para navegar a las diferentes secciones.</p>
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;