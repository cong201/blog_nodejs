const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/SiteController');

router.get('/', siteController.index);
router.get('/search', siteController.show);

module.exports = router;
