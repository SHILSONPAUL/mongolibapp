var express = require('express');
var addRouter = express.Router();

function route(nav) {
    
    addRouter.route('/view')
    .get((req,res)=>{
  
        viewRouter.get((error,data)=>{
            if (error){
            //res.json({"status":"error"})
            throw error;
            }    
            else{
            res.send(data);
            res.join({"status":"succes"});
             
                }       

        });
       
    })
   

    return addRouter;
}
module.exports = route;