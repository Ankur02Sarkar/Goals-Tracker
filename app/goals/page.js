"use client";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import { useEffect, useState } from "react";

const Page = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const loadedGoals = JSON.parse(localStorage.getItem("allGoals") || "[]");
    setProjects(loadedGoals);
  }, []);

  return (
    <div>
      <CardHoverEffectDemo projects={projects} />
    </div>
  );
};

export default Page;
