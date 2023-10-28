import { httpAuth } from "./http";

class UserService {
  async fetchMe() {
    return httpAuth.get("/User/me");
  }
  async fetchUser(id) {
    return httpAuth.get("/User/" + id);
  }
  async fetchIsFollow(id) {
    return httpAuth.get(`/friends/${id}/check`);
  }
  async follow(id) {
    return httpAuth.post("/friends/" + id);
  }
  async unFollow(id) {
    return httpAuth.delete("/friends/" + id);
  }
  async upload(img) {
    const form = new FormData();
    form.append("image", {
      name: "img.png",
      uri: img.uri,
      type: "image/png",
    });

    return httpAuth.post("/User/upload", form).catch((err) => console.log(err));
  }
}

export default new UserService();
