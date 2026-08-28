import { FaLinkedin, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaInstagram, FaPhone } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BiLogoGmail } from "react-icons/bi";

export const projects = [
  {
    title: "Task-It",
    description:
      "A website where you can login, create a to-do list with items tailored towards that list, built primarily using Next.js, MongoDB for database and tailwind for a beautiful UI.",
    imageUrl: "/task-it.png",
    demoUrl: "https://task-it-six.vercel.app",
    codeUrl: "https://github.com/elvisanthonyy/task-it",
  },

  {
    title: "Lyrich Church",
    description:
      "A website to display a church information, activities, partner, view gallery and to keep you updated on programs and series. It was made using NextJs, Mongodb, Node.JS and Tailwind CSS",
    imageUrl: "/lyricchurch.png",
    demoUrl: "https://lyricchurch.com.ng",
    codeUrl: "https://github.com/elvisanthonyy/lyricchurch",
  },
  {
    title: "BeatsByYehuda",
    description:
      "A portfolio website for BeatsByYehuda to display and listens to his beats, and Contact Information, Made using NextJs, Mongodb, Node.JS and Tailwind CSS",
    imageUrl: "/yehuda.png",
    demoUrl: "https://yehuda.vercel.app",
    codeUrl: "https://github.com/elvisanthonyy/yehuda",
  },
  {
    title: "Collabify",
    description:
      "A a demo website to allow creators and businesses sign up for a waitlist that would enable collaboration. This was built using React",
    imageUrl: "/collabify.png",
    demoUrl: "https://lyricchurch.com.ng",
    codeUrl: "https://elvisanthonyy.github.io/collabify",
  },

  {
    title: "Rift",
    description:
      "A Full-Stack application made with, Node.js, Express.js and MongoDB on the backend and React.js on the frontend. This website allows users to create account send messages, create, like and view posts.",
    imageUrl: "/rift.png",
    demoUrl: "https://rift-client.vercel.app",
    codeUrl: "https://github.com/elvisanthonyy/rift",
  },
  {
    title: "Max Gadgets",
    description:
      "A website to display a church information, activities, partner, view gallery and to keep you updated on programs and series. It was made using NextJs, Mongodb, Node.JS and Tailwind CSS",
    imageUrl: "/collabify",
    demoUrl: "https://lyricchurch.com.ng",
    codeUrl: "https://github.com/elvisanthonyy/lyricchurch",
  },
];

export const heroIcons = [
  {
    link: "",
    icon: FaLinkedin,
  },
  {
    link: "https://github.com/elvisanthonyy",
    icon: FiGithub,
  },
  {
    link: "https://www.behance.net/elvisanthony1",
    icon: FaBehance,
  },

  {
    link: "https://x.com/Elvizanthony",
    icon: FaXTwitter,
  },
];

export const contactItems = [
  {
    label: "Elvis Anthony",
    icon: FaLinkedin,
  },
  {
    label: "iam_elvizanthony",
    icon: FaInstagram,
  },
  {
    label: "+234 906 481 2779",
    icon: FaPhone,
  },
  {
    label: "Lagos, Nigeria",
    icon: HiLocationMarker,
  },
  {
    label: "info.elvisanthony@gmail.com",
    icon: BiLogoGmail,
  },
];
