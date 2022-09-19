import React from 'react'
import LEVELS from '../../models/Level.enum'
import Task from '../../models/Task.class'
import TaskComponent from '../pures/TaskComponent'

const TaskList = () => {

    const taskList = [
        new Task("read swift book", "read two chapters", LEVELS.URGENT),
        new Task("search two exercises", "two algebraic exercises", LEVELS.NORMAL),
        new Task("solve linear algebra exercise", "solve linear algebra", LEVELS.BLOCKING)
    ]

  return (
    <div>
        <h1>TODO LIST</h1> 
        {taskList.map(task => (<TaskComponent task={task} key={task.id}/>))}
    </div>
  )
}

export default TaskList