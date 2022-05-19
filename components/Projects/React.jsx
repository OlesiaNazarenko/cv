import { useState, useEffect } from "react";
import projectsData from "../../db/projects.json";
import ProjectCard from "./ProjectCard";
export default function ReactJS() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const res = projectsData.reactProjects;
    setData(res);
  }, [projectsData]);
  return <ProjectCard data={data} />;
}
