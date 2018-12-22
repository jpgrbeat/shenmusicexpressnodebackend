import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const BlogSchema = new Schema({
  category: {
    type: String,
    required: 'Enter a category'
  },
  blog_post: {
    type: Object,
    required: 'Blog body required'
  },
  created_date: {
        type: Date,
        default: Date.now
    }
})
