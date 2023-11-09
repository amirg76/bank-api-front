import "./ContectUs.css";
// import sgMail from "@sendgrid/mail";
import { useState } from "react";
// import dotenv from "dotenv";
// dotenv.config();
// const sendGridAPI = process.env.SEND_GRID_API;
const ContectUs = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    phone: "",
    name: "",
    msg: "",
  });
  // send email
  // const sendEmail = () => {
  //   sgMail.setApiKey(sendGridAPI);
  //   const msg = {
  //     to: "amirg76@gmail.com", // Change to your recipient
  //     from: inputValues.email, // Change to your verified sender
  //     phone: inputValues.phone,
  //     name: inputValues.name,
  //     msg: inputValues.msg,
  //   };
  //   sgMail
  //     .send(msg)
  //     .then(() => {
  //       console.log("Email sent");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  //handle inputs
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div className="container-contect">
      <div className="contact-box">
        <div className="left-contect"></div>
        <div className="right-contect">
          <h2>צור קשר</h2>
          <input
            type="text"
            name="name"
            className="field-contect"
            placeholder="שם ומשפחה"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            className="field-contect"
            placeholder="אימייל"
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="phone"
            className="field-contect"
            placeholder="טלפון"
            onChange={handleInputChange}
          />
          <textarea
            name="msg"
            placeholder="הודעה"
            className="field-contect"
            onChange={handleInputChange}
          ></textarea>
          <button className="btn-contect">שלח</button>
        </div>
      </div>
    </div>
  );
};

export default ContectUs;
