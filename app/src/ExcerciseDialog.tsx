import { Button } from "@mui/material";
import { useState } from "react";

export default function ExcerciseOptionsDialog() {
  const [gymOptionsElements, setGymOptionsElements] = useState<boolean>(false);
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
    setGymOptionsElements(true);
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

function Cardio() {
  type typesOfCardio =
    | "Cycling"
    | "Elliptical"
    | "Running"
    | "Walking"
    | "Stair Treadmill";

  const TypeOfCardio: typesOfCardio[] = [
    "Cycling",
    "Elliptical",
    "Running",
    "Stair Treadmill",
    "Walking",
  ];
  return (
    <div>
      {TypeOfCardio.map((cardio) => (
        <Button key={cardio}>{}</Button>
      ))}
    </div>
  );
}

function Gym() {
  {
    type typeOfGymExcercises =
      | "Calisthenics"
      | "Eliptical"
      | "Group Classes"
      | "Jumping Rope"
      | "Resistance Training"
      | "Stair Treadmill"
      | "Treadmill Walking";
    const GymExcercises: typeOfGymExcercises[] = [
      "Calisthenics",
      "Eliptical",
      "Group Classes",
      "Jumping Rope",
      "Resistance Training",
      "Stair Treadmill",
      "Treadmill Walking",
    ];
    return (
      <div>
        {GymExcercises.map((excerciseStyle) => (
          <Button>{excerciseStyle}</Button>
        ))}
      </div>
    );
  }
}

function Calculate() {
  return (
    <div>
      <div>Calisthenics</div>
      <div>
        <label>
          <span>Effort Level</span> <input type="select"></input> s
          <span>Min</span>
        </label>
        <label>
          <span>Duration</span>
          <input type="text" />
        </label>
        <label>
          <span>Energy</span>
        </label>
      </div>
    </div>
  );
}
