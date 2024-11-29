"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Designing and developing responsive, scalable, and high-performance websites tailored to your specific needs.",
    details:
      "We use modern web technologies like React, Next.js, and Node.js to build robust web applications.",
    href: "/web-development",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces with a strong focus on seamless user experience.",
    details:
      "Our designs prioritize user-centered design principles, ensuring every element enhances usability and engagement.",
    href: "/ui-ux-design",
  },
  {
    num: "03",
    title: "SEO",
    description:
      "Enhancing your digital presence through strategic SEO practices to improve search engine rankings and increase organic traffic.",
    details:
      "Our comprehensive SEO strategies include keyword optimization, on-page SEO, and backlinking to boost your search rankings.",
    href: "/seo",
  },
  {
    num: "04",
    title: "Data Annotation",
    description:
      "Providing precise and accurate data labeling services to support AI training and machine learning solutions.",
    details:
      "We offer high-quality data labeling and annotation services for computer vision, natural language processing, and more.",
    href: "/data-annotation",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleExpand = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#box",
        start: "top 15%",
        end: "bottom bottom",
        pin: "#leftblock",
        scrub: true,
        markers: true,
      });
    });
    return () => ctx.revert();
  });

  return (
    <section
      id="services"
      className="min-h-[80vh] flex flex-col justify-center py-6 xl:py-0 "
    >
      <div
        className="container mx-auto pt-20 pb-8 xl:flex gap-20 border-t border-gray-700 border-b"
        id="box"
      >
        <div
          className="flex flex-col xl:w-[40%] xl:gap-12 xl:text-left text-center w-full gap-3 mb-12 "
          id="leftblock"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
            }}
            className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2 xl:mt-10"
          >
            My Services
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 0.6, ease: "easeOut" },
            }}
            className="text-sm md:text-lg text-white/70 mb-5 w-full "
          >
            As a full-stack developer, I apply modern strategies, clean design,
            and adaptable visuals, carefully tailored to meet the unique needs
            and dynamic trends of today&apos;s market.
          </motion.h2>
        </div>
        <div className="xl:w-[60%]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.8, duration: 0.6, ease: "easeOut" },
            }}
            className="grid grid-cols-1  gap-[30px]"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-1 flex-col justify-center gap-4 group cursor-pointer xl:h-[100vh]"
                onClick={() => toggleExpand(index)}
              >
                {/* Top Section */}
                <div className="w-full flex justify-between items-center mb-2">
                  <div className="text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[32px] h-[32px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-md" />
                  </Link>
                </div>
                {/* Service Title */}
                <h2 className="text-[28px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* Service Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.2 + index * 0.2, duration: 0.5 },
                  }}
                  className="text-white/60"
                >
                  {service.description}
                </motion.p>

                {/* Expandable Content */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: activeService === index ? 1 : 0,
                    height: activeService === index ? "auto" : 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-white/80 mt-3">{service.details}</p>
                </motion.div>

                {/* Bottom Border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: 1,
                    transition: { delay: 0.3 + index * 0.2, duration: 0.4 },
                  }}
                  className="border-b border-white/20 w-full origin-left"
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
