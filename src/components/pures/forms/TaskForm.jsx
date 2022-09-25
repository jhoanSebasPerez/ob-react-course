import React, { useRef } from "react";
import Task from "../../../models/Task.class";
import LEVELS from "../../../models/Level.enum";
import PropTypes from "prop-types";

const TaskForm = ({ addTask }) => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current);
    const newTask = new Task(
      formRef.current.name.value,
      formRef.current.description.value,
      formRef.current.level.value
    );
    addTask(newTask);
    cleanInputs();
  };

  const cleanInputs = () => {
    formRef.current.name.value = "";
    formRef.current.description.value = "";
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="description" placeholder="Description" />
      <label htmlFor="levels">Choose a level:</label>
      <select name="level" id="levels">
        {Object.keys(LEVELS).map((key, index) => (
          <option key={index} value={LEVELS[key]}>
            {LEVELS[key]}
          </option>
        ))}
      </select>
      <input type="submit" value="Add task" className="btn btn-success" />
    </form>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
