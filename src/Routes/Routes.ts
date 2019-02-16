import express from "express";
import {UserController} from '../controllers/UserController';
export class Routes {
    public userController:UserController= new UserController();
    public routes(app:any){
        app.route('/').
        get((req:express.Request,res:express.Response)=>{
            res.status(200).send({
                message:200
            });
        })
        
                // Contact detail
                app.route('/users/Authentification')
                // get specific contact
                .get(this.userController.Authentification) 
                // Contact detail
                app.route('/users/:userId')
                // get specific contact
                .get(this.userController.getUserWithID) 
                .put(this.userController.updateContact)
                .delete(this.userController.deleteContact)

                
                // Contact 
                app.route('/users') 
                // GET endpoint 
                .get(this.userController.getUsers)        
                // POST endpoint
                .post(this.userController.addNewUser)
        
    }
}