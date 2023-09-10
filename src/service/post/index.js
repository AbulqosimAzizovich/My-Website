import api from "../axios";

const postAPI = {
  getPost: async () => api.get("/posts"),
  getOneItem: async (id) => api.get(`/posts/${id}`),
};

export default postAPI;
