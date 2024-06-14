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
    location: "New York, NY",
    description:
      "I'm now a full-stack Data Scientist working in the AI & Data Science team. My stack includes Python, R, SQL and Azure AI services.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Credit Suisse Securities",
    location: "New York, NY",
    description:
      "I re-joined CS as a Technology Analyst, which was a 2-year rotational program in which I gained experience working on Risk & Finance and the AI Solutions teams. Once I graduated the TA program, I worked at the Data and AI solutions team.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2023",
  },
  {
    title: "Credit Suisse Securities",
    location: "New York, NY",
    description:
      "As a Summer Intern, I worked on mostly data analytics projects. I received a return offer to start full-time at CS starting in 2017.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 Summer",
  },
  {
    title: "City of South Bend - Mayor Pete Buttigieg`s Office",
    location: "South Bend, IN",
    description:
      "As a Summer Intern in the Innovation team, I worked on data analytics projects to improve the South Bend's existing processes.",
    icon: React.createElement(FaReact),
    date: "2015 Summer",
  },
  {
    title: "Samsung Engineering",
    location: "Santa Cruz, Bolivia",
    description:
      "As a Summer Intern, I served as translator between Korean-English-Spanish for the Project Administrator of the Urea and Ammonia Fertilizer Plant in Bolivia. This project bid was at +$843mm, with a capacity of 2,100 tons/day.",
    icon: React.createElement(FaReact),
    date: "2013 Summer",
  },


] as const;

export const projectsData = [
  {
    title: "Instacart Market Basket Analysis",
    description:
      "Leveraged A-Priori, FP-Growth, and ECLAT algorithms for common association rules.",
    tags: ["Python", "R", "SQL", "Jupyter Notebook"],
    imageUrl: instacartImg,
    url: 'https://github.com/shkim22/instacart-market-basket/tree/main',
  },
  {
    title: "Do We Need More Babies to Save the Planet?",
    description:
      "A Study on Greenhouse Gas Emissions & Population Growth using Regression Analysis.",
    tags: ["R", "Python", "SQL"],
    imageUrl: populationImg,
    url: 'https://github.com/shkim22/greenhouse_study',
  },
  {
    title: "Global Coffee Production Visualization",
    description:
      "Visualization about Coffee Production Around the World",
    tags: ["Tableau"],
    imageUrl: coffeeImg,
    url: 'https://public.tableau.com/app/profile/stephen.kim5545/viz/Coffee_16799361895120/Dashboard1',
  },
  {
    title: "DocuChat AI",
    description:
      "PDF chat web application",
    tags: ["Python", "LLM", "ollama", "streamlit"],
    imageUrl: pawtyImg,
    url: 'https://www.docuchatai.streamlit.app/',
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
