import React from "react";
import { loaderSinglePropject } from "./data";
import { useLoaderData, useNavigate } from "react-router-dom";

export const loader = ({ params }) => {
  const project = loaderSinglePropject(params.id);
  return project;
};

const ProjectDetail = () => {
  const project = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Go home
      </button>
      <h1>{project.name}</h1>
      <h3>{project.enterprise}</h3>
      <p>Year: {project.year}</p>
    </div>
  );
};

export default ProjectDetail;
