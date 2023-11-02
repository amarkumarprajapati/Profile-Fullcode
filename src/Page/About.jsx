import React, { useState } from "react";
import { color, motion, useMotionValue, useTransform } from "framer-motion";

const About = () => {
  const handleOpenClick = () => {
    const pdfUrl = "Amar-Resume.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div>
      {/* first section */}

      <div className="conatiner4">
        <div className="hggvd">
          <motion.h1
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              duration: "0.5",
              delay: "0.5",
            }}
            className="jgvhvhd">
            Amar Kumar Prajapati{" "}
          </motion.h1>
          <motion.p
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              duration: "0.5",
              delay: "0.5",
            }}
            className="egdrg">
            To use my skills gained in the past few years to work as a motivated
            professional and make a valuable contribution to the organization.
            In the process, also get an opportunity to learn something
            productive.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            className="sgbf"
            transition={{
              duration: "0.5",
              delay: "0.5",
            }}
            onClick={handleOpenClick}>
            Download My CV
          </motion.button>
          <motion.img
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: "0.5",
              delay: "0.5",
            }}
            src="3.png"
            alt="img"
            className="jhsdbv"
          />
          <motion.img
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: "0.5",
              delay: "0.5",
            }}
            src="5.png"
            alt="img"
            className="jhvbdv"
          />
        </div>
      </div>
      <div>{/*  second section */}</div>
      <div className="backgroundimg">
        <div className="abouth1">
          <h1 className="abouth2">Know more about my expertise.</h1>
          <img className="imgss" src="5.jpg"></img>
        </div>
        <div className="textandptag">
          <div>
            <h1 className="colortext12">Motion Graphics.</h1>
            <p>
              From small teasers, to explainers, to full storytelling
              experiences, I will help you move ideas around. I put graphics,
              characters and brand environments in motion with specific
              communication goals in mind.
            </p>
          </div>
          <div>
            <h1 className="colortext12">Animated Interactions.</h1>
            <p>
              UX is only complete with engaging animations. These interfaces are
              animated according to their look, feel and purpose. Great for
              agencies who need to add value to their proposals or to boost
              their development results.
            </p>
          </div>
          <div>
            <h1 className="colortext12">Webflow Development.</h1>
            <p>
              Bringing visual design, animation and development together to
              uplift your digital presence. All that is brought into a platform
              full of possibilities for design, animations and, most of all,
              responsiveness. Let’s give it a try?
            </p>
          </div>
          <div>
            <h1 className="colortext12">Education.</h1>
            <p>
              Passing on knowledge is one of the things I love most in this
              industry. I can help you get started on your Motion Graphics
              adventure or, if you already have the basics checked, find the
              best way to develop your animation skills.
            </p>
          </div>
        </div>

        <div>
          <div className="backgound1"></div>
        </div>
      </div>

      {/* last second  */}
      <div className="connew">
        <div>
          <div className="lasth1tag">
            <h1>What you can also expect from me.</h1>
          </div>
          <div className="box1">
            <h1 className="h1tag2">Collaboration</h1>
            <p className="p2tag2">
              I work with you from the very beginning to the final tweaks.
            </p>
          </div>
          <div className="box2">
            <h1 className="h1tag2">Precision.</h1>
            <p className="p2tag2">
              A project’s success can be determined by small details.
            </p>
          </div>
          <div className="box3">
            <h1 className="h1tag2">Responsibility.</h1>
            <p className="p2tag2">
              While a design-driven vision is crucial, delivery is also a key
              factor.
            </p>
          </div>
          <div className="box4">
            <h1 className="h1tag2">Humour.</h1>
            <p className="p2tag2">
              Work with what you love and you’ll always have a smile on your
              face.
            </p>
          </div>
          <div className="box5">
            <h1 className="h1tag2">Organization.</h1>
            <p className="p2tag2">
              Planning all the steps is a key part of the design process.
            </p>
          </div>
        </div>
        <div className="catimg">
          <motion.img className="imag" src="1.png" />
        </div>
      </div>
      <div>
        {/* section */}
        <div className="nowork">
          <div className="clolcr"></div>
          <div className="ghb" id="Section2">
            <h1 className="sdht"> EXTRA CURRICULAR ACTIVITIES</h1>
            <div>
              <p className="srh">ACHIEVEMENTS</p>
            </div>
            {/* 1 */}
            <div>
              <motion.div whileHover={{ scale: 1.1 }} className="conatiner7">
                <div className="opacuty">
                  <h2 className="text6">PRESENTATION</h2>
                  <br />
                  <p className="text">
                    Awarded as winner in PRESENTATION (Crossing method for fine
                    ores) competition During UTKARSH at GCE, KEONJHAR.
                  </p>
                </div>
              </motion.div>
              {/* 2 */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                id="conta"
                className="conatiner8">
                <div className="opacuty">
                  <h2 className="text6">COUNTER STRIKE 1.6</h2>
                  <br />
                  <p className="text">
                    Awarded for COUNTER STRIKE 1.6 in Techno–Cultural fest
                    2018-2019 Technical Representative in GCE, KEONJHAR.
                  </p>
                </div>
              </motion.div>
              {/* 3 */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                id="conta"
                className="conatiner9">
                <div className="opacuty">
                  <h2 className="text6">UTKARSH,</h2>
                  <br />
                  <p className="text">
                    Event Coordinator during UTKARSH, techno-cultural fest of
                    GCE, KEONJHAR. Attended International Conference (IIESD) at
                    GCE, KEONJHAR.
                  </p>
                </div>
              </motion.div>
              {/* 4 */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                id="conta"
                className="conatiner10">
                <div className="opacuty">
                  <h2 className="text6">Technical</h2>
                  <br />
                  <p className="text">
                    Technical Head in (CMPT 2K19), GCE, KEONJHAR, ODISHA.
                  </p>
                </div>
              </motion.div>
              {/* 5 */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                id="conta"
                className="conatiner11">
                <div className="opacuty">
                  <h2 className="text6">National Conference</h2>
                  <br />
                  <p className="text">
                    Students coordinator of National Conference (CMPT2K19) at
                    Government college of Keonjhar, Odisha.
                  </p>
                </div>
              </motion.div>
              \{/* 6 */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                id="conta"
                className="conatiner12">
                <div className="opacuty">
                  <h2 className="text6">Home</h2>
                  <br />
                  <p className="text">
                    Sample text. Click to select the Text Element.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
