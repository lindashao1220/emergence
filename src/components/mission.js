"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Mission() {
  return (
    <div id="mission" style={screenWrapper}>
      <div style={container}>
        {cards.map((card, i) => (
          <Card key={card.title} i={i} {...card} />
        ))}
      </div>
    </div>
  );
}

function Card({ title, content, hueA, hueB, i }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      {/* SVG Splash Background */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 450"
        preserveAspectRatio="none"
        style={splash}
      >
        <defs>
          <linearGradient id={`grad-${i}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={hue(hueA)} />
            <stop offset="100%" stopColor={hue(hueB)} />
          </linearGradient>
        </defs>
        <path
          d="M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"
          fill={`url(#grad-${i})`}
        />
      </svg>

      <motion.div
        style={card}
        custom={isMobile}
        variants={cardVariants}
        className="card relative z-10"
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="text-sm leading-relaxed overflow-y-auto pr-2 scrollbar-hide text-black h-full w-full">
          {content}
        </div>
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
    rotate: 0,
  },
  onscreen: (isMobile) => ({
    y: 10,
    // Reduce rotation on mobile to avoid overflow
    // Reduce rotation on desktop to accommodate wider cards without excessive vertical shift
    rotate: isMobile ? -2 : -4, 
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  }),
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const screenWrapper = {
  backgroundColor: "black",
  minHeight: "100vh",
  width: "100%",
  overflow: "hidden", 
};

const container = {
  margin: "160px auto 100px auto",
  maxWidth: 1200, // Increased to 1200
  width: "90%",
  backgroundColor: "transparent",
};

const cardContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -60,
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
};

const card = {
  width: "90%",
  maxWidth: 1000, // Increased from 700 to 1000
  height: 430,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
  padding: "40px 20px",
  color: "#000",
};

/**
 * ==============   Data   ================
 */

const cards = [
  {
    title: "WHY?",
    content: (
      <>
        <p>
          As technology advances, its inner workings become increasingly
          difficult to comprehend. Our artworks do more than facilitate in the
          understanding of the technology; they are made to inspire and spark
          dialogue which enables reflection on potential opportunities and
          issues of technologies in our digital society.
        </p>
      </>
    ),
    hueA: 340,
    hueB: 10,
  },
  {
    title: "HOW?",
    content: (
      <>
        <p className="mb-2">
          We bring artists and engineers together in Emergence Delft, an
          interdisciplinary research and development team consisting of students
          from the TU Delft and nearby art schools like the Royal Academy of Art
          in The Hague. Through this structure, we explore the untapped
          potential in the intersection of their fields.
        </p>
        <p className="mb-2">
          For a semester, we voluntarily commit part- or fulltime to our Dream
          Team. The New Media Project adopts a mission-driven focus, following
          the traditional Dream Team approach, while the Platform Project is
          taking a curiosity-driven focus. The Operations department forms the
          backbone of the Dream Team, while the Management department provides
          oversight and guidance to the rest of the team.
        </p>
        <p>
          To test and expand our knowledge we are in close contact with
          established artists, institutes, and/or professionals.
        </p>
      </>
    ),
    hueA: 205,
    hueB: 245,
  },
  {
    title: "WHAT?",
    content: (
      <>
        <p className="mb-2">We are dedicated to create new media art.</p>
        <p className="mb-2">
          We pursue this through two projects: the Platform Project and the New
          Media Project. Each project serves as a communication form for certain
          elements of a complex technology, This gives the people the opportunity to reflect on it. In addition to the two projects, we document findings, methods, and theories encountered during our
          research in our Public Knowledge Bank.
        </p>
        <p>
          To expand our reach we showcase our projects at our own events and we
          participate in relevant competitions and exhibitions.
        </p>
      </>
    ),
    hueA: 60,
    hueB: 90,
  },
];
