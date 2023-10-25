import { httpAuth } from "./http";


class UserService {
  async uploadImage(data){
    return httpAuth.post("/User/upload", data)
  }
  async fetchMe(){
    return httpAuth.get("/User/me")
  }
  async fetchUser(id){
    return httpAuth.get("/User/"+id)
  }
}

export default new UserService();
