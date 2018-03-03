const express = require('express');

const reload = require('reload');
const app = express();
app.locals.VALUE = 2018 ;

//views co s dùng 1 câu lệnh
app.listen(3000, () => console.log('Server Started'));
app.set('view engine', 'ejs');
// console.log(__dirname);
// app.get('/',(req,res)=> res.sendFile(__dirname + '/public/a.html'));
app.get('/',(req,res)=>{
     res.render('a');
});
app.get('/word',(req,res)=>{
    res.render('words', {words: arrwords});
});
reload(app);

const arrwords = [
    {en: 'one' , vn:'mot'},
    {en: 'two' , vn:'hai'},
    {en: 'three' , vn:'ba'},
]; 


