import { Button } from "@mui/material";
import { useState } from "react";

export default function ExcerciseOptionsDialog() {
  const [excerciseOptionsDisplay, setExcerciseOptionsDisplay] =
    useState<boolean>(true);
  type excerciseOptionstype =
    | "Cardio"
    | "Gym"
    | "Individual Sport"
    | "Occupational"
    | "Outdoor Activity";
  const excerciseOptions: excerciseOptionstype[] = [
    "Gym",
    "Cardio",
    "Individual Sport",
    "Occupational",
    "Outdoor Activity",
  ];
  const onClick = () => {
    setExcerciseOptionsDisplay(false);
  };
  return (
    <dialog>
      {excerciseOptions.map((excerciseType) => (
        <Button onClick={onClick} variant="outlined" key={excerciseType}>
          {excerciseType}
        </Button>
      ))}
    </dialog>
  );
}

function GymOptions() {}
