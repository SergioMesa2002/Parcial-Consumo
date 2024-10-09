const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});


app.get('/api/characters', async (req, res) => {
    try {
        const response = await axios.get('https://starwars-n5ec-developuptcs-projects.vercel.app/');
        res.json(response.data); // Devuelve todos los personajes
    } catch (error) {
        console.error('Error al obtener todos los personajes:', error.message);
        res.status(500).json({ message: 'Error al obtener todos los personajes' });
    }
});


app.get('/api/characters/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`https://starwars-n5ec-developuptcs-projects.vercel.app/${id}`);
        res.json(response.data); // Devuelve el personaje por ObjectId
    } catch (error) {
        console.error('Error al obtener el personaje por ID:', error.message);
        res.status(500).json({ message: 'Error al obtener el personaje por ID' });
    }
});


app.get('/api/characters/name/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const response = await axios.get(`https://starwars-n5ec-developuptcs-projects.vercel.app/name/${name}`);
        // Asegúrate de que la respuesta sea un array
        if (Array.isArray(response.data)) {
            res.json(response.data); // Devuelve uno o varios personajes por nombre
        } else {
            res.status(404).json({ message: 'No se encontraron personajes.' });
        }
    } catch (error) {
        console.error('Error al buscar los personajes por nombre:', error.message);
        res.status(500).json({ message: 'Error al buscar los personajes por nombre' });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
