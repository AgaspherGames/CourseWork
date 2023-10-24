import { http } from "./http";

class AuthHttpService {
    register(data){
        return http.post("/UserAuth/register", data);
    }
    login(data){
        return http.post("/UserAuth/login", data);
    }
}

export default new AuthHttpService()