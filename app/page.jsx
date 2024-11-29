"use client";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import Services from "./services/page";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Preloader from "@/components/Preloader";
import StairTransition from "@/components/StairTransition";
import { useState, useEffect } from "react";

const Home = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step === 0) {
      const preloaderTimeout = setTimeout(() => {
        setStep(1);
      }, 2000);
      return () => clearTimeout(preloaderTimeout);
    }
  }, [step]);

  return (
    <section className="h-full relative px-44">
      {step === 0 && <Preloader />}

      {step === 1 && (
        <>
          <StairTransition />
          {/* <div className="inset-0 absolute ">
            <Image
              src="/assets/hero.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              priority
              className="z-[-1] w-full h-full "
            />
          </div> */}

          <div className="container mx-auto h-full ">
            <div className="flex flex-col xl:flex-row items-center justify-between pt-40 pb-14">
              {/* text */}
              <div className="text-center xl:text-left order-2 xl:order-none">
                <div className="text-2xl text-[#00ff99] mb-4 ">
                  <Typewriter
                    words={["Full Stack Developer", "Data Analyst"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={3500}
                  />
                </div>

                <motion.h1
                  className="h2 mb-4 "
                  initial={{ x: "-95%", opacity: 0.1 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  Hello I&apos;m
                  <br />
                  <motion.span
                    className="text-accent "
                    initial={{ opacity: 0 }} // Start with opacity 0 (faded)
                    animate={{ opacity: 1 }} // Transition to opacity 1 (solid)
                    transition={{ delay: 1.5, duration: 1 }} // Delay until the first animation is done
                  >
                    Kaushal Rai
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="max-w-[500px] mb-6 text-white/80"
                  initial={{ opacity: 0 }} // Start with opacity 0 (faded)
                  animate={{ opacity: 1 }} // Transition to opacity 1 (solid)
                  transition={{ delay: 2.5, duration: 1 }} // Delay until the name animation is done
                  style={{
                    height: "auto", // Set fixed height to prevent shifting
                    minHeight: "130px",
                    overflow: "", // Ensure no overflow of content
                  }}
                >
                  <Typewriter
                    words={[
                      "I’m a Full Stack developer who’s all about turning ideas into reality.With a drive to push boundaries in tech, I’m here to help you build something awesome—let’s make it happen!",
                    ]}
                    loop={false} // Disable looping
                    cursor // Show cursor
                    cursorStyle="|" // Set cursor style
                    typeSpeed={33} // Faster typing speed
                    deleteSpeed={0} // No deletion after typing
                    delaySpeed={60000} // Delay before typing starts
                  />
                </motion.p>

                {/* button and socials */}
                <div className="flex flex-col xl:flex-row items-center gap-6">
                  <Button
                    variant="outline"
                    size="md"
                    className="uppercase flex items-center gap-2"
                  >
                    <span className="text-sm">Download Resume</span>
                    <FiDownload className="text-xl" />
                  </Button>
                  <div className="mb-8 xl:mb-0">
                    <Social
                      containerStyles="flex gap-6"
                      iconStyles="w-12 h-12 border-2 border-accent rounded-full flex justify-center items-center text-accent text-2xl hover:bg-accent hover:text-primary hover:transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Stats />
          </div>
        </>
      )}
      {/* Services Section */}
      <div id="services" className="services-section scroll-snap-align-start">
        <Services />
      </div>
    </section>
  );
};

export default Home;
