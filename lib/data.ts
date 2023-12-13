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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
