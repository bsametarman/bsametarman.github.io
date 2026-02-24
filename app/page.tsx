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
            I am <span className="underline decoration-yellow-200 decoration-2 underline-offset-4 text-white">Bahadır Samet</span>. I am a motivated software engineer with experience in both web applications and system level programming. I enjoy building
            projects from start to finish, whether it is a backend service or a hardware integration. I am looking forward to apply my skills
            in a production environment, learn new technologies, and create solutions for real world problems.
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
                  I developed a, <span className="text-white">full stack social media application similar to instagram by using modern tech stack.</span>. I wrote the both backend
                  and the frontend.
                  <br /><span className="text-white">Backend</span>: I have build a secure <span className="text-white">RESTful API</span> with <span className="text-white">Java and Spring Boot</span>. I implemented features like user
                  authentication, profile management, posting media, following users, liking, and commenting.
                  I used PostgreSQL as the database.
                  <br /><span className="text-white">Frontend</span>: I have created a responsive user interface with <span className="text-white">React</span>. I wrote pages for the home feed, user profiles, and
                  post creation. I used <span className="text-white">Chakra UI</span> for page styling and React Context for managing users login state.
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
                  I developed and implemented ui components for a web application using <span className="text-white">React</span>. I wrote those components (buttons,
                  time pickers, checkboxes) to increase development speed and protect design in the all pages.
                  <br />I found and solved a critical bug in the integration tests. The api was returning incorrect unauthorized errors.
                  <br />IIdentified the cause of the test failure. It was an incorrect user data setup. I fixed the logic to ensure successful test
                  execution.
                  <br />I refactored existing frontend and backend code to enhance readability and maintainability.
                  <br />Actively used <span className="text-white">Git</span> for version control, created branches for features, fixes and submitted Pull Requests (PRs) for code
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