import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-48 "
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "Turning ideas into scalable web solutions with powerful features and smooth experiences."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[78px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I’m Ravi, a passionate Full-Stack Developer with over 2 years of experience in crafting scalable and high-performance web applications. My passion lies in creating software that solves real-world problems and positively impacts people’s lives."
              }
            />
            <AnimatedBody
              text={
                "I specialize in both front-end and back-end development, utilizing modern technologies like React, Next.js, TypeScript, Node.js, and MongoDB to deliver impactful solutions."
              }
            />
            <AnimatedBody
              text={
                "At Worldsoft IT Solution, I’ve refined my skills in building web applications, designing robust databases, and deploying projects on AWS and Hostinger, focusing on performance optimization, user experience, and clean TypeScript code."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "At  Worldsoft IT Solution, I’ve refined my skills in building web applications, designing robust databases, and deploying projects on AWS and Hostinger, focusing on performance optimization, user experience, and clean TypeScript code."
              }
            />
          
            <AnimatedBody
              text={
                "Right now, I’m working on some exciting projects that I can’t wait to share with you. I’m always open to new opportunities and collaborations and am actively looking for new opportunities to grow and make an impact."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux Toolkit, React Testing Library, HTML5, Git/GitHub, Soket.io, NextAuth, Formik."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Backend Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Node, Express.js, Redis, TypeScript, EJS, JWT, Passport, Postmen, Soket.io, Restful-api, GraphQL."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Devops Toools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "AWS, Docker, CI/CD pipeline, Hostinger.  "
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Database"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "MongoDB, MySQL, PostgreSQL "
                }
              />
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default About;
