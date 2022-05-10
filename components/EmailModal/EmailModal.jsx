import { Modal } from "react-bootstrap";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Notiflix from "notiflix";
import s from "./EmailModal.module.css";
Notiflix.Notify.init({
  width: "fit-content",
  position: "left-bottom",
  distance: "10px",
  opacity: 1,
  borderRadius: "5px",
  rtl: false,
  timeout: 3000,
  backOverlay: false,
  backOverlayColor: "rgba(0,0,0,0.5)",
  plainText: true,
  showOnlyTheLastOne: false,
  clickToClose: true,
  pauseOnHover: true,
  ID: "NotiflixNotify",
  className: "notiflix-notify",
  zindex: 4001,
  fontFamily: "Quicksand",
  fontSize: "13px",
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: "fade",
  closeButton: false,
  useIcon: true,
  useFontAwesome: false,
  fontAwesomeIconStyle: "basic",
  fontAwesomeIconSize: "34px",
  success: {
    background: "#f6e0e0",
    textColor: "#4c4545",
    childClassName: "notiflix-notify-success",
    notiflixIconColor: "rgba(0,0,0,0.2)",
    fontAwesomeClassName: "fas fa-check-circle",
    fontAwesomeIconColor: "rgba(0,0,0,0.2)",
    backOverlayColor: "rgba(50,198,130,0.2)",
  },
  failure: {
    background: "#f6e0e0",
    textColor: "#0c0c0c",
    childClassName: "notiflix-notify-failure",
    notiflixIconColor: "rgba(0,0,0,0.2)",
    fontAwesomeClassName: "fas fa-times-circle",
    fontAwesomeIconColor: "rgba(0,0,0,0.2)",
    backOverlayColor: "rgba(255,85,73,0.2)",
  },
});
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
        "service_r1dzrf9",
        "template_u5osip8",
        form.current,
        "HQ0RXguxj31Iom4Pv"
      )
      .then(
        (result) => {
          console.log(result.text);
          Notiflix.Notify.success(successMsg);
        },
        (error) => {
          console.log(error.text);
          Notiflix.Notify.failure(errorMsg);
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
