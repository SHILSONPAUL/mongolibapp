var mongoose = require("mongoose")
var studModel = mongoose.model("students",{
    name:String,
    admno:Number,
    rollno:Number,
    college:String
})
module.exports = {studModel};