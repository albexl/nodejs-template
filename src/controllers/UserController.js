require("dotenv").config();

import Controller from "./Controller";
import UserService from "./../services/UserService";
import User from "./../models/User";

const userService = new UserService(new User().getInstance());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UserController extends Controller {
  constructor(service) {
    super(service);
  }

  async register(req, res) {
    try {
      const { name, last_name, email, password } = req.body;

      if (!(email && password && name && last_name)) {
        res.status(400).send("All input is required");
      }

      const users = await userService.getAll({ email: email });

      if (users.data.length > 0) {
        return res.status(409).send("User Already Exist. Please Login");
      }

      const encryptedPassword = await bcrypt.hash(password, 10);

      const user = await userService.insert({
        name: name,
        last_name: last_name,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      const token = jwt.sign({ user_id: user._id, email }, "2RANDOM*STRING6", {
        expiresIn: "2h",
      });

      user.token = token;

      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new UserController(userService);
