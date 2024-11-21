import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Services from "./services/page";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-2xl">Software Developer</span>
            <h1 className="h2">
              Hello I&apos;m
              <br />
              <span className="text-accent">Kaushal Rai</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {/* photo */}
              I&apos;m a passionate software developer with a strong background
              in computer science and a love for technology. I can help you
              build your next project with expertise and creativity.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download Resume</span>
                <FiDownload
                  className="text-xl
                "
                />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-14 h-14 border border-accent rounded-full flex justify-center items-center text-accent text-3xl hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <Services />
    </section>
  );
};

export default Home;
