import { create } from 'zustand'

export const useProfileStore = create((set) => ({
  isDrawerOpened: false,
  setIsDrawerOpened: (isDrawerOpened) => set((state) => ({ isDrawerOpened })),
}))
