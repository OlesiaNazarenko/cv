import { useState, useEffect } from "react";
import projectsData from "../../db/projects.json";
import ProjectCard from "./ProjectCard";
export default function JavaScript() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const res = projectsData.jsProjects;
    setData(res);
  }, []);

  return <ProjectCard data={data} />;
}
