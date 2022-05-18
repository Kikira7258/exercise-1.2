// Route
var express = require('express');
var router = express.Router();
var conn = require('../lib/db');

// Render
router.get('/list', function (req, res, next) {
    let varSQL = "SELECT * FROM students"

    conn.query(varSQL, function(err, rows){
        if(err){
            // 
        }else{
            res.render('students-list', {
                data: rows
            });
        }
    });
})

// Edit route
router.get('/edit/:id', function (req, res, next) {
    let varSQL = "SELECT * FROM students WHERE id=" + req.params.id;

    conn.query(varSQL, function(err, rows){
        if(err){
            // 
        }else{
            res.render('student-edit', {
                page_title: "Students Edit",
                data: rows[0]
            });
        }
    });
})

// Update Students Route
router.post('/update', function (req, res, next) {
    let varSQL = "UPDATE students SET first_nm ='" + req.body.txtFirstName +
                "", last_nm = ""

    conn.query(varSQL, function(err, rows){
        if(err){
            // 
        }else{
            res.render('student-edit', {
                page_title: "Students Edit",
                data: rows[0]
            });
        }
    });
})

module.exports = router;