const { Router } = require("express");
const characterRoutes = require('./character.route/index')
const episodesRoutes = require('./episodes.router/index')
const router = Router();

// Configurar los routers

router.use('/characters', characterRoutes)
router.use('/episodes', episodesRoutes);
router.use('/character', characterRoutes)

module.exports = router;
