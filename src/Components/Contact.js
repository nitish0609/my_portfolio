import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("your_service_id", "your_template_id", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        from_number: "9967957406",
        to_email: "nitishpandey234@gmail.com",
      })
      .then(
        function (response) {
          alert("Message sent successfully!");
          console.log("SUCCESS", response);
          setFormData({ name: "", email: "", message: "" });
        },
        function (error) {
          alert("Failed to send the message. Please try again later.");
          console.log("FAILED", error);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Me</h2>

      <p className="text-lg text-gray-600">
        Feel free to reach out to me if you have any questions or inquiries. I'd
        love to hear from you!
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
