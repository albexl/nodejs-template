import Controller from "./Controller";
import CommentService from "./../services/CommentService";
import Comment from "./../models/Comment";
const commentService = new CommentService(new Comment().getInstance());

class CommentController extends Controller {
  constructor(service) {
    super(service);
  }
}

export default new CommentController(commentService);
