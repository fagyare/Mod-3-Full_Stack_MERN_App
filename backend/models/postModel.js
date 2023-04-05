
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
   subject: { type: String },
   body: { type: String },
   user: { type: String, required: true },
   comments: [{
      // an id referencing the comment
      type: mongoose.Types.ObjectId,
      ref: 'Comment'
   }],
   department: { type: String, required: true }
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

module.exports = Post