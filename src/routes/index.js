const express = require('express');
const router = express.Router();

// Ruta de inicio
router.get('/', (req, res) => {
    // Utiliza app.get('pkg') para acceder a la información del package.json
    const appPackage = req.app.get('pkg');
    res.json({
        name: appPackage.name,
        author: appPackage.author,
        description: appPackage.description,
        version: appPackage.version,
    });
});

module.exports = router;