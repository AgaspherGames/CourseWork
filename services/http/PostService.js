import { http, httpAuth } from "./http";

class PostService {
  async upload(title, description, imgs) {
    const form = new FormData();

    form.append("title", title);
    form.append("description", title);
    for (let i = 0; i < imgs.length; i++) {
      form.append("imgs", {
        name: "img.png",
        uri: imgs[i].uri,
        type: "image/png",
      });
    }

    console.log(form);

    httpAuth.post("/Post", form).catch((err) => console.log(err));
  }
  fetchPosts(){
    return http.get("/Post")
  }
}

export default new PostService();
