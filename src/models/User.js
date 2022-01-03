import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class User {
  initSchema() {
    const schema = new Schema(
      {
        name: {
          type: String,
          required: true,
        },
        last_name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          unique: true,
          required: false,
        },
        password: {
          type: String,
        },
        token: {
          type: String,
        },
      },
      { timestamps: true }
    );

    schema.plugin(uniqueValidator);
    mongoose.model("user", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("user");
  }
}

export default User;
