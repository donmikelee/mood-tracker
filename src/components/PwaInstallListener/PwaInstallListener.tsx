"use client";

import { useEffect } from "react";
import { usePwaInstallStore } from "@/store/usePwaInstallStore";

const PwaInstallListener = () => {
  const setDeferredPrompt = usePwaInstallStore((state) => state.setDeferredPrompt);
  const setIsInstalled = usePwaInstallStore((state) => state.setIsInstalled);

  useEffect(() => {
    const standaloneQuery = window.matchMedia("(display-mode: standalone)");
    setIsInstalled(standaloneQuery.matches || (window.navigator as { standalone?: boolean }).standalone === true);

    const handleDisplayModeChange = (event: MediaQueryListEvent) => {
      setIsInstalled(event.matches);
    };

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as Parameters<typeof setDeferredPrompt>[0]);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
    };

    standaloneQuery.addEventListener("change", handleDisplayModeChange);
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      standaloneQuery.removeEventListener("change", handleDisplayModeChange);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, [setDeferredPrompt, setIsInstalled]);

  return null;
};

export default PwaInstallListener;
