import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Terminal, Server, Database, Code, Cpu, Network } from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderServices = () => (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400">Services</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {[
          {
            icon: <Code className="h-8 w-8 text-blue-400" />,
            title: "CI/CD Implementation",
            description: "Setup and optimization of continuous integration and deployment pipelines using industry-leading tools and best practices."
          },
          {
            icon: <Cpu className="h-8 w-8 text-blue-400" />,
            title: "Infrastructure Automation",
            description: "Development of infrastructure as code solutions using Terraform, Ansible, and other modern automation tools."
          },
          {
            icon: <Network className="h-8 w-8 text-blue-400" />,
            title: "Cloud Architecture",
            description: "Design and implementation of scalable, secure cloud infrastructure on AWS, Azure, or GCP."
          },
          {
            icon: <Server className="h-8 w-8 text-blue-400" />,
            title: "Monitoring Solutions",
            description: "Implementation of comprehensive monitoring and alerting systems using Prometheus, Grafana, and ELK stack."
          }
        ].map((service, index) => (
          <div 
            key={index}
            className="group relative rounded-2xl border border-zinc-700/50 p-6 hover:bg-blue-500/5 transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-zinc-200 mb-2">{service.title}</h3>
            <p className="text-zinc-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );

  const renderBlog = () => (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400">Blog</h2>
      </div>
      <div className="space-y-8">
        {[
          {
            title: "The Future of DevOps: AI and Automation",
            date: "March 15, 2024",
            summary: "Exploring how artificial intelligence is revolutionizing DevOps practices and automation strategies.",
            readTime: "5 min read",
            tags: ["DevOps", "AI", "Automation"]
          },
          {
            title: "Kubernetes Best Practices for 2024",
            date: "March 10, 2024",
            summary: "A comprehensive guide to implementing Kubernetes in production environments with modern best practices.",
            readTime: "8 min read",
            tags: ["Kubernetes", "Container", "DevOps"]
          },
          {
            title: "Securing Your CI/CD Pipeline",
            date: "March 5, 2024",
            summary: "Essential security practices for maintaining robust and secure continuous integration and deployment pipelines.",
            readTime: "6 min read",
            tags: ["Security", "CI/CD", "DevOps"]
          }
        ].map((post, index) => (
          <div 
            key={index}
            className="group relative border-b border-zinc-700/50 pb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm text-blue-400">{post.date}</span>
              <span className="text-sm text-zinc-500">·</span>
              <span className="text-sm text-zinc-500">{post.readTime}</span>
            </div>
            <h3 className="text-xl font-semibold text-zinc-200 mb-2 group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-zinc-400 mb-4">{post.summary}</p>
            <div className="flex gap-2">
              {post.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderContact = () => (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400">Contact</h2>
      </div>
      <div className="max-w-lg">
        <p className="text-zinc-400 mb-8">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to connect or discuss potential collaboration.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-900 to-black text-zinc-200">
      {/* Custom cursor */}
      <div 
        className={`fixed w-4 h-4 rounded-full pointer-events-none z-50 transition-transform duration-200 mix-blend-difference ${
          isHovered ? 'scale-[4] bg-blue-400' : 'scale-1 bg-blue-400'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      <div className="max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left column */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-zinc-100 sm:text-6xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                DevOps Engineer
              </h1>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-0.5 w-12 bg-blue-500/50"></div>
                <h2 className="text-lg font-medium tracking-tight text-zinc-400 sm:text-xl">
                  BCA Student & Cloud Infrastructure Specialist
                </h2>
              </div>
              <p className="mt-8 max-w-xs text-base text-zinc-400 leading-relaxed">
                Transforming development workflows and infrastructure management through automation, scalability, and security.
              </p>
              
              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Terminal className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-zinc-400 group-hover:text-blue-400 transition-colors">DevOps</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Server className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-zinc-400 group-hover:text-blue-400 transition-colors">Cloud</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Database className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-zinc-400 group-hover:text-blue-400 transition-colors">Infrastructure</span>
                </div>
              </div>

              <nav className="nav hidden lg:block" aria-label="In-page navigation">
                <ul className="mt-16 w-max">
                  {[
                    ['About', 'about'],
                    ['Experience', 'experience'],
                    ['Projects', 'projects'],
                    ['Services', 'services'],
                    ['Blog', 'blog'],
                    ['Contact', 'contact'],
                  ].map(([label, page]) => (
                    <li key={label}>
                      <button 
                        onClick={() => setCurrentPage(page)}
                        className={`group flex items-center py-3 ${currentPage === page ? 'text-blue-400' : ''}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <span className="nav-indicator mr-4 h-px w-8 transition-all" />
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-500 transition-colors">
                          {label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <ul className="ml-1 mt-8 flex items-center gap-6" aria-label="Social media">
              <li className="flex">
                <a 
                  href="https://github.com" 
                  className="group flex text-sm font-medium p-2 hover:bg-blue-500/10 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Github className="h-5 w-5 text-zinc-500 transition group-hover:text-blue-400" />
                </a>
              </li>
              <li className="flex">
                <a 
                  href="https://linkedin.com" 
                  className="group flex text-sm font-medium p-2 hover:bg-blue-500/10 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Linkedin className="h-5 w-5 text-zinc-500 transition group-hover:text-blue-400" />
                </a>
              </li>
              <li className="flex">
                <a 
                  href="mailto:your.email@example.com" 
                  className="group flex text-sm font-medium p-2 hover:bg-blue-500/10 rounded-lg transition-colors"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Mail className="h-5 w-5 text-zinc-500 transition group-hover:text-blue-400" />
                </a>
              </li>
            </ul>
          </header>

          {/* Right column */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {currentPage === 'about' && (
              <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400">About</h2>
                </div>
                <div>
                  <p className="mb-4 text-zinc-400 leading-relaxed">
                    As a dedicated BCA student specializing in DevOps, I bring a unique perspective to bridging the gap between development and operations. My expertise lies in designing and implementing robust CI/CD pipelines, managing cloud infrastructure, and ensuring system reliability through automated processes.
                  </p>
                  <p className="mb-4 text-zinc-400 leading-relaxed">
                    With a strong foundation in cloud technologies and infrastructure automation, I focus on creating scalable solutions that enhance development workflows and operational efficiency. My approach combines technical expertise with a deep understanding of business needs to deliver optimal results.
                  </p>
                </div>
              </section>
            )}

            {currentPage === 'experience' && (
              <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400">Experience</h2>
                </div>
                <div>
                  {[
                    {
                      title: "Cloud Infrastructure Intern",
                      company: "Tech Solutions Ltd",
                      date: "2023 - Present",
                      description: "Led the implementation of infrastructure as code using Terraform, reducing provisioning time by 60%. Orchestrated container deployments with Kubernetes, improving application scalability and reliability. Implemented comprehensive monitoring solutions using Prometheus and Grafana."
                    },
                    {
                      title: "DevOps Project Lead",
                      company: "University Tech Club",
                      date: "2022 - 2023",
                      description: "Spearheaded the adoption of containerization using Docker, resulting in consistent development environments across teams. Implemented automated CI/CD pipelines with GitHub Actions, reducing deployment time by 75%. Mentored team members in DevOps best practices and modern tooling."
                    }
                  ].map((job, index) => (
                    <div 
                      key={index} 
                      className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-blue-500 sm:col-span-2">
                        {job.date}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-zinc-200">
                          <div>
                            <a 
                              href="#" 
                              className="inline-flex items-center font-medium leading-tight text-zinc-200 hover:text-blue-400 focus-visible:text-blue-400 group/link text-base"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>{job.title} · {job.company}</span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-zinc-400">{job.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {currentPage === 'projects' && (
              <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400">Projects</h2>
                </div>
                <div>
                  {[
                    {
                      title: "Enterprise Cloud Migration Framework",
                      description: "Architected and implemented a comprehensive framework for migrating legacy applications to cloud infrastructure, featuring automated assessment, planning, and execution phases. Reduced migration time by 40% and eliminated common migration risks through standardized processes.",
                      link: "#",
                      tech: ["AWS", "Terraform", "Docker", "Python"]
                    },
                    {
                      title: "Automated CI/CD Pipeline Platform",
                      description: "Developed a scalable CI/CD platform supporting multiple programming languages and deployment targets. Implemented advanced features including automated testing, security scanning, and deployment rollbacks. Achieved 99.9% deployment success rate.",
                      link: "#",
                      tech: ["Jenkins", "Kubernetes", "GitHub Actions", "ArgoCD"]
                    },
                    {
                      title: "Infrastructure Monitoring Suite",
                      description: "Built a comprehensive monitoring solution providing real-time insights into cloud infrastructure and application performance. Implemented predictive alerting using machine learning algorithms, reducing incident response time by 60%.",
                      link: "#",
                      tech: ["Prometheus", "Grafana", "ELK Stack", "Python"]
                    }
                  ].map((project, index) => (
                    <div 
                      key={index}
                      className="project-card group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-blue-500/5"></div>
                      <div className="z-10 sm:col-span-8">
                        <h3>
                          <a 
                            href={project.link}
                            className="inline-flex items-center font-medium leading-tight text-zinc-200 hover:text-blue-400 focus-visible:text-blue-400 group/link text-base"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            {project.title}
                            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 text-blue-400" />
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-zinc-400">{project.description}</p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <li key={techIndex} className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {currentPage === 'services' && renderServices()}
            {currentPage === 'blog' && renderBlog()}
            {currentPage === 'contact' && renderContact()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;