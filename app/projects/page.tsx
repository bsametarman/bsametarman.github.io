import { Github, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "RateWatch - ratewatch.live",
        githubLink: "https://github.com/bsametarman/RateWatch-Backend",
        description:
            "RateWatch is a full-featured, cloud-native application designed to provide users with real-time currency exchange rate information. It's built on a modern, event-driven microservices architecture.",
        tags: ["C#", ".NET", "Microservice", "Kafka", "Redis", "Elasticsearch", "React", "TypeScript", "MUI", "CI/CD", "Kubernetes"],
    },
    {
        title: "Instagram Clone",
        githubLink: "https://github.com/bsametarman/instagram-clone-frontend",
        description:
            "Devloped a complete, full-stack social media application similar to Instagram using a modern tech stack. Built a secure RESTful API with Java and Spring Boot for backend. Created a modern and responsive user interface with React.",
        tags: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT"],
    },
    {
        title: "urlmol.icu - URL Shortener",
        link: "https://urlmol.icu",
        description:
            "Developed a full-stack link shortener application from scratch, featuring a Spring Boot RESTful API backend and a responsive React frontend.",
        tags: ["Java", "Spring Boot", "React", "Supabase", "Railway", "Docker"],
    },
    {
        title: " Laboratory Management System",
        githubLink: "https://github.com/bsametarman/Laboratory-Report-App",
        description:
            "Developed web application that helps laborants to track laboratory chores. Used Java, Spring Boot for backend, React for frontend and PostgreSQL for database.",
        tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
    },
    {
        title: "Smart-Notes (AI-Powered Note-Taking App)",
        githubLink: "https://github.com/bsametarman/smart-notes",
        description:
            "Built note taking app with integrated Hugging Face AI models to provide users with automatic note summarization and smart category suggestions.",
        tags: ["Next.js", "Supabase", "Tailwind", "Hugging Face"],
    },
    {
        title: "Gym Management System",
        githubLink: "https://github.com/bsametarman/Gym-Management-System",
        description:
            "Developed a gym management system. Users can purchase, extend, or cancel their gym memberships. Implemented an automated system that generates and emails a unique QR code to members upon purchase for secure, touchless gym access.",
        tags: ["C#", "ASP.NET MVC", "SQLServer", "Bootstrap"],
    },
    {
        title: "Taboo Game",
        githubLink: "https://github.com/bsametarman/taboo-game",
        description:
            "Developed mobile version of taboo game with flutter.",
        tags: ["Dart", "Flutter", "Android"],
    },
    {
        title: "Titanic Survival Prediction",
        githubLink: "https://github.com/bsametarman/titanic-survival-prediction",
        description:
            "Used machine learning to predict which Titanic passengers would survive. Compared different algorithms and improved model accuracy through data cleaning.",
        tags: ["Python", "Kaggle", "Colab"],
    },
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-black text-gray-300 flex flex-col font-sans">
            <main className="flex-grow">
                <div className="max-w-3xl mx-auto px-6 py-24 sm:py-24">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                        My Projects
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-gray-400">
                        Here are some of the things I've been working on.
                    </p>

                    <div className="mt-16 space-y-12">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="bg-zinc-900 border border-yellow-200 rounded-lg p-6"
                            >
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-semibold text-white">
                                        {project.title}
                                    </h3>
                                    <a
                                        href={project.githubLink || project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-x-2 text-sm text-yellow-200 hover:text-yellow-300 transition-colors"
                                    >
                                        {project.githubLink ? "Github" : "Go to site"}
                                        <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>

                                <p className="mt-4 text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-yellow-200 text-black text-xs font-medium px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}