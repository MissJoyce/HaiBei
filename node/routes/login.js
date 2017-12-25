var express = require("express");
var router = express.Router();

var mongoCt = require("mongodb").MongoClient;

router.get("/", (req, res, next) => {
    res.setHeader('Access-Control-Allow-Credentials', true);//局部设置跨源凭证
    console.log("query",req.query);
    console.log("session",req.session);
    //链接库
    var dbAdress = "mongodb://127.0.0.1:27017/haibei";
    mongoCt.connect(dbAdress, function (err, db) {
        if (err) {
            console.log("注册请求错误");
        } else {
            if (req.query.loginName != "" && req.query.loginPsd != "") {
                var userList = db.collection("user");
                userList.find({ username: req.query.loginName, password: req.query.loginPsd }).toArray((err, result) => {
                    if (result.length) {
                        // console.log("222",result)
                        // console.log("44");
                        res.send({ error: 0, msg: "登录成功" });
                        // console.log("成功")
                        db.close();
                    } else {
                        // console.log("000")；
                        res.send({ error: 1, msg: "用户名或密码错误" });
                        console.log("errr")
                        db.close();
                    }
                })
            } else {
                // console.log("222")
                res.send({ error: 2, msg: "用户名或密码不能为空" });
                db.close();
            }
        }

    });
})
module.exports = router;

