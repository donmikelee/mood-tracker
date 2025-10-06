import AverageStats from "../../components/AverageStats/AverageStats";
import LogMoodModal from "../../components/LogMoodModal/LogMoodModal";
import MoodChartSleep from "../../components/MoodSleepChart/MoodSleepChart";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { createPortal } from "react-dom";

const Dashboard = () => {
  const [log, useLog] = useState(false);
  const handleLogMood = () => {
    useLog((prevstate) => !prevstate);
  };
  return (
    <div className="dashboard-page">
      <Navbar />
      <header className="greeting-text">
        <h3 className="hello-avatar text-preset-3">Hello, Lisa!</h3>
        <h2 className="large-text text-preset-1">How are you feeling today?</h2>
        <p className="date">Wednesday, April 16th, 2025</p>
        <button
          className="add-log primary-button text-preset-5"
          onClick={handleLogMood}
        >
          Log today's mood
        </button>
      </header>
      <div className="mood-data">
        <AverageStats />
        <MoodChartSleep />
      </div>
      {log &&
        createPortal(
          <LogMoodModal closeLog={handleLogMood} />,
          document.body.getElementsByClassName("main-wrapper")[0]
        )}
    </div>
  );
};

export default Dashboard;
