
import path from "path";
import { Pet } from "../models/Pet.js";
import fs from "fs";
import fsPromises from "fs/promises"; 

// GET ALL
export const getAll = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(400).json(error);
  }
};

// GET ONE
export const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id);
    res.json(pet);
  } catch (error) {
    res.status(400).json(error);
  }
};

// CREATE
export const create = async (req, res) => {
  try {
    console.log(req.files);
    const { name, age, breed, color, description, imageLabel, category } = req.body;
    const { image, additionalImages } = req.files;

    let imagePath = "";
    let additionalImagesPath = [];

    if (image && image.length > 0) {
      imagePath = image[0].path;
    }

    if (additionalImages && additionalImages.length > 0) {
      additionalImagesPath = additionalImages.map(file => file.path);
    }

    const createdPet = await Pet.create({
      name,
      age,
      breed,
      color,
      description,
      imageLabel,
      category,
      image: imagePath,
      additionalImages: additionalImagesPath,
    });

    res.json({ message: "Pet created", createdPet });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// UPDATE
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, breed, color, description, imageLabel, category } = req.body;
    const { image, additionalImages } = req.files;

    let imagePath = "";
    let additionalImagesPath = [];

    const existingPet = await Pet.findById(id);
    if (!existingPet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    // Handle main image
    if (image && image.length > 0) {
      imagePath = image[0].path;
      if (existingPet.image) {
        await fsPromises
          .unlink(path.join(process.cwd(), existingPet.image))
          .catch(err => console.log("Main image delete error:", err));
      }
    } else {
      imagePath = existingPet.image;
    }

    // Handle additional images
    if (additionalImages && additionalImages.length > 0) {
      additionalImagesPath = additionalImages.map(file => file.path);

      // Delete old additional images
      await Promise.all(
        existingPet.additionalImages.map(async img => {
          await fsPromises
            .unlink(path.join(process.cwd(), img))
            .catch(err => console.log("Additional image delete error:", err));
        })
      );
    } else {
      additionalImagesPath = existingPet.additionalImages;
    }

    const updatedPet = await Pet.findByIdAndUpdate(
      id,
      {
        name,
        age,
        breed,
        color,
        description,
        imageLabel,
        category,
        image: imagePath,
        additionalImages: additionalImagesPath,
      },
      { new: true }
    );

    res.json({ message: "Pet updated", updatedPet });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

//DELETE

export const remove= async(req,res)=>{
  try {
    const {id} = req.params;

    const existingPet = await Pet.findById(id);
    if(!existingPet){
      return res.status(400).json({message:'Record does not exist'});
    }
    const deletedPet = await Pet.findByIdAndDelete(id);
    res.json({message: 'Deleted',deletedPet});
    
  } catch (error) {
    res.status(400).json(error);
    
  }
}

