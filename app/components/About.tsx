import React from 'react';
import { FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiPostgresql, SiMongodb, SiPytorch, SiOpencv, SiTailwindcss } from 'react-icons/si';

interface EducationItem {
  degree: string;
  year: string;
  institution: string;
  description: string;
}
interface Skill {
  name: string;
  level?: string;
  icon?: React.ComponentType<{ className?: string }>;
}
interface SkillCategory {
  title: string;
  skills: Skill[];
}

const About: React.FC = () => {
  const education: EducationItem[] = [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      year: "Aug 2023 - June 2027",
      institution: "Shiv Nadar University, Chennai",
      description: "CGPA: 9.06/10",
    },
    {
      degree: "XII",
      year: "April 2022 - May 2023",
      institution: "Lalaji Memorial Omega International School",
      description: "Percentage: 95.33%",
    },
    {
      degree: "X",
      year: "April 2020 - March 2021",
      institution: "Narayana Group of Schools",
      description: "93%",
    },
  ];

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Expert", icon: FaPython },
        { name: "C", level: "Advanced" },
        { name: "C++", level: "Advanced", icon: SiCplusplus },
        { name: "Java", level: "Expert", icon: FaJava },
        { name: "JavaScript", level: "Expert", icon: FaJs },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: "Expert", icon: FaHtml5 },
        { name: "CSS", level: "Advanced", icon: FaCss3Alt },
        { name: "ReactJS", level: "Advanced", icon: FaReact },
        { name: "TailwindCSS", level: "Expert", icon: SiTailwindcss },
        { name: "FastAPI", level: "Expert" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", level: "Expert", icon: SiMysql },
        { name: "PostgreSQL", level: "Advanced", icon: SiPostgresql },
        { name: "MongoDB", level: "Advanced", icon: SiMongodb },
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "PyTorch", level: "Intermediate", icon: SiPytorch },
        { name: "Scikit-learn", level: "Expert" },
        { name: "OpenCV", level: "Intermediate", icon: SiOpencv },
        { name: "LangChain", level: "Advanced" },
        { name: "Hugging Face", level: "Advanced" },
      ],
    },
    {
      title: "Specializations",
      skills: [
        { name: "Machine Learning" },
        { name: "Deep Learning" },
        { name: "Computer Vision" },
        { name: "Natural Language Processing" },
        { name: "Neural Networks" },
        { name: "Data Visualization" },
        { name: "Large Language Models" },
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12 text-white pb-5 sm:pb-0">
      {/* Header */}
      <header className="mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-300 mb-3 sm:mb-4">About Me</h1>
        <p className="max-w-3xl mx-auto text-violet-400 text-base sm:text-lg px-2">
          Get to know my journey, education, and expertise
        </p>
      </header>

      {/* FLEX: Profile Card + Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
        {/* Profile Card */}
        <div className="w-full lg:max-w-xs flex-shrink-0 mb-6 lg:mb-0">
          <div className="bg-gray-900 bg-opacity-60 rounded-xl p-4 sm:p-6 shadow-lg">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-violet-700 rounded-full flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl mx-auto mb-3 sm:mb-4">
              👤
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-center text-violet-300">Visalakshi VR</h2>
            <p className="text-center text-violet-400 mb-4 sm:mb-6 text-sm sm:text-base">AI ML Developer</p>
            <div className="flex justify-around">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-400">3rd</div>
                <div className="text-xs sm:text-sm text-violet-500 uppercase mt-1">Year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-400">5+</div>
                <div className="text-xs sm:text-sm text-violet-500 uppercase mt-1">Projects</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col space-y-8 sm:space-y-12">
          {/* Story */}
          <section className="bg-gray-900 bg-opacity-60 rounded-xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-semibold text-violet-300 mb-4 sm:mb-6">My Story</h2>
            <div className="space-y-4 sm:space-y-6 text-violet-400 leading-relaxed text-sm sm:text-base">
              <p>
                I'm a passionate AI/ML developer with a strong foundation in artificial intelligence and data science. My journey began in undergraduate studies, discovering machine learning and its ability to solve complex problems.
              </p>
              <p>
                Over the past 3 years, I have explored diverse areas in AI including computer vision and NLP, building solutions that create meaningful impact and keeping up with advancements.
              </p>
              <p>
                I am driven to turn complex data into actionable insights and build intelligent systems that learn and adapt.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Education Section */}
      <section className="bg-gray-900 bg-opacity-60 rounded-xl p-6 sm:p-8 shadow-lg mt-8 sm:mt-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-violet-300 mb-4 sm:mb-6">Education</h2>
        <div className="border-l-4 border-violet-500 pl-4 sm:pl-6 space-y-6 sm:space-y-8">
          {education.map(({ degree, year, institution, description }, i) => (
            <article key={i} className="relative">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-1 gap-1 sm:gap-4">
                <h3 className="text-lg sm:text-xl font-semibold text-white order-1">{degree}</h3>
                <time className="italic text-violet-400 text-sm sm:text-base order-2 sm:order-2 flex-shrink-0">{year}</time>
              </div>
              <p className="font-semibold text-violet-400 text-sm sm:text-base mb-1">{institution}</p>
              <p className="text-violet-400 text-sm sm:text-base">{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-900 bg-opacity-60 rounded-xl p-6 sm:p-8 shadow-lg mt-6 sm:mt-8 space-y-8 sm:space-y-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-violet-300 mb-4 sm:mb-6">Tech Stack</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories
            .filter(cat => cat.title !== "Specializations")
            .map(({ title, skills }, i) => (
              <div key={i}>
                <h3 className="text-xl sm:text-2xl font-semibold text-violet-400 mb-4 sm:mb-5">{title}</h3>
                <ul>
                  {skills.map(({ name, level, icon: Icon }, j) => (
                    <li
                      key={j}
                      className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        {Icon && <Icon className="text-violet-400 w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />}
                        <span className="text-violet-300 font-medium text-sm sm:text-base">{name}</span>
                      </div>
                      {level && (
                        <span className="hidden sm:inline-block rounded-full bg-violet-700 px-3 py-1 text-xs font-semibold tracking-wide text-violet-300">
                          {level}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </section>

      {/* Specializations */}
      <section className="bg-gray-900 bg-opacity-60 rounded-xl p-6 sm:p-8 shadow-lg mt-6 sm:mt-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-violet-300 mb-4 sm:mb-6">Specializations</h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skillCategories.find(cat => cat.title === "Specializations")?.skills.map(({ name }, i) => (
            <span
              key={i}
              className="select-none rounded-full bg-gradient-to-r from-violet-800 to-purple-800 px-3 sm:px-5 py-1.5 sm:py-2 font-semibold text-sm sm:text-base text-violet-200 shadow-sm transition-transform hover:scale-105"
            >
              {name}
            </span>
          ))}
        </div>
      </section>
    </section>
  );
};

export default About;
