import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Server,
  FileType,
  FileJson,
  Database,
  Cloud,
  Flame,
  Zap,
  Code,
  FileCode,
  PenTool,
  GitBranch,
  AlertCircle,
  Lock,
} from "lucide-react";

const projects = [
  {
    name: "TaskFlow",
    description:
      "A Jira-inspired project management tool allowing users to create accounts, manage projects, and track tasks through workflow stages.",
    url: "https://taskflow-project.com",
    available: true,
  },
  {
    name: "CloudStack",
    description:
      "A comprehensive AWS-based solution integrating EC2, S3, and RDS MySQL for cloud applications.",
    url: "https://cloudstack-demo.com",
    available: true,
  },
  {
    name: "League Stats",
    description:
      "A dynamic website leveraging the Riot Games API to fetch and display user statistics by summoner name and tag ID for various game modes.",
    url: "https://league-stats-tracker.com",
    available: true,
  },
  {
    name: "3D Sofa Configurator",
    description:
      "A modular 3D product configurator for sofas, showcasing advanced visualization and customization capabilities. (Project done for current employer)",
    available: false,
  },
  {
    name: "LocalRide",
    description:
      "An Uber-like mobile application for local taxi services, featuring separate apps for clients and drivers. Built with Java and Firebase Realtime Database.",
    available: false,
    gitAvailable: true,
  },
];

export default function Component() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const skillIcons = {
    "Node.js": Server,
    React: Server,
    TypeScript: FileType,
    JavaScript: FileJson,
    SQL: Database,
    "AWS (EC2, RDS, S3)": Cloud,
    Firebase: Flame,
    "Blitz.js": Zap,
    "C# .NET": Code,
    "Python (basic)": FileCode,
    "3D Visualization": PenTool,
    Git: GitBranch,
  };
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = -80; // Adjust this value to account for the fixed header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = "smooth";

    // Clean up the style when the component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 overflow-hidden">
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          background: "linear-gradient(to bottom, #F7F8F8, #ACBB78)",
          y: backgroundY,
          opacity,
        }}
      />
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-end space-x-6">
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("experience");
                }}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills");
                }}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-6 pt-10 md:pt-24 pb-12 relative z-10">
        <section
          id="about"
          className="min-h-[80vh] flex items-center justify-center"
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="min-w-[150px] w-48 h-48 object-contain rounded overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-8">
                <img
                  src="/photo.JPEG"
                  alt="Stef Adrian"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="tex-2xl md:text-4xl font-bold mb-1: md:mb-2">
                  Stef Adrian
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 mb-2 md:mb-4">
                  Full Stack Developer
                </h2>
                <p className="text-sm md:text-md mb-2 md:mb-6">
                  Passionate programmer with 4.5 years of experience in Node.js
                  and frontend development. Fast learner and easily adaptable to
                  new technologies.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href="https://github.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://facebook.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://instagram.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-12">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold">Full Stack Developer</h3>
              <p className="text-gray-600">2022 - Present</p>
              <p className="mt-2">
                Working on a Blitz.js app for 3D furniture viewing and
                configuration. Utilizing both frontend and backend skills,
                including S3 integration, and Babylon.js
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <p className="text-gray-600">2020 - 2022</p>
              <p className="mt-2">
                Worked on aftermarket car parts projects using React,
                TypeScript, and C# .NET
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold">Intern</h3>
              <p className="text-gray-600">2019</p>
              <p className="mt-2">
                Participated in a workshop internship, gaining hands-on
                experience in web development
              </p>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {Object.entries(skillIcons).map(([skill, Icon]) => (
              <div
                key={skill}
                className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center"
              >
                <Icon size={24} className="mb-2 text-[#ACBB78]" />
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
                <div>
                  {project.available ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      View Project
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  ) : project.gitAvailable ? (
                    <button
                      onClick={() =>
                        alert(
                          "Please contact me for access to the private repository."
                        )
                      }
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      Request Git Access
                      <Lock size={16} className="ml-1" />
                    </button>
                  ) : (
                    <span className="text-gray-500 flex items-center">
                      Not Available
                      <AlertCircle size={16} className="ml-1" />
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 text-center">
              Feel free to reach out to me for any opportunities or
              collaborations.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <a
                href="mailto:john.doe@example.com"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <Mail className="mr-2" size={20} />
                stef.vasile.adrian@gmail.com
              </a>
              <p className="flex items-center text-gray-600">
                <MapPin className="mr-2" size={20} />
                Sibiu/Mures, Romania
              </p>
            </div>
          </motion.div>
        </section>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-[#ACBB78] text-white rounded-lg hover:[#ACBB78] transition-colors shadow-lg hover:shadow-xl"
          >
            <Download className="mr-2" size={20} />
            Download CV
          </a>
        </motion.div>
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Stef Adrian. All rights reserved.</p>
        </div>
      </footer>
      <ScrollIndicator />
    </div>
  );
}
