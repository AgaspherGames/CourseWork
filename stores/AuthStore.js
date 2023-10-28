import { create } from 'zustand'
import localStorageService from '../services/localStorageService'

export const useAuthStore = create((set) => ({
  token: "",
  user: null,
  registeredUser: null,
  setToken: (token) => set((state) => {
    localStorageService.setItem("token", token)
    return { token }
  }),
  setUser: (user) => set((state) => {
    localStorageService.setItem("user", user)
    return { user }
  }),
  setRegisteredUser: (registeredUser) => set((state) => ({ registeredUser })),
}))
