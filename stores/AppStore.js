import { create } from 'zustand'

export const useAppStore = create((set) => ({
  page: "Welcome",
  setPage: (page) => set((state) => ({ page })),
}))
