'use strict'

const Article = require('../models/Article')
const ObjectId = require('mongodb').ObjectId;
var jwt = require('jsonwebtoken');
const generate = require('../helpers/generateSecret');
const hash = require('../helpers/hash');
const crypto = require('crypto');


module.exports = {
  findAll: function (req,res) {
    Article.find({
    })
    .then(function (data) {
      res.send(data);
    })
  },
  findByCategory: function (req,res) {
    Article.find({
      category: req.params.cat
    })
    .then(function (data) {
      res.send(data);
    })
  },
  findByCategory: function (req,res) {
    Article.find({
      author: req.params.author
    })
    .then(function (data) {
      res.send(data);
    })
  },
  create: function (req,res) {
    Article.create({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.headers.id
      // author: req.headers.verifiedUser.id
    })
    .then(function(result) {
      console.log('resulf from axios', result)
      res.send(result);
    })
  },
  findOne: function (req,res) {
    Article.find({
      _id: req.params.id
    })
    .then(function (data) {
      res.send(data);
    })
  },
  destroy: function (req,res) {
    Article.deleteOne({_id:req.params.id})
    .then(function () {
      res.send('user is destroyed');
    })
  },
  update: function (req,res) {
    Article.where({
      _id: req.params.id
    })
    .update({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category
    })
    .then(function (data) {
      res.send(data);
    })
  }
}
