import s from "./ContactForm.module.css";
import { Container } from "react-bootstrap";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Notify } from "notiflix";
export default function ContactForm() {
  const form = useRef();
  const [userName, setUserName] = useState();
  const successMsg = `
      Your message has been sent. Thank you for writing to me! &#128522;
      Have a nice day!`;
  const errorMsg = `${userName}, something went wrong. Please, try again. `;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r1dzrf9",
        "template_u5osip8",
        form.current,
        "HQ0RXguxj31Iom4Pv"
      )
      .then(
        (result) => {
          console.log(result.text);
          Notify.success(successMsg, {
            closeButton: true,
            clickToClose: true,
          });
        },
        (error) => {
          console.log(error.text);
          Notify.warning(errorMsg, {
            closeButton: true,
            clickToClose: true,
            useFontAwesome: false,
            useIcon: false,
          });
        }
      );

    onHide();
    e.target.reset();
  };
  return (
    <section
      className={[s.contactsSection, "contactsSection"].join(" ")}
      id="contactForm"
    >
      <Container>
        <div className={s.contactForm}>
          <h2> Let's get in touch</h2>
          <p>
            Interested in hiring me for your project? You can fill in the
            contact form below or send me an email to{" "}
            <b>olesianazarenko.dev@gmail.com</b>
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            autoComplete="off"
            className={s.form}
          >
            <label className="form-label">Name*</label>
            <input
              type="text"
              className="form-control"
              name="user_name"
              minLength={3}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            />
            <label className="form-label">Email*</label>
            <input
              type="email"
              className="form-control"
              name="user_email"
              required
              minLength={6}
            />
            <label className="form-label">Message*</label>
            <textarea className="form-control" name="message" required />

            <input type="submit" className="btn-success btn" value="Send" />
          </form>
        </div>
      </Container>
    </section>
  );
}
