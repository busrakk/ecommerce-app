import { create } from "zustand";
import { persist } from "zustand/middleware";

let appStore = (set) => ({
  dopen: true,
  updateOpen: (dopen) => set((state) => ({ dopen: dopen })),
  rows: [],
  setrRows: (rows) => set((state) => ({ rows:rows }))
});

appStore = persist(appStore, { name: "my_app_store" });
export const useAppStore = create(appStore);
