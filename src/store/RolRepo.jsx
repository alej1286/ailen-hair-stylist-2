import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { devtools } from 'zustand/middleware';


export const useRolReposStore = create(devtools(
  persist(
    (set,get) => ({
      rol: "",
      setRol: (group) => set((state) => ({ rol: group })),
    }),
    {
      name: "rol-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),)
);
