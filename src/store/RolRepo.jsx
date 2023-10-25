import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useRolReposStore = create(
  persist(
    (set) => ({
      rol: "",
      setRol: () => set((state) => ({ rol: state.rol })),
    }),
    {
      name: "rol-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
