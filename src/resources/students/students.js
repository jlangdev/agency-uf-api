"use strict";
const express = require('express');
const router = express.Router();
const Student = require('./schema.js');


router.get('/', function (req, res) {
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
});

router.post('/', (req, res) => {
    console.log(req.body);
    var student = new Student(req.body);
    student.save( (err) => {
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
