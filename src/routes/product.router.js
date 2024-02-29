const { getAll, create, getOne, remove, update, setImages } = require('../controllers/product.controllers');
const express = require('express');
const verifyJWT = require('../utils/verify.JWT');

const routerProduct = express.Router();

routerProduct.route('/')
    .get(getAll)
    .post(verifyJWT, create);

routerProduct.route('/:id/images')
    .post(verifyJWT, setImages)

routerProduct.route('/:id')
    .get(getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = routerProduct;