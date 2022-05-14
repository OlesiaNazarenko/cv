import { Modal } from "react-bootstrap";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Notify } from "notiflix";
import s from "./EmailModal.module.css";

export default function EmailModal({ onHide, show }) {
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
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            Let’s get in touch <span className={s.mainIcon}> &#9993; </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form ref={form} onSubmit={sendEmail} autoComplete="off">
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
            <div className={s.btnWrap}>
              <input
                type="button"
                className={[s.cancelBtn, "btn"].join(" ")}
                value="Cancel"
                onClick={onHide}
              />
              <input type="submit" className="btn-success btn" value="Send" />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
