


var express = require('express');
var viewRouter = express.Router();

function route(nav) {
    var books = [
        {
            image: "harry.jpga",
            title: "War and peace",
            genre: "Historical Fiction",
            auhtor: "J K Rowlink"
        },
        {
            image: "gully.jpeg",
            title: "Gulliver's Travels ",
            genre: "Fantasy",
            auhtor: "Jonathan Swift"
        },
        {
            image: "hobbit.jpg",
            title: "The Bobbit",
            genre: "Fantasy",
            auhtor: "J R R Tolkien"
        },
        {
            image: "pi.jpg",
            title: "Life of Pi",
            genre: "philosophical novel",
            auhtor: "Yann Martel"
        },
        {
            image: "lord.jpeg",
            title: "The Lord of The Rings",
            genre: "Fantasy",
            auhtor: "J R R Tolkien"
        },
    ];
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

    viewRouter.route('/')
        .get((req, res) => {
            
            res.render('viewall.ejs', {
                nav,
                title: "viewall",
                books
            })
        });


    return viewRouter;
}

module.exports = route;