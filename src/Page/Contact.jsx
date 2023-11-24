import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [inputs, setInputs] = useState({});
  const phoneNumber = "8908013842";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const generateMessage = () => {
    let message = "";
    for (const inputName in inputs) {
      message += `${inputName}: ${inputs[inputName]}\n`;
    }
    return message;
  };

  const sendMessage = () => {
    const message = generateMessage();
    const whatsappLink = `https://wa.me/${+918908013842}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <div className="contectsec">
        <div className="seconddiv">
          <div className="thirdvid">
            <motion.h1 className="h1lets">
              Let’s find solutions
              <br /> <span className="spantagcont">together?</span>
            </motion.h1>
            <motion.p className="p1tagcont">
              Fill in the form or just use my contacts below. ‍If you need to
              put a project on the move, let’s work on it!
            </motion.p>
            <h5 className="h4tag">Email - amarkumarprajapati@gmail.com</h5>
            <h5 className="h4tag">Phone - 8908013842</h5>
            <h5 className="h4tag">Location - banglore</h5>
          </div>

          {/* secondpart */}

          <div className="firstdiv">
            <form className="formclass">
              <h1 className="input12">Name</h1>
              <input
                type="text"
                name="Name"
                className="input"
                onChange={handleChange}
              />
            </form>
            <form className="formclass">
              <h1 className="input12">Email</h1>
              <input
                type="text"
                name="Email"
                className="input"
                onChange={handleChange}
              />
            </form>
            <form className="formclass">
              <h1 className="input12">Company</h1>
              <input
                type="text"
                name="Help"
                className="input"
                onChange={handleChange}
              />
            </form>
            <form className="formclass">
              <h1 className="input12">Location</h1>
              <input
                type="text"
                name="Timeframe"
                className="input"
                onChange={handleChange}
              />
            </form>
            <form className="formclass">
              <h1 className="input12">
                What would make you happy in this project?
              </h1>
              <input
                type="text"
                name="Happiness"
                className="input"
                onChange={handleChange}
              />
              <img
                src="whatsapp-logo-png-2263.png"
                alt="WhatsApp Logo"
                className="wtsaaplogo"
                onClick={sendMessage}
              />
            </form>
            <motion.button
              whileTap={{ scaleX: 0.8 }}
              className="contactbutton"
              onClick={sendMessage}>
              Contact Me
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
