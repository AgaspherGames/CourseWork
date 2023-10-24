import { http } from "./http";

class AuthHttpService {
    register(data){
        console.log(data);
        return http.post("/UserAuth/register", data);
    }
}

export default new AuthHttpService()