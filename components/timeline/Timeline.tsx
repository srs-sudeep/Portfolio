import React from "react";
import Heading from "../Heading";
import Card from "./Card";

const Timeline = () => {
  const data = [
    {
      title: "Designed some web pages using HTML and CSS",
      subtitle: "2022 June",
      icon: "fa-solid fa-bezier-curve",
    },
    {
      title: "Learned JavaScript",
      subtitle: "2022 August",
      icon: "fa-brands fa-square-js",
    },
    {
      title: "NodeJS & ExpressJS",
      subtitle: "2022 September",
      icon: "fa-brands fa-node-js",
    },
    {
      title: "Learned MongoDB",
      subtitle: "2022 October",
      icon: "fa-solid fa-database",
    },
    {
      title: "Learned ReactJS & Golang",
      subtitle: "2022 December",
      icon: "fa-brands fa-react",
    },
    {
      title: "Learned Flutter & worked for Foss Overflow",
      subtitle: "2022 Feb.",
      icon: "fa-brands fa-react",
      link: "/tech-stack",
    },
    {
      title: "Launched Dev. Resources",
      subtitle: "2022 Feb.",
      icon: "fa-solid fa-folder-open",
      link: "https://web-dev-resources.notion.site/web-dev-resources/Web-Development-Resources-be1207bcc32e434481c1ce6e90756964",
    },
    {
      title: "Leaned NextJS",
      subtitle: "2022 March",
      icon: "fa-brands fa-neos",
    },
    {
      title: "Launched my v2 Portfolio",
      subtitle: "2022 April",
      icon: "fa-solid fa-laptop-code",
      link: "/",
    },
    {
      title: "Joined internship at Adhir",
      subtitle: "2022 April",
      icon: "fa-solid fa-handshake-simple",
      link: "https://www.linkedin.com/company/adhirinfo/mycompany/",
    },
    {
      title: "Built an full stack web app",
      subtitle: "2022 July",
      icon: "fa-brands fa-xing",
      link: "/project/xlinks",
    },
    {
      title: "Become MERN Stack Developer",
      subtitle: "2022 July",
      icon: "fa-solid fa-check-double",
      link: "/tech-stack",
    },
    {
      title: "Started Gigaweb Agency",
      subtitle: "2022 July",
      icon: "fa-solid fa-briefcase",
      link: "https://www.gigaweb.in/",
    },
    {
      title: "Worked on client projects",
      subtitle: "2022 Sept.",
      icon: "fa-solid fa-indian-rupee-sign",
      link: "https://www.gigaweb.in/work",
    },
    {
      title: "Personalized blog platform",
      subtitle: "2023 Jan.",
      icon: "fa-regular fa-pen-to-square",
      link: "/project/blogs-project",
    },
    {
      title: "Developed an API Service",
      subtitle: "2023 March",
      icon: "fa-solid fa-server",
      link: "/project/meta-magnet",
    },
    {
      title: "Sold digital products",
      subtitle: "2023 April",
      icon: "fa-solid fa-cart-plus",
      link: "https://abhidadhaniya.gumroad.com/",
    },
  ];
  return (
    <>
      <section className="psddm-greeter --test-mode --theme /usr/share/sddm/themes/delicious

y-10 sm:py-20">
        <Heading heading={"Proof of Work"} />
        <div className="py-10 sm:py-20">
          {data.reverse().map((item, index) => (
            // @ts-ignore
            <Card key={index} index={index} data={item} length={data.length} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Timeline;
