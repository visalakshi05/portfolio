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
    <section className="max-w-7xl mx-auto px-4 py-12 text-white">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-violet-300 mb-4">About Me</h1>
        <p className="max-w-3xl mx-auto text-violet-400 text-lg">
          Get to know my journey, education, and expertise
        </p>
      </header>

      {/* FLEX: Profile Card + Main Content */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Profile Card */}
        <div className="w-full md:max-w-xs flex-shrink-0 mb-8 md:mb-0">
          <div className="bg-gray-900 bg-opacity-60 rounded-xl p-6 shadow-lg">
            <div className="w-36 h-36 bg-violet-700 rounded-full flex items-center justify-center text-6xl mx-auto mb-4">
              👤
            </div>
            <h2 className="text-2xl font-semibold text-center text-violet-300">Visalakshi VR</h2>
            <p className="text-center text-violet-400 mb-6">AI ML Developer</p>
            <div className="flex justify-around">
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-400">3rd</div>
                <div className="text-sm text-violet-500 uppercase mt-1">Year</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-400">5+</div>
                <div className="text-sm text-violet-500 uppercase mt-1">Projects</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col space-y-12">
          {/* Story */}
          <section className="bg-gray-900 bg-opacity-60 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-violet-300 mb-6">My Story</h2>
            <div className="space-y-6 text-violet-400 leading-relaxed">
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

      {/* Education Section outside flex grid, always full width */}
      <section className="bg-gray-900 bg-opacity-60 rounded-xl p-8 shadow-lg mt-12">
        <h2 className="text-3xl font-semibold text-violet-300 mb-6">Education</h2>
        <div className="border-l-4 border-violet-500 pl-6 space-y-8">
          {education.map(({ degree, year, institution, description }, i) => (
            <article key={i} className="relative">
              {/* Dot has been removed */}
              <div className="flex justify-between flex-wrap md:flex-nowrap mb-1">
                <h3 className="text-xl font-semibold">{degree}</h3>
                <time className="italic text-violet-400">{year}</time>
              </div>
              <p className="font-semibold text-violet-400">{institution}</p>
              <p className="text-violet-400">{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-900 bg-opacity-60 rounded-xl p-8 shadow-lg mt-5 space-y-10">
        <h2 className="text-3xl font-semibold text-violet-300 mb-6">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories
            .filter(cat => cat.title !== "Specializations")
            .map(({ title, skills }, i) => (
              <div key={i}>
                <h3 className="text-2xl font-semibold text-violet-400 mb-5">{title}</h3>
                <ul>
                  {skills.map(({ name, level, icon: Icon }, j) => (
                    <li
                      key={j}
                      className="mb-4 flex flex-wrap items-center justify-between gap-4"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        {Icon && <Icon className="text-violet-400 w-8 h-8" />}
                        <span className="text-violet-300 font-medium">{name}</span>
                      </div>
                      {level && (
                        <span className="rounded-full bg-violet-700 px-3 py-1 text-xs font-semibold tracking-wide text-violet-300">
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
      <section className="bg-gray-900 bg-opacity-60 rounded-xl p-8 shadow-lg mt-5">
        <h2 className="text-3xl font-semibold text-violet-300 mb-6">Specializations</h2>
        <div className="flex flex-wrap gap-3">
          {skillCategories.find(cat => cat.title === "Specializations")?.skills.map(({ name }, i) => (
            <span
              key={i}
              className="select-none rounded-full bg-gradient-to-r from-violet-800 to-purple-800 px-5 py-2 font-semibold text-base text-violet-200 shadow-sm transition-transform hover:scale-105"
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
