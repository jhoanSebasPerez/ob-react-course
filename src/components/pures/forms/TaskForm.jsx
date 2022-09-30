import React from "react";
import Task from "../../../models/Task.class";
import { LEVELS, levelsValues } from "../../../models/Level.enum";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const taskSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name too short")
    .max(15, "Name too long")
    .required(),
  description: Yup.string().min(8, "Description too short").required(),
  level: Yup.string().oneOf(levelsValues, "Level not available"),
});

const TaskForm = ({ addTask, nTasks }) => {
  const taskValues = {
    name: "",
    description: "",
    level: LEVELS.NORMAL,
  };

  const handleSubmit = async (values, formikBag) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { name, description, level } = values;
    const newTask = new Task(name, description, level);
    addTask(newTask);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={taskValues}
      onSubmit={handleSubmit}
      validationSchema={taskSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="name">Name:</label>
          <Field id="name" name="name" type="text" />
          {errors.name && touched.name && <ErrorMessage name="name" />}

          <label htmlFor="description">Description:</label>
          <Field id="description" name="description" type="text" />
          {errors.description && touched.description && (
            <ErrorMessage name="description" />
          )}

          <label htmlFor="levels">Level</label>
          <Field id="levels" name="level" component="select" multiple={false}>
            {levelsValues.map((level, index) => (
              <option key={index} value={level}>
                {level}
              </option>
            ))}
          </Field>

          <button type="submit" className="btn btn-success">
            {nTasks > 0 ? "Add new task" : "Create your first task"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
