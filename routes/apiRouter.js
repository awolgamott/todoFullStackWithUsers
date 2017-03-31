let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let Task = require('../db/schema.js').Task

  
  apiRouter
    .get('/users', function(req, res){
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err) 
        res.json(results)
      })
    })

  apiRouter
    .get('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err) 
        res.json(record)
      })
    })
    .put('/users/:_id', function(req, res){

      User.findByIdAndUpdate(req.params._id, req.body, function(err, record){
          if (err) {
            res.status(500).send(err)
          }
          else if (!record) {
            res.status(400).send('no record found with that id')
          }
          else {
            res.json(Object.assign({},req.body,record))
          }
      })
    })

    .delete('/users/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })  
    })

    // Routes for a Model(resource) should have this structure


    // GET /tasks
    // POST /tasks
    // GET /tasks/:_id
    // PUT /tasks/:_id
    // DELETE /tasks/:_id

  apiRouter
    .get('/tasks', function(request, response){
      Task.find(request.query, function(error, result){
        if (error){
          return response.status(400).json(error)
        }
        response.json(result)
      })
    })
    .post('/tasks', function(request, response){
      var newTask = new Task(request.body)
      newTask.save(function(error, result){
        if (error) {
          return response.status(400).json(error)
        }
        response.json(result)
      })
    })
    .get('/tasks/:_id', function(request, response){
      Task.findById(request.params._id, function(error, result){
        if(error || !result){
          return response.status(404).json(error)
        }
        response.json(result)
      })
    })
    .put('/tasks/:_id', function(request, response){
      Task.findByIdAndUpdate(request.params._id, request.body, function(error, result){
        if (error){
          response.status(500).send(error)
        }
        else if (!result){
          response.status(400).send('no result found with that id')
        }
        else {
          response.json(result)
        }
      })
    })
    .delete('/tasks/:_id', function(request, response){
      Task.remove({_id: request.params._id}, function(error){
        if (error){
          return response.json(error)
        }
        response.json({
          msg: `record ${request.params._id} successfully deleted`,
          _id: request.params._id
        })
      })
    })

module.exports = apiRouter