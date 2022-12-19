import React from "react";
import { useFormik } from "formik";

const Contact = () => {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Jane"
            onChange={handleChange("firstName")}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            onChange={handleChange("lastName")}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            onChange={handleChange("e-mail")}
          />
        </div>
        <div>
          <label htmlFor="Message">Message</label>

          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            onChange={handleChange("message")}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
