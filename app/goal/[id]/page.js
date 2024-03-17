"use client";

import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const updateGoalInLocalStorage = (updatedGoal) => {
  const allGoals = JSON.parse(localStorage.getItem("allGoals"));
  const goalIndex = allGoals.findIndex((goal) => goal.id === updatedGoal.id);
  allGoals[goalIndex] = updatedGoal;
  localStorage.setItem("allGoals", JSON.stringify(allGoals));
};

const Page = ({ params }) => {
  const [goalId, setGoalId] = useState();
  const [goal, setGoal] = useState(null);
  const [addAmount, setAddAmount] = useState(0);

  useEffect(() => {
    setGoalId(params.id);
    const allGoals = JSON.parse(localStorage.getItem("allGoals"));
    const foundGoal = allGoals.find((goal) => goal.id === parseInt(params.id));
    setGoal(foundGoal);
  }, [params]);

  const handleAddAmount = () => {
    const updatedGoal = { ...goal, price: goal.price - addAmount };
    updateGoalInLocalStorage(updatedGoal);
    setGoal(updatedGoal);
    setAddAmount(0);
  };

  if (!goal) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex sm:flex-row flex-col justify-center items-center text-center m-auto gap-8">
      <div className="flex flex-col gap-4 outline outline-1 outline-gray-500 p-4 rounded-md">
        <label
          className="text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="price"
        >
          Price
        </label>
        <div className="p-[2px] rounded-lg transition duration-300 group/input flex flex-col gap-4">
          <input
            className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
            id="price"
            type="number"
            value={addAmount}
            onChange={(e) => setAddAmount(e.target.value)}
            placeholder="Add Amount Saved"
          />
          <Button onClick={handleAddAmount}>Add</Button>
        </div>
      </div>
      <ThreeDCardDemo goal={goal} />
    </div>
  );
};

export default Page;
