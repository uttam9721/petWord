import { Contact } from "../models/Contact.js";

export const handleContact = async (req, res) => {
  try {
    const { name, email, type, message } = req.body;

    // Validate input
    if (!name || !email || !type || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to database
    const newContact = new Contact({ name, email, type, message });
    await newContact.save();

    console.log("New Contact Message Saved:", { name, email, type, message });

    return res.status(200).json({ success: true, message: "Message received and saved!" });
  } catch (error) {
    console.error("Contact error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};
