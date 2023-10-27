import { useEffect } from "react";
import { useAuthStore } from "../stores/AuthStore";
import localStorageService from "../services/localStorageService";
import UserService from "../services/http/UserService";

export const useUserInfo = () => {
  const { token, user, setToken, setUser } = useAuthStore((state) => state);
  async function update() {
    const user = await localStorageService.getItem("user");
    const token = await localStorageService.getItem("token")
    setToken("")
    setToken(token);
    if (token) {
      setUser(user);
      updateUserInfo(user.id)
    }
  }

  async function updateUserInfo(id){
    setUser((await UserService.fetchMe(id || user.id)).data);
  }

  useEffect(() => {
    update()
  }, []);
  return { token, user, updateUserInfo };
};
