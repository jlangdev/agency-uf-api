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
 * Get Students
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

router.post('/upload', upload.single('upload'), (req, res) => {
    let file = req.file.path;
    let data;
    fs.readFile(file, 'utf-8', (err,result) => {
        if (err) {
            throw err;
        } else {
            data = result;
            uploadCSV(data);
        }
    });

    
});

function uploadCSV(data){
    let students = [];
    csv
        .fromString(data.toString(), {
            headers: true,
            ignoreEmpty: true
        })
        .on('data', (data) => {
            //data['_id'] = new mongoose.types.ObjectId();
            students.push(data);
        })
        .on('end', () => {
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
}



router.put('/:id', function (req, res) {
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
