import { create } from "zustand";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

type PwaInstallStore = {
  deferredPrompt: BeforeInstallPromptEvent | null;
  isInstallable: boolean;
  isInstalled: boolean;
  setDeferredPrompt: (event: BeforeInstallPromptEvent | null) => void;
  setIsInstalled: (installed: boolean) => void;
  promptInstall: () => Promise<"accepted" | "dismissed" | "unavailable">;
};

export const usePwaInstallStore = create<PwaInstallStore>((set, get) => ({
  deferredPrompt: null,
  isInstallable: false,
  isInstalled: false,

  setDeferredPrompt: (event) =>
    set({ deferredPrompt: event, isInstallable: event !== null }),

  setIsInstalled: (installed) =>
    set({ isInstalled: installed, ...(installed && { deferredPrompt: null, isInstallable: false }) }),

  promptInstall: async () => {
    const { deferredPrompt } = get();
    if (!deferredPrompt) return "unavailable";

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    set({ deferredPrompt: null, isInstallable: false });
    if (outcome === "accepted") set({ isInstalled: true });

    return outcome;
  },
}));
