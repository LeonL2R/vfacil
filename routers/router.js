const { Router } = require('express');
var ControllerRuta=require('../controllers/ControllerRuta');

const router = Router();
router.get('/prueba',ControllerRuta.prueba);
router.post('/crear',ControllerRuta.saveRuta);
router.get('/buscar/:id',ControllerRuta.buscarData);
router.get('/buscarall/:id?',ControllerRuta.listarAllData)
router.delete('/ruta/:id',ControllerRuta.deleteRuta);

router.put('/ruta/:id',ControllerRuta.updateRuta);

module.exports = router;

