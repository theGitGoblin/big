const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const path = require('path');

const app = express();

app.post('/upload', Upload.single('file')), (req,res) =>{
    if(!req.file){
        return res.statuse(400).send('No file has uploaded')
    }
}