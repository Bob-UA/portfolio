"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">Born and raised in Ukraine</span>, I
        returned from the army in 2005 and embarked on a{" "}
        <span className="font-medium">diverse career journey</span>. Starting as
        a <span className="font-medium">self-employed individual</span>, I
        transitioned to <span className="font-medium">Customer Service</span> at
        a<span className="font-medium">Cadillac Dealership</span> in 2007. In
        2010, I took the{" "}
        <span className="font-medium">entrepreneurial leap</span> and
        established my own successful{" "}
        <span className="font-medium">mechanic shop</span>, which grew to become
        the <span className="font-medium"></span>largest in the region,
        specializing in the{" "}
        <span className="font-medium">North American GM autogroup</span>. During
        this time, I honed my leadership skills, serving as a
        <span className="font-medium"> CEO, Team Lead</span>, and effectively
        managing operations.
      </p>
      <p className="mb-3">
        {" "}
        In 2022, facing the challenges of war, my family and I decided to
        immigrate to Canada in search of a more stable future. This pivotal
        moment led me to redirect my career towards the dynamic field of IT.
        Over 11 months of intensive courses, I acquired expertise as a{" "}
        <span className="font-medium">Full Stack Developer</span>, blending my
        leadership experience with hands-on technical skills.{" "}
      </p>
      <p>
        When I'm not coding, I cherish moments with my wife and daughter. I
        enjoy outdoor activities like{" "}
        <span className="font-medium">hiking</span> and{" "}
        <span className="font-medium">fishing</span>, and I also appreciate
        spending time
        <span className="font-medium"> watching movies</span>. My favorite part
        of programming is the{" "}
        <span className="font-medium">problem-solving aspect</span>. I love the
        feeling of finally figuring out a solution to a problem. My core stack
        includes{" "}
        <span className="font-medium">
          JavaScript, React, Next.js, Node.js, Redux, HTML, and CSS
        </span>
        . I am also familiar with{" "}
        <span className="font-medium">TypeScript</span> and{" "}
        <span className="font-medium">Tailwind CSS</span>. I am always eager to
        learn new technologies. Currently, I am seeking a full-time position as
        a <span className="font-medium">software developer</span>.
      </p>
    </motion.section>
  );
}
