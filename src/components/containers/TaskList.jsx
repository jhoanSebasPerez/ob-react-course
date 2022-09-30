import React, { useState, useEffect } from "react";
import { tasks as initialTaks } from "../../data";
import TaskForm from "../pures/forms/TaskForm";
import TaskComponent from "../pures/TaskComponent";

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTaks);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
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

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <TaskForm addTask={addTask} nTasks={tasks.length} />
      {tasks.length === 0 ? (
        <h3>There are no tasks</h3>
      ) : (
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
      )}
    </>
  );
};

export default TaskList;
