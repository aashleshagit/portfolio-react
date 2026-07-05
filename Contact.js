import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uz3or68",
        "template_dr8nnwe",
        form.current,
        "M8nABn7lYJ8fkVUVN"
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");

          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message");

          console.log(error);
        }
      );
  };

  return (
    <div className="contact">

      <h1>Contact Me</h1>

      <p>Let's build something amazing together!</p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Write your message"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;