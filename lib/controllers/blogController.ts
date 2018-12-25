import * as mongoose from 'mongoose'
import {BlogSchema} from '../models/blogModel'
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

  public getBlogPosts (re:Request, res:Response){
    Blog.find({},(err,blogPost)=>{
      if(err){
        res.send(err);
      }
      res.json(blogPost)
    })
  }

  public getBlogPostWithId(req:Request, res:Response){
    Blog.findById(req.params.blogPostId,(err,blogPost)=>{
      if(err){
        res.send(err);
      }
      res.json(blogPost);
    })
  }

  public updateBlogPost(req:Request, res: Response){
    Blog.findOneAndUpdate({ _id: req.params.blogPostId }, req.body, { new: true },(err,blogPost)=>{
      if(err){
        res.send(err);
      }
      res.json(blogPost)
    })
  }

  public deleteBlogPost(req: Request, res:Response){
    Blog.remove({_id:req.params.blogPostId}, (err,blogPost)=>{
      if(err){
        res.send(err)
      }
      res.json({message: 'Successfully deleted'})
    })
  }
}
