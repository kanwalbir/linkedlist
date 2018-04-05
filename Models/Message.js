const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    user_id_from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    user_id_to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    content: { type: String, min: 1, max: 255, required: true }
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
