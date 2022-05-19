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
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          Notify.success(successMsg, {
            clickToClose: true,
            timeout: 4000,
          });
        },
        (error) => {
          console.log(error.text);
          Notify.warning(errorMsg, {
            closeButton: true,
            useFontAwesome: false,
            useIcon: false,
            timeout: 4000,
          });
        }
      );

    e.target.reset();
  };
  return (
    <section
      className={[s.contactsSection, "contactsSection"].join(" ")}
      id="contactForm"
    >
      <Container>
        <div className={s.contactForm}>
          <h2> Let&#39;s get in touch</h2>
          <p>
            Interested in hiring me&#63; You can fill in the contact form below
            or send me an email to{" "}
            <b>
              <a
                className={s.mailLink}
                href="mailto:olesianazarenko.dev@gmail.com"
              >
                olesianazarenko&#46;dev&#64;gmail&#46;com
              </a>
            </b>
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            autoComplete="off"
            className={s.form}
          >
            <label className="form-label">Name&#42;</label>
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
            <label className="form-label">Email&#42;</label>
            <input
              type="email"
              className="form-control"
              name="user_email"
              required
              minLength={6}
            />
            <label className="form-label">Message&#42;</label>
            <textarea className="form-control" name="message" required />

            <input type="submit" className="btn-success btn" value="Send" />
          </form>
        </div>
      </Container>
    </section>
  );
}
