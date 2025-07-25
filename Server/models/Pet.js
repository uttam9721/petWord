
import mongoose from "mongoose";

const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        breed: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        imageLabel: {   // ✅ corrected spelling
            type: String,
        },
        additionalImages: [
            {
                type: String,
            },
        ],
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
        },
    },
    {
        timestamps: true,
    }
);

export const Pet = mongoose.model("Pet", PetSchema);
