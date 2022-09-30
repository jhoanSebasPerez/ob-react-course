import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { loaderProjects } from "./data";

const Home = () => {
  const { projects } = useLoaderData();

  return (
    <div>
      <h1>All projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const loader = () => {
  const projects = loaderProjects();
  return { projects };
};

export default Home;
