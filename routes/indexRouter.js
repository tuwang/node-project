//专门处理渲染ejs模板的路由文件
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    if(req.cookies.nickName){
        res.render('index', {
            nickName: req.cookies.nickName
        });
    }else{
        res.redirect('/login.html');
    }
    // res.render('index');
})

router.get('/login.html', (req,res) => {
    res.render('login');
})

router.get('/register.html', (req,res) => {
    res.render('register');
})

module.exports = router;