import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
  
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
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
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Infosys SpringBoard",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "jan 2023 - june 2023",
        points: [
            "• Developed a User Group Creation application using MERN stack.",
            "Utilized technologies such as Redux, Axios, Shadcn UI, and React Hook  Form for seamless functionality.",
            "Designed and implemented user signup/login screens, group management screens, and one-to-one/group chat interfaces.",
            "Create a user-friendly search interface for quick and easy discovery of",
           "  user credentials with intuitive interfaces for group creation, settings",
           " management, and actions like renaming and leaving groups.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Oasis Infobyte",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2023- Feb 2023",
        points: [
            "Developing and maintaining web applications using HTML ,CSS annd JS.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
          
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Mitanshubad',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mitanshu-badgujar-25a14a202/',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: 'Study Notion Mega Ed tech project',
        description: 'StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content  StudyNotion provides: seamless and interactive learning experience for  students, making education more accessible and engaging.  It is a platform for instructors to showcase their expertise and connect with learners across the globe',
        link: 'https://stdn-hosting.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Discord Clone',
        description: 'Created a fully resposive discord clone using the Html 5 and tailind css for the styling of the website .',
        link: 'https://6501d968e3184c0f108f79bb--splendid-halva-617011.netlify.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Weather Application',
        description: 'Designed and built a fully responsive weather application using html css and javascript to get weather , live waether api is used in the appliction',
        link: 'https://6501ce63feef220a9ccedfb2--vermillion-tarsier-d576f8.netlify.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://social-media-frontend-azure-delta.vercel.app/login',
    },
   
];