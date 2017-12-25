var express = require("express");
var router = express.Router();

var mongoCt = require("mongodb").MongoClient;

router.get("/",(req,res,next)=>{
    // console.log(req.query.count);
    //连接数据库
    var dbAdress = "mongodb://127.0.0.1:27017/haibei";
    mongoCt.connect(dbAdress,function(err,db){
        if(err){
            console.log("error with photo");
        }else{
            var photo = db.collection("photo");
            photo.find({},{_id:0}).toArray((err,result)=>{
                // console.log("haha",result);
                res.send(result);
            })
        }
    });
    
});

module.exports=router;