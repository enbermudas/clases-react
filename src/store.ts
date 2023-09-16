import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StoreState {
  username: string;
  setUsername: (newUsername: string) => void;
}

const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        username: "",
        setUsername: (newUsername) => set(() => ({ username: newUsername })),
      }),
      { name: "clases-store" }
    )
  )
);

export default useStore;
