const projects = [
  {
    id: 1,
    name: "Build landing page",
    enterprise: "Coca-cola company",
    year: 2018,
  },
  {
    id: 2,
    name: "Build App",
    enterprise: "At&t company",
    year: 2019,
  },
  {
    id: 3,
    name: "Marketing campain",
    enterprise: "Alkosto company",
    year: 2022,
  },
];

const loaderProjects = () => projects;

const loaderSinglePropject = (id) => {
  const idProject = parseInt(id);
  return projects[idProject - 1];
};

export { loaderProjects, loaderSinglePropject };
