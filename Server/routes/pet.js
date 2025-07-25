import express from 'express'

import {update,getAll,create,getOne, remove, } from "../controllers/petController.js";

import multer from 'multer';
import fs from 'fs';
import path from 'path';



const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file,cb){
        if(!fs.existsSync('public')){
           fs.mkdirSync('public');
        }
        if(!fs.existsSync('public/images')){
            fs.mkdirSync('public/images');
        }

        cb(null, 'public/images');
       
        

    },
    filename: function(req, file, cb){
        cb(null, Date.now() + file.originalname);

    }
})

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {

        const ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpeg' && ext !== '.jpg'){
            return cb(new Error('Only videos are allowed!'));
        }
        cb(null, true);
    }
})

//image - Single file

// additionalImage - multiple-5 limit
router.get('/all',getAll);
router.get('/get/:id',getOne);


router.post('/create',upload.fields([
    {
        name: "image",
        maxCount: 1,
    },
    {
        name: "additionalImages",
        maxCount: 5
    }

    ]),create);

    //Update

    router.put('/update/:id',upload.fields([
    {
        name: "image",
        maxCount: 1,
    },
    {
        name: "additionalImages",
        maxCount: 5
    }

    ]),update);

router.delete('/delete/:id',remove);
export default router;

