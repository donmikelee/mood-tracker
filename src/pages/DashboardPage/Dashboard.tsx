"use client";

import AverageStats from "../../components/AverageStats/AverageStats";
import Button from "../../components/Button/Button";
import LogMoodModal from "../../components/LogMoodModal/LogMoodModal";
import MoodChartSleep from "../../components/MoodSleepChart/MoodSleepChart";
import Navbar from "../../components/Navbar/Navbar";
import { createPortal } from "react-dom";
import TodayLog from "../../components/TodayLog/TodayLog";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { useDashboard } from "../../hooks/useDashboard";

const Dashboard = () => {
  const {
    openModal,
    userName,
    entries,
    loggedEntry,
    handleOpenLogMoodModal,
    handleLoggedEntry,
    todaysDate,
    loading,
  } = useDashboard();

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="dashboard-page">
      <Navbar />
      <header className="greeting-text">
        <h3 className="hello-avatar text-preset-3">
          Hello{userName ? `, ${userName}` : ""}!
        </h3>
        <h2 className="large-text text-preset-1">How are you feeling today?</h2>
        <p className="date">{todaysDate}</p>
      </header>
      {loggedEntry ? (
        <TodayLog {...loggedEntry} />
      ) : (
        <div className="log-data">
          <Button
            additionalClass="add-log text-preset-5"
            onClick={handleOpenLogMoodModal}
            text="Log today's mood"
          ></Button>
        </div>
      )}
      <div className="mood-data">
        <AverageStats loggedEntries={entries} />
        <MoodChartSleep loggedEntries={entries} />
      </div>
      {openModal &&
        createPortal(
          <LogMoodModal
            closeLog={handleOpenLogMoodModal}
            submitMoodData={handleLoggedEntry}
          />,
          document.body.getElementsByClassName("main-wrapper")[0],
        )}
    </div>
  );
};

export default Dashboard;
