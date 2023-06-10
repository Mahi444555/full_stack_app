import React, { useState } from "react";
import "./Contact.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/myform', values)
      .then(res => {
        console.log("submitted successfully");
        setValues({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
        toast.success("Form submitted successfully!");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact Us</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" className="user" placeholder="Name" value={values.name} onChange={handleChange} />
          <input type="number" name="phone" className="user" placeholder="Phone" value={values.phone} onChange={handleChange} />
          <input type="email" name="email" className="user" placeholder="Email" value={values.email} onChange={handleChange} />
          <textarea name="message" className="user" placeholder="Message" value={values.message} onChange={handleChange} />
          <input type="submit" value="Send" className="button" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
