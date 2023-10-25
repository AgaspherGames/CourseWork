import { useEffect } from "react";
import { useAuthStore } from "../stores/AuthStore";
import localStorageService from "../services/localStorageService";
import UserService from "../services/http/UserService";

export const useUserInfo = () => {
  const { token, user, setToken, setUser } = useAuthStore((state) => state);
  useEffect(() => {
    (async () => {
      const user = await localStorageService.getItem("user");
      setToken(await localStorageService.getItem("token"));
      setUser(user);
      setUser((await UserService.fetchMe(user.id)).data);
    })();
  }, []);
  return { token, user };
};
