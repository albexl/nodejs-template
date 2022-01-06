import PostController from "./../src/controllers/PostController";
import CommentController from "./../src/controllers/CommentController";
import UserController from "./../src/controllers/UserController";
const auth = require("./../middleware/auth");

export default (server) => {
  // POST ROUTES
  server.get(`/api/posts`, auth, PostController.getAll);
  server.post(`/api/posts`, PostController.insert);
  server.patch(`/api/posts/:id`, PostController.update);
  server.delete(`/api/posts/:id`, PostController.delete);

  // COMMENT ROUTES
  server.get(`/api/comments`, CommentController.getAll);
  server.post(`/api/comments`, CommentController.insert);
  server.patch(`/api/comments/:id`, CommentController.update);
  server.delete(`/api/comments/:id`, CommentController.delete);

  // USER ROUTES
  server.get(`/api/users`, UserController.getAll);
  server.post(`/api/users`, UserController.insert);
  server.patch(`/api/users/:id`, UserController.update);
  server.delete(`/api/users/:id`, UserController.delete);
  server.post(`/api/register`, UserController.register);
  server.post(`/api/login`, UserController.login);
};
