"use client";

import { useState, useEffect } from "react";

export const useSetNewDay = () => {
  const [isNewDay, setIsNewDay] = useState(false);

  useEffect(() => {
    const now = new Date();
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0,
      0,
    );

    const msUntilMidnight = nextMidnight.getTime() - now.getTime();

    const timerId = setTimeout(() => {
      setIsNewDay(prev => !prev);
    }, msUntilMidnight);

    return () => clearTimeout(timerId);
  }, []);

  return { isNewDay };
};
