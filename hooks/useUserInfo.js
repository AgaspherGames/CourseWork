import { useEffect } from "react";
import { useAuthStore } from "../stores/AuthStore";
import localStorageService from "../services/localStorageService";

export const useUserInfo = () => {
  const { token, user, setToken, setUser } = useAuthStore((state) => state);
  useEffect(() => {
    (async () => {
      setToken("");
    //   setToken(await localStorageService.getItem("token"));
      setUser(await localStorageService.getItem("user"));
    })();
  }, []);
  return { token, user };
};
