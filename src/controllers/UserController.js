import Controller from "./Controller";
import UserService from "./../services/PostService";
import User from "./../models/Post";
const userService = new UserService(new User().getInstance());

class UserController extends Controller {
  constructor(service) {
    super(service);
  }
}

export default new UserController(userService);
