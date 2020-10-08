import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import ApiKeys from "../../ApiKeys";

function Contact() {
  const onSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .sendForm("smtp_server", ApiKeys.TEMPLATE_ID, e.target, ApiKeys.USER_ID)
      .then(
        (result) => {
          alert("Message Sent, I'll get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occured, Plese try again", error.text);
        }
      );
  };

  return (
    <div className="Contactcontainer">
      <h1 className="Contactheader">Contact</h1>
      <div className="ContactContent">
        <form onSubmit={onSubmit}>
          <p>Your Email:</p>
          <input name="name" type="text" placeholder="Email:" />
          <p>Subject:</p>
          <input name="subject" type="text" placeholder="Subject:" />
          <p>Your Message:</p>
          <textarea name="message" type="text" placeholder="Your Message:" />
          <button>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
