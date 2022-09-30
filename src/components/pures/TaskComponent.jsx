import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Task from "../../models/Task.class";
import { LEVELS } from "../../models/Level.enum";
import "../../styles/task-component.css";

const TaskComponent = ({ task, removeTask, markAsCompleted }) => {
  useEffect(() => {
    console.log("Creating a new tasks...");
    return () => {
      console.log(`Remove ${task.name} from list`);
    };
  }, [task.name]);

  const stylesBadge = {
    [LEVELS.URGENT]: "warning",
    [LEVELS.NORMAL]: "primary",
    [LEVELS.BLOCKING]: "danger",
  };

  const stylesToggle = () =>
    task.completed ? ["on", "green"] : ["off", "gray"];

  return (
    <tr
      style={{ backgroundColor: task.completed ? "lightgreen" : "lightgray" }}
    >
      <th scope="row">{task.name}</th>
      <td>{task.description}</td>
      <td>
        <span className={`badge bg-${stylesBadge[task.level]}`}>
          {task.level}
        </span>
      </td>
      <td>
        <i
          className={`bi-toggle-${stylesToggle()[0]} icon`}
          style={{ color: stylesToggle()[1] }}
          onClick={() => markAsCompleted(task.id)}
        ></i>
      </td>
      <td>{task.createdAt.toDateString()}</td>
      <td>
        <i
          onClick={() => removeTask(task.id)}
          className="bi bi-trash-fill icon remove-icon"
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
