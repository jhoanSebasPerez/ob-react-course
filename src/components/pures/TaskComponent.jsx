import React from 'react'
import PropTypes from 'prop-types'
import Task from '../../models/Task.class'

const TaskComponent = ({task}) => {
  return (
    <div>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <p>Level: {task.level}</p>
      <p>{task.completed ? "COMPLETED" : "PENDING"}</p>
      <p>Created at: {task.createdAt.toString()}</p>
    </div>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
}

export default TaskComponent