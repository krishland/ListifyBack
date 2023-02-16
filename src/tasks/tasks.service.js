const tasksRepository = require('./tasks.repository')

const findAll = async () => {
  const tasks = await tasksRepository.findAll()
  return tasks
}

const findOne = async (id) => {
  const task = await tasksRepository.findOne(id)
  if (!task) {
    throw new Error('Pas de tâche correspondante')
  }
  return task
}

const createTask = async (createTaskBody) => {
  const task = await tasksRepository.createTask(createTaskBody)
  return task
}

const editTask = async (id, updateTaskBody) => {
  await findOne(id)
  const task = await tasksRepository.editTask(id, updateTaskBody)
  return task
}
const updateTaskState = async (id, state) => {
  await findOne(id)
  const task = await tasksRepository.updateTaskState(id, state)
  return task
}

const deleteTask = async (id) => {
  await findOne(id)
  const task = await tasksRepository.deleteTask(id)
  return task
}

module.exports = {
  findAll,
  findOne,
  createTask,
  editTask,
  updateTaskState,
  deleteTask,
}
