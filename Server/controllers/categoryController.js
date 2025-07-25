import { Category } from "../models/Category.js";

export const getAll= async(req, res)=>{
    try {
        const categories =await Category.find();
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
        
    }

}

//CREATED

export const create = async(req,res)=>{
    try {
        const {name} = req.body;
        const created = await Category.create({name});
        res.json({message: 'success', created});
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
        
        
    }
}

// UPDATE
export const update= async(req,res)=>{
    try {
        const {id} = req.params;
        const {name} = req.body;
        const updated = await Category.findByIdAndUpdate(id, {name},{new: true});
        res.json({message: 'success', updated});
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
        
        
    }
}

//DELETED

export const remove= async(req,res)=>{
    try {
        const {id} = req.params;
       
        const deleted = await Category.findByIdAndDelete(id);
        res.json({message: 'success', deleted});
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
        
        
    }
}