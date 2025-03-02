import axios from 'axios';

const API_BASE_URL = 'https://bibliapi.dev.jprcdev.com/api';

export const fetchVersiculos = async (referencia) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/versiculos`, {
            params: { referencia }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data.error : 'Error al obtener versículos');
    }
};

export const fetchLibros = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/libros`);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data.error : 'Error al obtener libros');
    }
};