const Router = require('express').Router;
const rateController = require('../controllers/rate-controller');
const router = Router();
const {body, query} = require('express-validator');

router.get(
    '/rates',
    query('currency').isLength({min: 2, max: 32}),
    rateController.rates
);

module.exports = router;
