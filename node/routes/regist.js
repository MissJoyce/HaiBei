var express = require("express");
var router = express.Router();

var mongoCt = require("mongodb").MongoClient;

router.get("/", (req, res, next) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//   console.log("reg query",req.query);
    //链接库
    var dbAdress = "mongodb://127.0.0.1:27017/haibei";
    mongoCt.connect(dbAdress, function (err, db) {
        if (err) {
            console.log("注册请求错误");
        } else {
            if (req.query.getUname != "" && req.query.getPsd != "") {
                // console.log("111");
                var userList = db.collection("user");
                // console.log(userList);
                userList.find({ username: req.query.getUname }).toArray((err, result) => {
                    if (result.length) {
                        // console.log("222",result)
                        console.log("44用户名已存在");
                        res.send({ error: 1, msg: "用户名已存在" });
                        db.close();
                    } else {
                        console.log("000注册成功");
                        userList.save({ "username": req.query.getUname, "password": req.query.getPsd });
                        req.session.username = req.query.getUname;
                        req.session.password = req.query.getPsd;
                        res.send({ error: 0, msg: "注册成功" });
                        db.close();
                    }
                })
            } else {
                // console.log("222")
                res.send({ error: 2, msg: "用户名或密码为空" });
                db.close();
            }
        }

    });
})

    module.exports = router;

