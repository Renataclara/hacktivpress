var express = require('express');
var router = express.Router();
var articleController = require('../controllers/articleController');

require('dotenv').config()
var jwt = require('jsonwebtoken');

function middleware (req,res,next) {
  if (req.headers.hasOwnProperty('token')) {
    jwt.verify(req.headers.token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
      if (decoded.username != null) {
        req.headers.verifiedUser = decoded
        console.log('================');
        console.log('the verified info', req.headers.verifiedUser)
        next()
      } else {
        res.send('you need to sign up')
      }
    })
  } else {
    res.send('lu gaboleh post')
  }
}

router.get('/', articleController.findAll); //checked
router.post('/', middleware, articleController.create);//checked
router.get('/:id', articleController.findOne); //checked
router.get('/category/:cat', articleController.findByCategory); //checked
router.get('/author/:author', articleController.findByAuthor); //checked
router.put('/:id', articleController.update); //checked
router.delete('/:id', articleController.destroy); //checked

module.exports = router;
