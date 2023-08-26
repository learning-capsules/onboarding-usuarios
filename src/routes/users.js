const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', async (req, res) => {
    try {
        await usersController.getAllUsers(req, res);
    } catch (error) {
        console.log("Error en la ruta /users:", error);
        res.status(500).json({ message: 'Error en la ruta /users' });
    }
});

module.exports = router;