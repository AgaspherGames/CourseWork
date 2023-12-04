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

    return httpAuth.post("/Post", form);
  }
  fetchPosts() {
    return httpAuth.get("/Post", {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  }
  fetchPost(id) {
    return http.get("/Post/" + id);
  }
  fetchIsLiked(id) {
    return httpAuth.get("/Like/" + id);
  }
  likePost(id) {
    return httpAuth.post("/Like/" + id);
  }
  unlikePost(id) {
    return httpAuth.delete("/Like/" + id);
  }
  fetchCommentaries(id) {
    return httpAuth.get("/Commentary/" + id);
  }
  addCommentary(id, text) {
    return httpAuth.post("/Commentary/" + id, { text });
  }
  deletePost(id) {
    return httpAuth.delete("/Post/" + id);
  }
}

export default new PostService();
