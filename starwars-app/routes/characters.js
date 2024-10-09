const express = require('express');
const axios = require('axios');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://starwars-n5ec-developuptcs-projects.vercel.app/');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los personajes' });
    }
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`https://starwars-n5ec-developuptcs-projects.vercel.app/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el personaje por ID' });
    }
});


router.get('/name/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const response = await axios.get(`https://starwars-n5ec-developuptcs-projects.vercel.app/name/${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar los personajes por nombre' });
    }
});

module.exports = router;
