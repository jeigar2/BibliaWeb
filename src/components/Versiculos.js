import React, { useState } from 'react';
import { fetchVersiculos } from '../services/api';

const Versiculos = () => {
    const [referencia, setReferencia] = useState('');
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setResultado(null);

        try {
            const data = await fetchVersiculos(referencia);
            setResultado(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Consultar Versículos</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={referencia}
                    onChange={(e) => setReferencia(e.target.value)}
                    placeholder="Ejemplo: Gn 1, 1"
                    required
                />
                <button type="submit">Buscar</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {resultado && (
                <div>
                    <h3>Resultados:</h3>
                    <p><strong>Referencia:</strong> {resultado.referencia.libro.nombre} {resultado.referencia.capitulo}, {resultado.referencia.versiculos}</p>
                    <ul>
                        {resultado.versiculos.map((versiculo, index) => (
                            <li key={index}>{versiculo}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Versiculos;