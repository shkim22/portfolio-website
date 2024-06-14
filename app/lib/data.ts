import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import populationImg from "@/public/Population.gif"
import instacartImg from "@/public/instacart.png"
import pawtyImg from "@/public/pawty.png"
import coffeeImg from "@/public/coffee.png"
import docuchatai from "@/public/docuchatai.png"

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
    title: "UBS AG" ,
    location: "Senior Data Scientist",
    description:
      "I'm now a full-stack Data Scientist working in the AI & Data Science team. My stack includes Python, R, SQL and Azure AI services.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Credit Suisse",
    location: "Data Scientist",
    description:
      "Once I graduated the TA program, I honed my data science craft at the Data and AI solutions team delivering bespoke solutions for clients ranging from the Trading Desk Quants, Internal Audit, and Wealth Management. A major highlight was my work on AI regulation to FINMA and other regulators.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2023",
  },
  {
    title: "Credit Suisse",
    location: "Summer Analyst -> Technology Analyst",
    description:
      "As a Summer Intern, I worked on mostly data analytics projects. I returned to CS full-time as a Technology Analyst where I gained expertise in Data Science in Product Control, Risk & Finance and Data Governance teams.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 Summer",
  },
  {
    title: "City of South Bend - Mayor Pete Buttigieg",
    location: "Summer Internship",
    description:
      "At the time, South Bend was a leading small city in technology and innovation, not limited to smart sewers with sensor data to anticipate floods. As a Summer Intern in the Innovation team, I worked on data analytics projects to improve the South Bend's existing processes.",
    icon: React.createElement(FaReact),
    date: "2015 Summer",
  },
  {
    title: "Samsung Engineering",
    location: "Summer Internship",
    description:
      "The Samsung Ammonia and Urea Fertilizer Plant bid was +$843mm, with a capacity of 2,100 tons/day. As a Summer Intern, I served as translator between Korean-English-Spanish for the Project Administrator. ",
    icon: React.createElement(FaReact),
    date: "2013 Summer",
  },


] as const;

export const projectsData = [
  {
    title: "Instacart Market Basket Analysis",
    description:
      "Discovered frequently purchased product pairings leveraging A-Priori, FP-Growth, and ECLAT algorithms for common association rules. 🍌+🥑+🍓 = 🫶",
    tags: ["Python", "R", "SQL", "Jupyter Notebook"],
    imageUrl: instacartImg,
    url: 'https://github.com/shkim22/instacart-market-basket/tree/main',
  },
  {
    title: "Do We Need More Babies to Save the Planet?",
    description:
      "A Study on Greenhouse Gas Emissions & Population Growth using Regression Analysis. Spoiler Alert: I love babies 👶",
    tags: ["R", "Python", "SQL"],
    imageUrl: populationImg,
    url: 'https://github.com/shkim22/greenhouse_study',
  },
  {
    title: "Global Coffee Production Visualization",
    description:
      "Visualization about Coffee Production Around the World. Personal favorite? ☕ Bolivian Gesha. ",
    tags: ["Tableau"],
    imageUrl: coffeeImg,
    url: 'https://public.tableau.com/app/profile/stephen.kim5545/viz/Coffee_16799361895120/Dashboard1',
  },
  {
    title: "DocuChat AI",
    description:
      "DocuChat AI: delve into a conversation with your favorite PDFs (books, manuals, research papers, scientific journals, etc)",
    tags: ["Python", "genAI", "ollama", "streamlit", "stripe api", "OAuth"],
    imageUrl: docuchatai,
    url: 'https://docuchatai.streamlit.app',
  },
] as const;

export const skillsData = [
  "Python",
  "SQL",
  "R",
  "Azure AI",
  "Data Science",
  "Visualization",
  "Analytics",
  "A/B Testing",
  "Machine Learning",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
] as const;
