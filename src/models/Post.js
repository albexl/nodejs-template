import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class Post {
  initSchema() {
    const schema = new Schema(
      {
        title: {
          type: String,
          required: true,
        },
        subtitle: {
          type: String,
          required: false,
        },
        description: {
          type: String,
          required: false,
        },
        content: {
          type: String,
          required: true,
        },
      },
      { timestamps: true }
    );

    schema.plugin(uniqueValidator);
    mongoose.model("post", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("post");
  }
}

export default Post;
