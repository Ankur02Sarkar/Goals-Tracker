"use client";

import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [goalId, setGoalId] = useState();
  const [goal, setGoal] = useState(null);

  useEffect(() => {
    setGoalId(params.id);

    // Retrieve allGoals from local storage
    const allGoals = JSON.parse(localStorage.getItem("allGoals"));

    // Find the goal with matching id
    const foundGoal = allGoals.find((goal) => goal.id === parseInt(params.id));

    setGoal(foundGoal);
  }, [params]);

  if (!goal) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ThreeDCardDemo goal={goal} />
    </div>
  );
};

export default Page;
