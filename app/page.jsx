"use client";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Services from "./services/page";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between  pt-48 pb-14">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <div className="text-2xl text-accent mb-4">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Data Analyst",
                  "UI/UX Designer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </div>

            <h1 className="h2 mb-4">
              Hello I&apos;m
              <br />
              <span className="text-accent">Kaushal Rai</span>
            </h1>
            <p className="max-w-[500px] mb-6 text-white/80">
              {/* photo */}
              I&apos;m a passionate software developer with a strong background
              in computer science and a love for technology. I can help you
              build your next project with expertise and creativity.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <Button
                variant="outline"
                size="md"
                className="uppercase flex items-center gap-2"
              >
                <span className="text-sm">Download Resume</span>
                <FiDownload
                  className="text-xl
                "
                />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-2xl hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          {/* <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div> */}
        </div>
      </div>
      <Stats />
      <Services />
    </section>
  );
};

export default Home;
