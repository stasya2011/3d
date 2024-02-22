import { epam } from "../assets/images/index.ts";
import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  motion,
  nextjs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

import { IExperiences, IProject } from "../types";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },

  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences: IExperiences[] = [
  {
    title: "Frontend Developer",
    company_name: "EPAM | Minsk",
    icon: epam,
    iconBg: "#accbe1",
    date: "Sep 2021 - Jun 2022",
    points: [
      "Developing and maintaining web applications using React.js, Angular.js and GraphQL",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Writing unit tests using Jest and Jasmine.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "EPAM | Vilnius",
    icon: epam,
    iconBg: "#accbe1",
    date: "Jun 2022 - Dec 2023",
    points: [
      "Creating innovative features using React.js/TypeScript and Next.js.",
      "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
      "Redesigning pages for mobile, tablet, and desktop views, ensuring compatibility and appearance across different devices (verified using BrowserStack) with styles executed using .module.scss.",
      "Undertaking application optimization measures, including performance improvements (verified using Lighthouse)",
      "Implementing and configuring OneSignal for push notifications",
      "Identifying and resolving bugs",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Participating in daily and sprint meetings, including stand-ups, tech discussions, retrospectives, etc.",
      "Collaborating with team members to clarify project requirements.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/stasya2011",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/stasya-geleisha/",
  },
];

export const projects: IProject[] = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Task-calendar app",
    description:
      "The project utilizes a robust tech stack, featuring React for powerful front-end development, TypeScript for enhanced type safety and productivity, Redux Toolkit for efficient state management, Charts.js for data visualization, and Day.js for flexible date and time handling.",
    link: "https://github.com/stasya2011/timetable",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Movie flix",
    description:
      "The project leverages a modern tech stack, including React for building dynamic user interfaces, TypeScript for type safety and enhanced development experience, and Redux Toolkit for state management.",
    link: "https://github.com/stasya2011/movieFlix",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Business card",
    description:
      "The project was built with React, Next.js, and TypeScript, utilizing the Swiper library for sliders..",
    link: "https://github.com/stasya2011/business-card",
  },
  // {
  //   iconUrl: estate,
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description:
  //     "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate",
  // },
  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  // },
];
