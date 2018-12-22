import {Request,Response} from 'express'

export class Routes{
  public routes(app):void {
    .get((req: Request, res: Response)=>{
      res.status(200).send({
        message: 'get success'
      })
    })
    //Blog Endpoints
    app.route('/blog')
    .get((req: Request, res: Response)=>{
      res.status(200).send({
        message: 'blog get success'
      })
    })
    .post((req:Request, res:Response)=>{
      res.status(200).send({
        message: 'blog post success'
      })
    })

    //Blog Details
    app.route('/blog/:blog_id')
    .get((req: Request, res: Response)=>{
      res.status(200).send({
        message: 'blog detail get success'
      })
    })
    .put((req: Request, res:Response)=>{
      res.status(200).send({
        message: 'blog detail put success'
      })
    })
    .delete((req: Request, res: Response)=>{
      res.status(200).send({
        message: 'blog detail delete success'
      })
    })
  }
}
