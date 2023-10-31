import { http, httpAuth } from "./http";

class SearchService {
  async search(query) {
    return http.get("/Search?query=" + query).catch((err) => console.log(err));
  }
}

export default new SearchService();
