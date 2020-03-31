const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var wishlistSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  owner: String,
  items: [{ name: String, url: String, image: String }]
});
