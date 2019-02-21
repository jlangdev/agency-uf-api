"use strict";
const express = require('express');
const router = express.Router();
const Student = require('./schema.js');
const csv = require('fast-csv');
const multer = require('multer');
const upload = multer({ dest: 'tmp/csv/' });
const fs = require('fs')
const path = require('path')


/**
 * GET
 * Route: /students/
 * TODO: implement reliable filter function
 */
router.get('/', (req, res) => {
    //check for filter parameters in query
    if (req.body.filter) {
        Student.find(req.body, (err, foundStudents) => {
            if (err) {
                res.status(500).json({
                    err: err
                });
                console.log(err)
            }
            res.status(200).json({
                students: foundStudents
            });
        })
        //if no filter parameters return all    
    } else {
        Student.find({}, (err, foundStudents) => {
            if (err) {
                res.status(500).json({
                    err: err
                });
                console.log(err)
            }
            res.status(200).json({
                students: foundStudents
            });
        });
    }
});

/**
 * POST
 * Route: /students/
 * TODO:
 */
router.post('/', (req, res) => {
    console.log(req.body);
    var student = new Student(req.body);
    student.save((err) => {
        if (err) {
            res.status(500).json({
                err: err
            });
        }
        res.status(200).json({
            msg: "Added to Project 100!"
        });
    });
});

/**
 * POST
 * Route: /students/upload
 * TODO: implement loigic for nested properties in csv
 */
router.post('/upload', upload.single('upload'), (req, res) => {
    let file = req.file.path;
    let data = fs.readFileSync(file, 'utf-8')
    let students = [];

    csv
        .fromString(data.toString(), {
            headers: true,
            ignoreEmpty: true,
            delimiter: ','
        })
        .on('data', (data) => {
            //data['_id'] = new mongoose.types.ObjectId();
            students.push(data);
        })
        .on('end', () => {
            for(let x of students){
                for(let prop in x){
                    let val = x[prop].toLowerCase();
                    if(val == 'true'){
                        x[prop] = true;
                    }else if(val == 'false'){
                        x[prop] = false
                    }
                }
            }
            Student.create(students, (err) => {
                if (err) {
                    res.status(500).json({
                        err: err
                    });
                }
                res.status(200).json({
                    msg: `Added ${students.length} students to Project 100!`
                });
            })

        })
        //delete file after operations
        fs.unlinkSync(file);
});


/**
 * PATCH
 * Route: /students/:id
 * TODO: debug and implement update logic so only specified fields are updated
 * BUGS: document is completely replaced by req.body
 */
router.patch('/:id', function (req, res) {
    Student.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, oldStudent) {
        if (err) {
            res.status(500).json({
                err: err
            });
        }
        res.status(200).json({
            msg: oldStudent
        });
    });
});

/**
 * DELETE
 * Route: /students/:id
 * TODO: debug and implement necessary logic
 * BUGS: This route hasn't really been tested as of yet
 */
router.delete('/:id', function (req, res) {
    Student.findOneAndRemove({ _id: req.params.id }, function (err, deletedStudent) {
        if (err) {
            res.status(500).json({
                err: err
            });
        }
        res.status(200).json({
            msg: deletedStudent
        });
    });
});

module.exports = router
