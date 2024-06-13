const express = require('express');
const contractsController = require("../controllers/contracts.controllers");
const router = express.Router();

router.get('/', contractsController.getContracts);

module.exports = router;