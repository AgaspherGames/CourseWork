import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  token: "",
  user: null,
  registeredUser: null,
  setToken: (token) => set((state) => ({ token })),
  setUser: (user) => set((state) => ({ user })),
  setRegisteredUser: (registeredUser) => set((state) => ({ registeredUser })),
}))
