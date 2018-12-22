import * as mongoose from 'mongoose'
import {BlogSchema} from './blogController'
import {Request, Response} from 'express'

const Blog = mongoose.model('Blog', BlogSchema);

export class BlogController{

  public addNewBlogPost (req: Request, res: Response){
    let newBlogPost = new Blog(req.body);

    newBlogPost.save((err,blogPost)=>{
      if(err){
        res.send(err)
      }
      res.json(blogPost)
    });
  }
}
