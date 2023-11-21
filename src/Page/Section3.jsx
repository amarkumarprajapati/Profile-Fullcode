import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  easeInOut,
} from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import Details from "../Components/Details";
import { useScroll } from "framer-motion";

const Section3 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <div>
      <div className="headtag">
        <div className="head">
          <VisibilitySensor
            onChange={handleVisibilityChange}
            partialVisibility
            offset={{ bottom: 100 }}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1.5 }}
              className="headh1tag">
              {Details.section2}
            </motion.h1>
          </VisibilitySensor>
        </div>
        <div className="conat">
          <div className="text12">
            <VisibilitySensor
              onChange={handleVisibilityChange}
              partialVisibility
              offset={{ bottom: 100 }}>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 30,
                }}
                transition={{ duration: 1 }}
                className="h1text1">
                Motion Graphics.
              </motion.h1>
            </VisibilitySensor>
            <VisibilitySensor
              onChange={handleVisibilityChange}
              partialVisibility
              offset={{ bottom: 100 }}>
              <motion.p2
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 30,
                }}
                transition={{ duration: 2 }}
                className="p1text1">
                {Details.p1tag1}
              </motion.p2>
            </VisibilitySensor>
          </div>
          <div className="text15">
            <VisibilitySensor
              onChange={handleVisibilityChange}
              partialVisibility
              offset={{ bottom: 100 }}>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 30,
                }}
                transition={{ duration: 1 }}
                className="h1text1">
                Education.
              </motion.h1>
            </VisibilitySensor>
            <VisibilitySensor
              onChange={handleVisibilityChange}
              partialVisibility
              offset={{ bottom: 100 }}>
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
                offset={{ bottom: 100 }}>
                <motion.p2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ duration: 2 }}
                  className="p1text1">
                  From small teasers, to explainers, to full storytelling
                  experiences, I will help you move ideas around.
                </motion.p2>
              </VisibilitySensor>
            </VisibilitySensor>
          </div>
          <div></div>
        </div>
        <div className="conat">
          <div className="text14">
            <VisibilitySensor
              onChange={handleVisibilityChange}
              partialVisibility
              offset={{ bottom: 100 }}>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20,
                }}
                transition={{ duration: 2 }}
                className="h1text1">
                Webflow Development.
              </motion.h1>
            </VisibilitySensor>
            <VisibilitySensor
              onChange={handleVisibilityChange}
              partialVisibility
              offset={{ bottom: 100 }}>
              <motion.p2
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20,
                }}
                transition={{ duration: 2 }}
                className="p1text1">
                From small teasers, to explainers, to full storytelling
                experiences, I will help you move ideas around.
              </motion.p2>
            </VisibilitySensor>
          </div>
          <div className="text13">
            <VisibilitySensor
              onChange={handleVisibilityChange}
              partialVisibility
              offset={{ bottom: 100 }}>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20,
                }}
                transition={{ duration: 2 }}
                className="h1text1">
                Animated Interactions.
              </motion.h1>
            </VisibilitySensor>
            <VisibilitySensor
              onChange={handleVisibilityChange}
              partialVisibility
              offset={{ bottom: 100 }}>
              <motion.p2
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20,
                }}
                transition={{ duration: 2 }}
                className="p1text1">
                {Details.p1tag2}
              </motion.p2>
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
