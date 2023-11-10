import { http, httpAuth } from "./http";

class SearchService {
  async search(query) {
    return http.get("/Search?query=" + query);
  }
}

export default new SearchService();
