import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        }
    }
)
// module.exports = Category = mongoose.model('Category',CategorySchema);
export const Category = mongoose.model("Category", CategorySchema);