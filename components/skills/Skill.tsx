// import Image from "next/image";
import Heading from "../Heading";
import CircularProgressBar from "./CircularProgressBar";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

// Logo Import
import Sass from "../../public/icons/Sass.svg";
import Github from "../../public/icons/Github.svg";
import TailwindCSS from "../../public/icons/TailwindCSS.svg";
import Figma from "../../public/icons/Figma.svg";
import Aws from "../../public/icons/Aws.svg";
import Googlecloud from "../../public/icons/Googlecloud.svg";
import Linux from "../../public/icons/Linux.svg";
const Skill = () => {
  const value = 60;
  const animations = {
    fullStack: {
      initial: { opacity: 0, y: -20 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
    },
    tool: {
      initial: { opacity: 0, y: -20 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.6 } },
    },
    design: {
      initial: { opacity: 0, y: -20 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.8 } },
    },
  };
  const languageData = [
    {
      name: "JavaScript",
      url: "Javascript",
    },
    {
      name: "TypeScript",
      url: "Typescript",
    },
    {
      name: "HTML",
      url: "Html",
    },
    {
      name: "CSS",
      url: "Css",
    },
    {
      name: "Python",
      url: "Python",
    },
    {
      name: "C",
      url: "C",
    },
    {
      name: "C++",
      url: "C++",
    },
    {
      name: "Dart",
      url: "Dart",
    },
    {
      name: "Golang",
      url: "Golang",
    },
    {
      name:"Bashscript",
      url:"Bashscript"
    },
    {
      name: "Appscript",
      url: "Appscript",
    },
    {
      name:"Latex",
      url:"Latex"
    }
  ];
  const skillsData = [
    {
      name: "ReactJS",
      url: "ReactJS",
    },
    {
      name: "NodeJS",
      url: "NodeJS",
    },
    {
      name: "ExpressJS",
      url: "ExpressJS",
    },
    {
      name: "Flutter",
      url: "Flutter",
    },
    {
      name: "React Native",
      url: "ReactNative",
    },
    {
      name: "Flask",
      url: "Flask",
    },
    {
      name: "PHP",
      url: "Php",
    },
    {
      name: "Angular",
      url: "Angular",
    },
    {
      name: "Django",
      url: "Django",
    },
    {
      name: "Vue",
      url: "Vue",
    },
    { name: "NextJS", url: "NextJS" },
    {
      name: "Fastapi",
      url: "Fastapi",
    },
    {
      name: "Svelte",
      url: "Svelte",
    },
  ];
  const Database=[
    {
      name: "MongoDB",
      url: "MongoDB",
    },
    {
      name: "Sqlite",
      url: "Sqlite",
    },
    {
      name: "MySQL",
      url: "Mysql",
    },
    {
      name: "PostgreSQL",
      url: "Postgresql",
    },
    {
      name:"GraphQL",
      url:"Graphql"
    }
  ]
  const toolData = [
    {
      name: "TailwindCSS",
      url: TailwindCSS,
    },
    {
      name: "SASS",
      url: Sass,
    },
    {
      name:"GITHUB",
      url:Github
    },
    {
      name:"AWS",
      url:Aws,
    },
    {
      name:"Google Cloud",
      url :Googlecloud
    },
    {
      name: "Figma",
      url: Figma,
    },
    {
      name:"Linux",
      url:Linux
    },
    {
      name: "Redux",
      url: "https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55",
    },
    {
      name: "Firebase",
      url: "https://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png",
    },
    {
      name: "Docker",
      url: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
    },
  ];
  return (
    <>
      <div className="py-20">
        <Heading heading={"Tech Stack"} />
        <div className="mt-16 max-w-md lg:max-w-none mx-auto w-full flex flex-col items-center lg:items-start justify-center lg:flex-row gap-10">
          <div className="w-full gap-4 flex flex-col items-center justify-center">
            <motion.h2
              variants={animations.fullStack}
              animate="animate"
              exit="exit"
              initial="initial"
              className="w-full py-4 lg:py-5 text-lg lg:text-2xl rounded-[4px] text-center bg-darkBluePrimary text-cyanPrimary"
            >
              LANGUAGES AND SCRIPTING
            </motion.h2>
            <div className="w-full grid gap-5 grid-cols-2 items-center justify-center">
              {languageData.map((skill, index) => (
                <CircularProgressBar
                  key={index + 1}
                  index={index}
                  url={skill.url}
                  name={skill.name}
                />
              ))}
            </div>
          </div>
          <div className="w-full gap-4 flex flex-col items-center justify-center">
            <motion.h2
              variants={animations.fullStack}
              animate="animate"
              exit="exit"
              initial="initial"
              className="w-full py-4 lg:py-5 text-lg lg:text-2xl rounded-[4px] text-center bg-darkBluePrimary text-cyanPrimary"
            >
              FRAMEWORKS
            </motion.h2>
            <div className="w-full grid gap-5 grid-cols-2 items-center justify-center">
              {skillsData.map((skill, index) => (
                <CircularProgressBar
                  key={index + 1}
                  index={index}
                  url={skill.url}
                  name={skill.name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 max-w-md lg:max-w-none mx-auto w-full flex flex-col items-center lg:items-start justify-center lg:flex-row gap-10">
          <div className="w-full gap-4 flex flex-col items-center justify-center">
            <motion.h2
              variants={animations.fullStack}
              animate="animate"
              exit="exit"
              initial="initial"
              className="w-full py-4 lg:py-5 text-lg lg:text-2xl rounded-[4px] text-center bg-darkBluePrimary text-cyanPrimary"
            >
              Database
            </motion.h2>
            <div className="w-full grid gap-5 grid-cols-2 items-center justify-center">
              {Database.map((skill, index) => (
                <CircularProgressBar
                  key={index + 1}
                  index={index}
                  url={skill.url}
                  name={skill.name}
                />
              ))}
            </div>
          </div>
          <div className="w-full flex flex-row items-start justify-center">
            <div className="w-full gap-4 flex flex-col items-center justify-center">
              <motion.h2
                variants={animations.tool}
                animate="animate"
                exit="exit"
                initial="initial"
                className="w-full py-4 lg:py-5 text-lg lg:text-2xl rounded-[4px] text-center bg-darkBluePrimary text-cyanPrimary"
              >
                Languages & Tools
              </motion.h2>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                {toolData.map((tool, index) => (
                  <SkillCard
                    name={tool.name}
                    index={index}
                    key={index}
                    url={tool.url}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
