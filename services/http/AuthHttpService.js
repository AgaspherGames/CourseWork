import { useAuthStore } from "../../stores/AuthStore";
import { http } from "./http";

class AuthHttpService {
  register(data) {
    return http.post("/UserAuth/register", data);
  }
  async login(data) {
    try {
      const response = await http.post("/UserAuth/login", data);
      console.log(response);
      useAuthStore.getState().setToken(response.data.token);
      useAuthStore.getState().setUser(response.data.user);
      return response;
    } catch (error) {
        return error
    }
  }
}

export default new AuthHttpService();
