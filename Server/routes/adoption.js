import express from'express'
import { create, getAll, getOne, update, remove } from '../controllers/adoptionController.js';





const router = express.Router();

//GET ONE
router.get('/get/:id', getOne)

//GET
router.get('/all', getAll)

//create
router.post('/create',create)


//UPDATE
router.put('/update/:id',update)


//delete
router.delete('/delete/:id',remove)

 export default router;