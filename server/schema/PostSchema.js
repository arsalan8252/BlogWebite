const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  picture: { type: String, required: false},
  username: { type: String, required: true},
  category: { type: String, required: false},
  createDate: { type: Date},
});
const post = mongoose.model('post',PostSchema);
module.exports = post;