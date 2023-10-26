import { http, httpAuth } from "./http";

class PostService {
  async upload(title, description, imgs) {
    const form = new FormData();

    form.append("title", title);
    form.append("description", description);
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
  fetchPost(id){
    return http.get("/Post/"+id)
  }
  fetchIsLiked(id){
    return httpAuth.get("/Like/"+id)
  }
  likePost(id){
    return httpAuth.post("/Like/"+id)
  }
  unlikePost(id){
    return httpAuth.delete("/Like/"+id)
  }
}

export default new PostService();
