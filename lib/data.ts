import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import powerpulse from "@/public/powerpulse.png";
import cinemania from "@/public/cinemania.png";
import mimino from "@/public/mimino.png";
import carhub from "@/public/carhub.png";
import promptopia from "@/public/promptopia.png";
import webstudio from "@/public/webstudio.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Service Advisor",
    location: "Kyiv, Ukraine",
    description:
      "Just in 6 months, I grew from a Service Advisor assistant to a full-time Service Advisor position. I showed highly quality customer service and received many good feedbacks from customers and coworkers alike.",
    icon: React.createElement(CgWorkAlt),
    // icon: React.createElement(LuGraduationCap),
    date: "2007 - 2010",
  },
  {
    title: "CEO, Team Lead",
    location: "Kyiv, Ukraine",
    description:
      "Founded and managed a 2200 sq ft business specializing in GM and Chrysler vehicle repair. Led a team of 5, overseeing sourcing, logistics, diagnostic software, and marketing to provide top-notch service for American cars in Kyiv.",
    icon: React.createElement(CgWorkAlt),
    date: "2010 - 2017",
  },
  {
    title: "CEO, Team Lead",
    location: "Kyiv, Ukraine",
    description:
      "Launched and managed an 8000 sq ft car service workshop, leading a team of 15 professionals. Improved efficiency, advertising, and staff training, equipped the service with special tools, and optimized workflow. Achieved a 4.9/5 Google rating, establishing the largest aftermarket service station in Ukraine specializing in GM and Chrysler cars.",
    // icon: React.createElement(FaReact),
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2022",
  },
  {
    title: "Full Stack Developer Training Program",
    location: "Canada (attended remotely from Ukraine)",
    description:
      "Over the span of my 11-month IT Academy program, I honed my skills in JavaScript, React.js, Node.js, HTML, and CSS, earning certification as a Full Stack Developer. This expertise equips me to craft applications featuring dynamic responsive designs and robust backend capabilities.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Full Stack Developer, Freelancer",
    location: "Victoria, BC",
    description:
      "Launched and managed an 8000 sq ft car service workshop, leading a team of 15 professionals. Improved efficiency, advertising, and staff training, equipped the service with special tools, and optimized workflow. Achieved a 4.9/5 Google rating, establishing the largest aftermarket service station in Ukraine specializing in GM and Chrysler cars.",
    icon: React.createElement(FaReact),
    date: "2023 - Now",
  },
] as const;

export const projectsData = [
  {
    title: "CarHub",
    description:
      "Next.js application with a responsive design for viewing cars, featuring rental pricing, and detailed characteristics.",
    tags: [
      "Next.js",
      "TypeScript",
      "React hooks",
      "Tailwind CSS",
      "post css",
      "autoprefixer",
    ],
    imageUrl: carhub,
    link: "https://auto-dealer-our2.vercel.app/",
  },
  {
    title: "Promptopia",
    description:
      "Next.js full-stack application, responsive design, Google authorization for seamless prompt sharing between users.",
    tags: [
      "Next.js",
      "React hooks",
      "Tailwind CSS",
      "mongodb",
      "mongoose",
      "oauth",
    ],
    imageUrl: promptopia,
    link: "https://promptopia-blush-gamma.vercel.app/",
  },
  {
    title: "Power Pulse",
    description:
      "React fitness app with authorization, animated exercise demos, activity diary, and daily calorie tracking.",
    tags: ["React", "Redux", "Node", "Express", "MongoDB"],
    imageUrl: powerpulse,
    link: "https://bob-ua.github.io/pj-react-777/",
  },
  {
    title: "Cinemania",
    description:
      "As a Team Lead and developer, I collaborated with others to build and deploy a JavaScript trailer hub. It incorporates responsive design and seamlessly interacts with APIs using Axios.",
    tags: ["JavaScript", "HTML", "CSS", "Parcel"],
    imageUrl: cinemania,
    link: "https://bob-ua.github.io/dream_team_Cinemania/",
  },
  {
    title: "MIMINO",
    description:
      "In my role as a Team Lead and developer, I worked with a team to create and launch a responsive four-page hotel complex website.",
    tags: ["JavaScript", "HTML", "CSS", "Parcel"],
    imageUrl: mimino,
    link: "https://bob-ua.github.io/dream_team/",
  },
  {
    title: "Web Studio",
    description:
      "In my role as a Team Lead and developer, I worked with a team to create and launch a responsive four-page hotel complex website.",
    tags: ["JavaScript", "HTML", "CSS", "Parcel"],
    imageUrl: webstudio,
    link: "https://bob-ua.github.io/goit-markup-hw-07/",
  },
] as const;

export const skillsData = [
  "HTML",
 	"CSS",
  "JavaScript",
  "TypeScript",
 	"React.js",
 	"Next.js",
 	"Node.js",
 	"Tailwind CSS",
 	"Redux",
 	"Express",
 	"MongoDB",
 	"Mongoose",

] as const;
