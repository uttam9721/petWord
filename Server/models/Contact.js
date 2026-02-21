// import mongoose from "mongoose";

// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   type: String,
//   message: String,
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model("Contact", contactSchema);

import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"], // optional email validation
  },
  // This field corresponds to your dropdown (Buy a Pet, Donate a Pet)
  type: {
    type: String,
    required: [true, "Type is required"],
    enum: ["Buy a Pet", "Donate a Pet"], // restrict to dropdown options
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export model only once
export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
