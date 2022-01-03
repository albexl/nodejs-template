import PostController from "./../src/controllers/PostController";
import CommentController from "./../src/controllers/CommentController";

export default (server) => {
  // POST ROUTES

  server.get(`/api/posts`, PostController.getAll);
  server.post(`/api/posts`, PostController.insert);
  server.patch(`/api/posts/:id`, PostController.update);
  server.delete(`/api/posts/:id`, PostController.delete);

  // COMMENT ROUTES
  server.get(`/api/comments`, CommentController.getAll);
  server.post(`/api/comments`, CommentController.insert);
  server.patch(`/api/comments/:id`, CommentController.update);
  server.delete(`/api/comments/:id`, CommentController.delete);
};
