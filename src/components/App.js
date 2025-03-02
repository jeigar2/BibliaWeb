import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Versiculos from './Versiculos';
import Libros from './Libros';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <h1>API de la Biblia</h1>
                <Switch>
                    <Route path="/versiculos" component={Versiculos} />
                    <Route path="/libros" component={Libros} />
                    <Route path="/" exact>
                        <h2>Bienvenido a la API de la Biblia</h2>
                        <p>Utiliza el menú para navegar entre versículos y libros.</p>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;