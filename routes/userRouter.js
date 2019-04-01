//处理用户相关的路由
const express = require('express');
const UserModel = require('../modles/userModel');
const router = express.Router();

//处理注册的路由
router.post('/register', (req,res) => {
    //1.获取前端传过来的数据库
    let username = req.body.username;
    let password = req.body.password;

    //2. 对参数进行校验

    //3. 将数据写入到数据库中
    let user = new UserModel({
        //es6两个是一样的可以这样写
        username: username,
        password: password
    })
    user.save()
        .then(() => {
            console.log('注册成功');
            res.redirect('/login.html');
        })
        .catch(error => {
            console.log('注册失败');
            res.send('注册失败');
        })
})

module.exports = router;