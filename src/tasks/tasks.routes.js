const express = require('express')
const { validateTasksBody } = require('./middlewares/validate-body.middleware')
const tasksController = require('./tasks.controller')
const tasksRouter = express.Router()

tasksRouter.get('/', tasksController.findAll)
tasksRouter.get('/:id', tasksController.findOne)
tasksRouter.post('/', validateTasksBody, tasksController.createTask)
tasksRouter.put('/:id', validateTasksBody, tasksController.editTask)
tasksRouter.patch('/:id', tasksController.updateTaskState)
tasksRouter.delete('/:id', tasksController.deleteTask)

module.exports.tasksRouter = tasksRouter
