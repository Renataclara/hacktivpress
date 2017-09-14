var express = require('express');
var router = express.Router();
var articleController = require('../controllers/articleController');

// router.get('/', middleware, articleController.findAll); //checked
// router.post('/', articleController.create);//checked
router.get('/', articleController.findAll); //checked
// router.post('/', middleware, articleController.create);//checked
router.post('/', articleController.create);//checked
router.get('/:id', articleController.findOne); //checked
router.get('/category/:cat', articleController.findByCategory); //checked
router.get('/author/:author', articleController.findByAuthor); //checked
router.put('/:id', articleController.update); //checked
router.delete('/:id', articleController.destroy); //checked

module.exports = router;
