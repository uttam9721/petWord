import React, { useState } from "react";

const Contact = () => {
  // match backend model exactly
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Buy a Pet", // default to first option
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Send to backend
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Thank you for reaching out! 🐾");
        setFormData({ name: "", email: "", type: "Buy a Pet", message: "" });
      } else {
        alert("❌ " + (data.error || "Something went wrong"));
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Server error, please try again later.");
    }
  };

  return (
    <div className="bg-green-200 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Contact PetWorld 🐶🐾
        </h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Buy or Donate */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              I want to
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
            >
              <option value="Buy a Pet">Buy a Pet 🐕</option>
              <option value="Donate a Pet">Donate a Pet 🐾</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              placeholder="Write your message here..."
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
