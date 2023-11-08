import { useAuthStore } from "../../stores/AuthStore";
import { http } from "./http";

class AuthHttpService {
  register(data) {
    return http.post("/UserAuth/register", data);
  }
  async login(data) {
    const response = await http.post("/UserAuth/login", data);
    useAuthStore.getState().setToken(response.data.token);
    useAuthStore.getState().setUser(response.data.user);
    return response;
  }
}

export default new AuthHttpService();
