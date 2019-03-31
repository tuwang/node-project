//专门处理渲染ejs模板的路由文件
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    if(req.cookies.nickName){
        res.render('index', {
            nickName: req.cookies.nickName
        });
    }else{
        res.redirect('/login')
    }
    // res.render('index');
})

router.get('/login', (req,res) => {
    res.render('login');
})

router.get('/register', (req,res) => {
    res.render('login');
})

module.exports = router;