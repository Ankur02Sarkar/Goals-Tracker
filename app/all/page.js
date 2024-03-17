"use client";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import React, { useEffect, useState } from "react";

const page = () => {
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

export default page;
