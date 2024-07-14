import http from "../http-common";

class BlogDataService {
  getAll() {
    return http.get("/blogs");
  }

  get(id) {
    return http.get(`/blogs/${id}`);
  }

  create(data) {
    return http.post("/blogs", data);
  }

  update(id, data) {
    return http.put(`/blogs/${id}`, data);
  }

  delete(id) {
    return http.delete(`/blogs/${id}`);
  }

  findByDescription(description) {
    return http.get(`/blogs/search/description/${description}`);
  }
}

export default new BlogDataService();
