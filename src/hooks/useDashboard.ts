"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import { useModalStore } from "../store/useModalStore";
import { useMoodEntries } from "./useMoodEntries";
import { useSetNewDay } from "./useSetNewDay";
import { getSleepRangeLabel } from "@/data/sleepHours";
 
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

export const useDashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [userName, setUserName] = useState("");
  const { entries, loading, addEntry } = useMoodEntries();

  useSetNewDay();
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
  };

  const todaysEntry = entries.find(
    (entry) =>
      new Date(entry.created_at).toDateString() === new Date().toDateString(),
  );

  const loggedEntry = todaysEntry
    ? {
        loggedMood: todaysEntry.mood,
        loggedFeelings: todaysEntry.feelings,
        loggedText: todaysEntry.note,
        loggedSleepHours: getSleepRangeLabel(todaysEntry.sleep_hours),
      }
    : null;

  return {
    openModal,
    userName,
    entries,
    loading,
    loggedEntry,
    handleOpenLogMoodModal,
    handleLoggedEntry,
    todaysDate: getTodaysDate(),
  };
};
