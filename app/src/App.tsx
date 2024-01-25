import { useState } from "react";
import SideBar from "./sideBar";
import Button from "@mui/material/Button";
import "./Stylesheets.css/NavBar.css";
import "./Stylesheets.css/Dashboard.css";

function App() {
  return (
    <div>
      <NavNar />
      <DashBoard />
    </div>
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
  return (
    <div className="Trackers">
      {Trackers.map((tracker: healthTrackers) => (
        <Button key={tracker} variant="outlined">
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
