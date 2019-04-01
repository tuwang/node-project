const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

//引入相应的路由js文件
const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter');

//设置静态文件托管
app.use(express.static(path.resolve(__dirname, './public')));

// 设置能够使用req.body 的中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//设置使用cookie中间件
app.use(cookieParser());

// 设置模板页面的存放路径与使用的是何种模板
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(3000);