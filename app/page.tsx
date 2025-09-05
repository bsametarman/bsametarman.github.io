import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-300 flex flex-col font-sans">
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-6 py-24 sm:py-24">

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Hello there! 👋
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            I am <span className="underline decoration-yellow-200 decoration-2 underline-offset-4 text-white">Bahadır Samet</span>, a software engineer with a passion for building things
            for the web. My main focus is creating modern, user-friendly applications
            and I enjoy solving complex problems to turn ideas into beautiful, functional products.
          </p>

          <section className="mt-20">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Experience
            </h2>

            <div className="mt-8 border-l-2 border-yellow-200 pl-6">
              <div className="mb-12">
                <p className="text-xl font-semibold text-white">
                  Flo Group
                </p>
                <p className="text-md text-yellow-200">
                  Software Engineer Intern
                </p>
                <hr className="my-4 border-gray-800" />
                <p className="text-gray-400 leading-relaxed">
                  Developed a complete, <span className="text-white">full-stack social media application similar to Instagram using a modern tech stack</span>. I was
                  responsible for both the backend API and the responsive frontend user interface.
                  <br /><span className="text-white">Backend</span>: Built a secure <span className="text-white">RESTful API</span> with <span className="text-white">Java and Spring Boot</span>. Implemented key features like user
                  authentication (<span className="text-white">JWT</span>), profile management, posting media (images/videos), following users, liking, and commenting.
                  Used PostgreSQL for the database.
                  <br /><span className="text-white">Frontend</span>: Created a modern and responsive user interface with <span className="text-white">React</span>. Developed pages for the home feed, user
                  profiles, and post creation. Used <span className="text-white">Chakra UI</span> for styling and React Context for managing user login state
                </p>
              </div>

              <div className="mb-12">
                <p className="text-xl font-semibold text-white">
                  Özgür Yazılım A.Ş.
                </p>
                <p className="text-md text-yellow-200">
                  Web Developer Intern
                </p>
                <hr className="my-4 border-gray-800" />
                <p className="text-gray-400 leading-relaxed">
                  Developed and implemented reusable <span className="text-white">UI</span> components for the main web application using <span className="text-white">React</span>, including Buttons, Time
                  Pickers, and Checkboxes, to improve development speed and maintain design consistency.
                  <br />Diagnosed and resolved a critical bug in the backend integration tests where an API, built with <span className="text-white">Java and Spring</span>, was
                  incorrectly returning ’unauthorized’ errors.
                  <br />Identified that the root cause of the test failure was an incorrect user data setup and corrected the logic to ensure reliable
                  test execution.
                  <br />Refactored existing frontend and backend code to enhance readability and maintainability.
                  <br />Actively used <span className="text-white">Git</span> for version control, creating branches for features/fixes and submitting Pull Requests (PRs) for code
                  review by senior team members
                </p>
              </div>
            </div>
          </section>

          <div className="mt-24">
            <Link
              href="/projects"
              className="inline-flex items-center gap-x-2 text-lg font-semibold text-black bg-yellow-400 hover:bg-yellow-500 transition-colors px-6 py-3 rounded-md"
            >
              View My Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </main>

      <footer className="max-w-3xl mx-auto px-6 pb-12 w-full">
        <div className="flex items-center justify-center gap-x-8 text-gray-500">
          <a
            href="https://github.com/bsametarman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href="https://linkedin.com/in/bsametarman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a
            href="mailto:bsametarman@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-7 h-7" />
          </a>
        </div>
      </footer>
    </div>
  );
}