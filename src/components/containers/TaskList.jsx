import React, { useState, useEffect } from "react";
import { tasks as initialTaks } from "../../data";
import TaskForm from "../pures/forms/TaskForm";
import TaskComponent from "../pures/TaskComponent";

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTaks);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Loading tasks");
    //setLoading(false);
  }, []);

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markAsCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  };

  const addTask = (newTask) => {
    const copyTasks = [...tasks];
    copyTasks.push(newTask);
    setTasks(copyTasks);
  };

  return (
    <>
      <TaskForm addTask={addTask} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Level</th>
            <th scope="col">Completed</th>
            <th scope="col">Created at</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskComponent
              task={task}
              key={task.id}
              removeTask={removeTask}
              markAsCompleted={markAsCompleted}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TaskList;
