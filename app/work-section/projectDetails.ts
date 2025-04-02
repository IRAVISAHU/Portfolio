export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Lernify",
    description:
      "Lernify is a dynamic Learning Management System (LMS) project focused on web and LMG development. Offering a user-friendly interface and interactive learning experiences.",
    technologies: ["Next.JS", "Node", "Express","Typescript", "MongoDB", "Redux", "Redis", "Soket.io"],
  
    demo: "https://learnify-weld-three.vercel.app/",
    image: require(".//../../public/projects/learnify.png"),
    available: true,
  },
  {
    id: 1,
    name: "Satisfied Job",
    description:
      " A comprehensive job portal that links recruiters with job seekers, simplifying the job search and application process while enhancing recruitment efficiency.",
    technologies: ["Next.js", "Typescript", "Node",],
    demo: "https://satisfiedjob.com/",
    image: require(".//../../public/projects/satisfiedjob.png"),
    available: true,
  },
  {
    id: 2,
    name: "NewHub",
    description:
      "NewHub is a daily news platform offering real-time updates across categories with a clean, intuitive interface for a smooth user experience.",
    technologies: ["Node", "Express.JS", "EJSLJS"],
    
    image: require(".//../../public/projects/newshub.png"),
    available: true,
  },
  {
    id: 3,
    name: "JobNex",
    description:
      "A job portal that connects job seekers with employers, helping users find job opportunities or skilled candidates efficiently.",
    technologies: ["Next.JS", "Node", "Express.Js", "MongoDB", "Image Kit","Redux" ],
  
    image: require(".//../../public/projects/jobnex.png"),
    available: true,
  },

  
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
