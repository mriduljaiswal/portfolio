"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Briefcase, Building, Users } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import GradientText from "./ui/GradientText";

interface Experience {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  dateRange: string;
  hoverInfo: string;
  icon: JSX.Element;
  logoPath?: string;
  textPath?: string;
  hasLogo: boolean;
  hasText: boolean;
}

const WorkHistory = () => {
  const [animateCards, setAnimateCards] = useState(false);
  const [activeExperience, setActiveExperience] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      type: "education",
      title: "UPES",
      subtitle: "BACHELORS OF TECHNOLOGY",
      description: "Computer Science",
      dateRange: "2018 - 2022",
      hoverInfo:
        "Graduated with a B.Tech in Computer Science. Focused on distributed systems and low-level programming.",
      icon: <GraduationCap className="h-6 w-6 text-purple-400" />,
      logoPath: "./img/UPES Logo.png",
      textPath: "./img/UPES Text.png",
      hasLogo: true,
      hasText: true,
    },
    {
      id: 2,
      type: "internship",
      title: "Samsung Internship",
      subtitle: "INTERNSHIP",
      description: "Backend / DevOps",
      dateRange: "01/2022 - 05/2022",
      hoverInfo:
        "Built CI/CD pipelines and automated API testing workflows using Jenkins and Docker during my internship.",
      icon: <Briefcase className="h-6 w-6 text-blue-400" />,
      textPath: "./img/Samsung.png",
      hasLogo: false,
      hasText: true,
    },
    {
      id: 3,
      type: "job",
      title: "Samsung",
      subtitle: "SOFTWARE ENGINEER",
      description: "Core OS / Cloud and Backend",
      dateRange: "06/2022 - 07/2025",
      hoverInfo:
        "Worked on Android Core OS & Cloud backend integration. Optimized VoWiFi engine and built adaptive audio modules for flagship devices.",
      icon: <Building className="h-6 w-6 text-green-400" />,
      textPath: "./img/Samsung.png",
      hasLogo: false,
      hasText: true,
    },
    {
      id: 4,
      type: "job",
      title: "SentinelOne",
      subtitle: "SENIOR SOFTWARE ENGINEER",
      description: "FullStack",
      dateRange: "07/2025 - current",
      hoverInfo:
        "Leading full-stack feature development for SentinelOne’s platform. Built high-scale load testing infra and GenAI-based monitoring.",
      icon: <Users className="h-6 w-6 text-purple-400" />,
      logoPath: "./img/SNEW_BIG.png",
      hasLogo: true,
      hasText: false,
    },
  ];

  return (
    <section
      id="work-history"
      className="min-h-screen bg-dark-bg transition-colors duration-300 py-20 pb-96"
      style={{ scrollMarginTop: "4rem" }}
    >
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GradientText
                animationSpeed={15}
                showBorder={false}
                fontWeight={700}
              >
                Experience
              </GradientText>
            </motion.h2>
            <p className="text-sm text-gray-400 max-w-3xl mx-auto uppercase font-bold tracking-wide">
              The positions I have worked in my career so far
            </p>
          </div>

          {/* Ladder Layout */}
          <motion.div
            className="relative w-full max-w-none mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onViewportEnter={() => setTimeout(() => setAnimateCards(true), 800)}
          >
            {/* Timeline Line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 opacity-40"
              style={{
                top: "0",
                bottom: "0",
                background:
                  "linear-gradient(to bottom, transparent 0%, #a855f7 15%, #3b82f6 45%, #10b981 70%, #f59e0b 83%, transparent 100%)",
              }}
            />

            <div className="space-y-12">
              {experiences
                .slice()
                .reverse()
                .map((experience, index) => (
                  <motion.div
                    key={experience.id}
                    className="relative flex items-center"
                    onMouseEnter={() => setActiveExperience(experience.id)}
                    onMouseLeave={() => setActiveExperience(null)}
                    initial={{ opacity: 0, y: 80 }}
                    animate={
                      animateCards
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                  >
                    {index % 2 === 0 ? (
                      <div className="flex justify-end pr-8 w-1/2">
                        <div className="w-full max-w-md">
                          <ExperienceCard experience={experience} />
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-start pl-8 w-1/2 ml-auto">
                        <div className="w-full max-w-md">
                          <ExperienceCard experience={experience} />
                        </div>
                      </div>
                    )}
                    <AnimatePresence>
                      {activeExperience === experience.id && (
                        <>
                          {/* Connector line between card and hover info */}
                          <div
                            className={`absolute top-1/2 -translate-y-1/2 h-[2px] w-10 bg-gradient-to-r from-purple-500/70 to-transparent
          ${
            index % 2 === 0
              ? "left-[calc(50%+0.25rem)]"
              : "right-[calc(50%+0.25rem)] rotate-180"
          }`}
                          />

                          {/* Hover info box */}
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: index % 2 === 0 ? 50 : -50,
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className={`absolute z-30 w-[270px] md:w-[300px] bg-dark-surface/80 border border-dark-border rounded-2xl p-4 text-gray-200 backdrop-blur-md shadow-xl 
          top-[12%] -translate-y-1/2
          ${
            index % 2 === 0
              ? "left-[calc(50%+11rem)]"
              : "right-[calc(50%+11rem)]"
          }
        `}
                          >
                            <h3 className="text-base font-semibold text-purple-400 mb-2">
                              {experience.title}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                              {experience.hoverInfo}
                            </p>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>

                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-dark-bg shadow-lg z-10" />
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <motion.div className="relative h-full min-h-[160px]" whileHover={{ y: -8 }}>
    <div className="relative h-full rounded-2xl border-2 border-dark-border p-2 md:rounded-3xl md:p-3">
      <GlowingEffect spread={40} glow proximity={60} inactiveZone={0.01} />
      <div className="relative flex h-full flex-col justify-between gap-4 rounded-xl p-4 md:p-5 backdrop-blur-sm bg-dark-surface/50">
        <div className="flex flex-1 gap-6">
          <div className="flex-1 flex items-center justify-center">
            {(experience.hasLogo || experience.hasText) && (
              <div className="flex items-center gap-2 h-12 md:h-14">
                {experience.hasLogo && experience.logoPath && (
                  <img
                    src={experience.logoPath}
                    alt={`${experience.title} Logo`}
                    className={`object-contain ${
                      experience.title === "SentinelOne"
                        ? "w-28 h-12 md:w-36 md:h-16 scale-110 brightness-125"
                        : "w-10 h-10 md:w-12 md:h-12"
                    }`}
                  />
                )}
                {experience.hasText && experience.textPath && (
                  <img
                    src={experience.textPath}
                    alt={`${experience.title} Text`}
                    className={`object-contain ${
                      experience.title === "Samsung"
                        ? "h-5 md:h-6"
                        : "h-6 md:h-8"
                    }`}
                    style={{
                      filter:
                        experience.title === "UPES"
                          ? "invert(1) brightness(2) contrast(2)"
                          : "none",
                    }}
                  />
                )}
              </div>
            )}
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-3">
            <h4 className="font-sans text-sm font-bold text-secondary-400 md:text-base">
              {experience.subtitle}
            </h4>
            <p className="font-sans text-xs text-dark-text-secondary md:text-sm leading-relaxed">
              {experience.description}
            </p>
            <div className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-md text-sm font-medium w-fit">
              {experience.dateRange}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default WorkHistory;
