"use client";

import AverageStats from "../../components/AverageStats/AverageStats";
import Button from "../../components/Button/Button";
import LogMoodModal from "../../components/LogMoodModal/LogMoodModal";
import MoodChartSleep from "../../components/MoodSleepChart/MoodSleepChart";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useModalStore } from "../../store/useModalStore";
import TodayLog from "../../components/TodayLog/TodayLog";
import { useLoggedEntry } from "../../hooks/useLoggedEntry";
import { useMoodEntries } from "@/hooks/useMoodEntries";
import { createClient } from "@/lib/supabase";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [userName, setUserName] = useState("");
  const { entries, loading, addEntry } = useMoodEntries();
  const { loggedEntry, setLoggedEntry } = useLoggedEntry();
  const { loggedMood, loggedFeelings, loggedText, loggedSleepHours } =
    useModalStore();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUserName(user?.user_metadata?.full_name ?? "");
    });
  }, []);

  const handleOpenLogMoodModal = () => setOpenModal((prev) => !prev);

  const handleLoggedEntry = async () => {
    if (!loggedMood || !loggedSleepHours) return;

    await addEntry({
      mood: loggedMood,
      sleep_hours: parseInt(loggedSleepHours),
      feelings: loggedFeelings,
      note: loggedText,
    });

    setLoggedEntry({
      loggedMood,
      loggedFeelings,
      loggedText,
      loggedSleepHours,
    });
  };

  const getTodaysDate = () => {
    const today = new Date();
    const day = today.getDate();

    const suffixes: Record<string, string> = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th",
    };
    const ordinal = `${day}${suffixes[new Intl.PluralRules("en-US", { type: "ordinal" }).select(day)]}`;

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = today.toLocaleDateString("en-US", options);
    return date.replace(String(day), ordinal);
  };

  return (
    <div className="dashboard-page">
      <Navbar />
      <header className="greeting-text">
        <h3 className="hello-avatar text-preset-3">
          Hello{userName ? `, ${userName}` : ""}!
        </h3>
        <h2 className="large-text text-preset-1">How are you feeling today?</h2>
        <p className="date">{getTodaysDate()}</p>
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
