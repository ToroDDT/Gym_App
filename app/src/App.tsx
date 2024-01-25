import { useState } from "react";
import SideBar from "./sideBar";
import Button from "@mui/material/Button";
import "./Stylesheets.css/NavBar.css";
import "./Stylesheets.css/Dashboard.css";
import { Dialog, dialogContentClasses } from "@mui/material";

function App() {
  const [DialogForExcerciseOptions, setDialogForExcerciseOptions] =
    useState<boolean>(false);
  return (
    <div>
      <ExcerciseOptionsDialog
        DialogForExcerciseOptions={DialogForExcerciseOptions}
      />
      <NavNar />
      <DashBoard />
    </div>
  );
}

function ExcerciseOptionsDialog() {
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
  return (
    <dialog>
      {excerciseOptions.map((excerciseType) => (
        <Button variant="outlined" key={excerciseType}>
          {excerciseType}
        </Button>
      ))}
    </dialog>
  );
}

function DashBoard(): JSX.Element {
  return (
    <div className="Dashboard">
      <SideBar />

      <div>
        <div className="title">Dash Board</div>
        <div className="Diary">
          <div>Quick Add to Diary </div>
          <HealthTrackers />
        </div>
      </div>
    </div>
  );
}

function HealthTrackers(): JSX.Element {
  type healthTrackers = "FOOD" | "EXCERCISE" | "BIOMETRICS" | "WATER" | "NOTE";
  const Trackers: healthTrackers[] = [
    "FOOD",
    "EXCERCISE",
    "BIOMETRICS",
    "NOTE",
    "WATER",
  ];

  const onClick = () => {
    setDialogForExcerciseOptions();
  };
  return (
    <div className="Trackers">
      {Trackers.map((tracker: healthTrackers) => (
        <Button key={tracker} onClick={onClick} variant="outlined">
          {tracker}
        </Button>
      ))}
    </div>
  );
}

function NavNar(): JSX.Element {
  return (
    <nav>
      <Button variant="outlined">Account</Button>
    </nav>
  );
}

export default App;
