import React, { useEffect, useState } from 'react';
import { fetchLibros } from '../services/api';

const Libros = () => {
    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getLibros = async () => {
            try {
                const data = await fetchLibros();
                setLibros(data.libros);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getLibros();
    }, []);

    if (loading) {
        return <div>Cargando libros...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Lista de Libros de la Biblia</h1>
            <ul>
                {libros.map((libro, index) => (
                    <li key={index}>
                        {libro.Libro} ({libro.Abrev}) - {libro.Total} versículos - {libro.Testamento}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Libros;