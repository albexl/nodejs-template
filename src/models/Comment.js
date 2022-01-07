import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class Comment {
  initSchema() {
    const schema = new Schema(
      {
        text: {
          type: String,
          required: true,
        },
        postId: {
          type: String,
          required: true,
        },
      },
      { timestamps: true }
    );

    schema.plugin(uniqueValidator);
    mongoose.model("comment", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("comment");
  }
}

export default Comment;
