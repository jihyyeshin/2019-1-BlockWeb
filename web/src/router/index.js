import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Course from '@/components/Course'
import Student from '@/components/Student'
import Assignment from '@/components/Assignment'
import Usages from '@/components/Usages'
Vue.use(Router)
// 페이지가 추가될 때 url 관리, import후 new router에 추가
export default new Router({
  routes: [{
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    },
    {
      path: '/assign',
      name: 'Assignment',
      component: Assignment
    },
    {
      path: '/usages',
      name: 'Usages',
      component: Usages
    },
  ]
})

var express = require('express');
var router = express.Router();

var mysql = require("mysql");

var client = mysql.createConnection({
  user: "root",
  password: "1234",
  database: "nodedb"
})

router.get('/', function(req, res, next) {
  client.query("SELECT * FROM products;", function(err, result, fields){
    if(err){
      console.log("쿼리문에 오류가 있습니다.");
    }
    else{
      res.json(result);
    }
  });

});
module.exports = router;


router.get('/create', function(req, res, next) {
  res.render('create');
});


router.post('/create', function(req, res, next) {
  var body = req.body;

  client.query("INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)", [
      body.name, body.modelnumber, body.series
    ], function(){
    res.redirect("/create");
  });
});router.get('/create', function(req, res, next) {
  res.render('create');
});


router.post('/create', function(req, res, next) {
  var body = req.body;

  client.query("INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)", [
      body.name, body.modelnumber, body.series
    ], function(){
    res.redirect("/create");
  });
});
