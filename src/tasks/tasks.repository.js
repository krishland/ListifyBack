const { Pool } = require('../pool')

const findAll = async () => {
  const { rows } = await Pool.query('SELECT * FROM tasks')
  return rows
}

const findOne = async (id) => {
  const { rows } = await Pool.query('SELECT * FROM tasks WHERE id = $1', [id])
  return rows[0]
}

const createTask = async (taskData) => {
  const { title, content, state } = taskData
  const { rows } = await Pool.query(
    'INSERT INTO tasks (title, content, state) VALUES($1, $2, $3) RETURNING *',
    [title, content, state],
  )
  return rows[0]
}

const editTask = async (id, updateTaskData) => {
  const { title, content, state } = updateTaskData
  const { rows } = await Pool.query(
    'UPDATE tasks SET title=$1, content=$2, state=$3 WHERE id = $4 RETURNING *',
    [title, content, state, id],
  )
  return rows[0]
}
const updateTaskState = async (id, state) => {
  const { rows } = await Pool.query(
    'UPDATE tasks SET state=$1 WHERE id=$2 RETURNING *',
    [state, id],
  )
  return rows[0]
}

const deleteTask = async (id) => {
  const { rows } = await Pool.query(
    'DELETE FROM tasks WHERE id = $1 RETURNING *',
    [id],
  )
  return rows[0]
}

module.exports = {
  findAll,
  findOne,
  createTask,
  editTask,
  updateTaskState,
  deleteTask,
}
