import AverageStats from "../../components/AverageStats/AverageStats";
import Button from "../../components/Button/Button";
import LogMoodModal from "../../components/LogMoodModal/LogMoodModal";
import MoodChartSleep from "../../components/MoodSleepChart/MoodSleepChart";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useModalStore } from "../../store/useModalStore";
import TodayLog from "../../components/TodayLog/TodayLog";
import { useLoggedEntry } from "../../hooks/useLoggedEntry";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const { loggedEntry, setLoggedEntry } = useLoggedEntry();
  const { loggedMood, loggedFeelings, loggedText, loggedSleepHours } =
    useModalStore();

  const handleLogMood = () => setOpenModal((prev) => !prev);

  const handleLoggedEntry = () => {
    if (!loggedMood || !loggedSleepHours) return;
    setLoggedEntry({
      loggedMood,
      loggedFeelings,
      loggedText,
      loggedSleepHours,
    });
  };

  return (
    <div className="dashboard-page">
      <Navbar />
      <header className="greeting-text">
        <h3 className="hello-avatar text-preset-3">Hello, Lisa!</h3>
        <h2 className="large-text text-preset-1">How are you feeling today?</h2>
        <p className="date">Wednesday, April 16th, 2025</p>
      </header>
      {loggedEntry ? (
        <TodayLog {...loggedEntry} />
      ) : (
        <div className="log-data">
          <Button
            additionalClass="add-log text-preset-5"
            onClick={handleLogMood}
          >
            Log today's mood
          </Button>
        </div>
      )}
      <div className="mood-data">
        <AverageStats />
        <MoodChartSleep />
      </div>
      {openModal &&
        createPortal(
          <LogMoodModal
            closeLog={handleLogMood}
            submitMoodData={handleLoggedEntry}
          />,
          document.body.getElementsByClassName("main-wrapper")[0],
        )}
    </div>
  );
};

export default Dashboard;
