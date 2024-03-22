import Heading from "../Heading";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const animations = {
    photo: {
      initial: { opacity: 0, x: 20 },
      exit: { opacity: 0, x: 10, transition: { duration: 0.3, delay: 0.1 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2 } },
    },
    desc: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.1 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
    },
    expert: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.1 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.4 } },
    },
    p1: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.15 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.5 } },
    },
    p2: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.18 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.6 } },
    },
    p3: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3, delay: 0.21 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.7 } },
    },
  };
  return (
    <>
      <div className="py-20">
        <Heading heading="Who Am I?" />
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <motion.div
            variants={animations.photo}
            initial="initial"
            animate="animate"
            exit="exit"
            // className="my-10 lg:my-0 w-[80%] lg:w-[50rem]"
            className="my-10 lg:my-0"
          >
            <Image
              className="w-60 rounded-full"
              src="/pic.jpg"
              width={600}
              height={600}
              alt="Abhi Dadhaniya"
            />
          </motion.div>
          <div className="text-xl text-lightBluePrimary flex-1">
            <motion.p
              variants={animations.desc}
              initial="initial"
              animate="animate"
              exit="exit"
              className="my-2 leading-8"
            >
              I&#39;m Sudeep Ranjan Sahoo, currently pursuing my third year of
              Bachelor&#39;s in Computer Science at IIT Bhilai. With a strong
              foundation in web and app development, I&#39;ve immersed myself in
              diverse projects across multiple domains. My expertise spans
              various technologies including MERN stack, Angular, Next.js,
              Django, Node.js, PHP, alongside proficiency in databases like
              MongoDB, MySQL, GraphQL, and Firebase. Over the past two years,
              I&#39;ve delved into app development using Flutter and React
              Native, gaining valuable experience through my involvement with
              various startups. My journey has equipped me with a versatile
              skill set, enabling me to thrive in dynamic and challenging
              environments.
            </motion.p>
            <div className="mt-8 lg:mt-5 text-left">
              <motion.p
                variants={animations.expert}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mb-2"
              >
                Following are my expertise:
              </motion.p>
              <motion.p
                variants={animations.p1}
                initial="initial"
                animate="animate"
                exit="exit"
                className="pl-4 mt-1 flex flex-row items-start"
              >
                <i className="pt-2 mr-3 text-xs text-cyanPrimary fa-solid fa-diamond"></i>
                Proficient in web development using MERN stack, Angular, Next.js, Django, Node.js, and PHP.
              </motion.p>
              <motion.p
                variants={animations.p2}
                initial="initial"
                animate="animate"
                exit="exit"
                className="pl-4 mt-1 flex flex-row items-start"
              >
                <i className="pt-2 mr-3 text-xs text-cyanPrimary fa-solid fa-diamond"></i>
                Skilled in database management systems including MongoDB, MySQL, GraphQL, and Firebase.
              </motion.p>
              <motion.p
                variants={animations.p3}
                initial="initial"
                animate="animate"
                exit="exit"
                className="pl-4 mt-1 flex flex-row items-start"
              >
                <i className="pt-2 mr-3 text-xs text-cyanPrimary fa-solid fa-diamond"></i>
                Experienced in mobile app development with Flutter and React Native, having contributed to projects in diverse startup environments.
              </motion.p>
              <motion.p
                variants={animations.p3}
                initial="initial"
                animate="animate"
                exit="exit"
                className="pl-4 mt-1 flex flex-row items-start"
              >
                <i className="pt-2 mr-3 text-xs text-cyanPrimary fa-solid fa-diamond"></i>
                Seamless integration of e-commerce functionality to maximize
                online sales.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
