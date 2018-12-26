import {Request,Response,NextFunction} from 'express'
import {BlogController} from '../controllers/blogController'
export class Routes{

  public blogController: BlogController = new BlogController()

  public routes(app):void {
    app.route('/')
    .get((req: Request, res: Response)=>{
      res.status(200).send({
        message: 'get success'
      })
    })
    //Blog Endpoints
    app.route('/blog')
    .get((req: Request, res: Response, next:NextFunction)=>{
      if(req.query.key !=='16cdeafbc58240ab98c3cc6b72029857269da284'){
        res.status(401).send('access denied')
      }else{
        next();
      }
    }, this.blogController.getBlogPosts)
    .post((req:Request, res:Response)=>{
      res.status(200).send({
        message: 'blog post success'
      })
    })

    //Blog Details
    app.route('/blog/:blog_id')
    .get(this.blogController.getBlogPostWithId)
    .put(this.blogController.updateBlogPost)
    .delete(this.blogController.deleteBlogPost)
  }
}
