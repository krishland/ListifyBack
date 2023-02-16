const tasksService = require('./tasks.service')

const findAll = async (_, res) => {
  const tasks = await tasksService.findAll()
  res.send(tasks)
}

const findOne = async (req, res) => {
  const id = req.params.id
  try {
    const task = await tasksService.findOne(id)
    res.send(task)
  } catch (error) {
    res.status(404).send(error.message)
  }
}

const createTask = async (req, res) => {
  const task = await tasksService.createTask(req.body)
  res.send(task)
}

const editTask = async (req, res) => {
  const id = req.params.id
  const task = await tasksService.editTask(id, req.body)
  res.send(task)
}
const updateTaskState = async (req, res) => {
  const id = req.params.id
  const { state } = req.body
  const task = await tasksService.updateTaskState(id, state)
  res.send(task)
}

const deleteTask = async (req, res) => {
  const id = req.params.id
  const task = await tasksService.deleteTask(id)
  res.send(task)
}

module.exports = {
  findAll,
  findOne,
  createTask,
  editTask,
  updateTaskState,
  deleteTask,
}
