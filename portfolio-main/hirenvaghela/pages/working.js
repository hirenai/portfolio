import Head from "next/head";
import { useState, useEffect } from "react";
import SimpleHero from "@/components/SimpleHero";

export default function Working() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Head>
          <title>Hiren Vaghela - AI/ML Engineer & Software Developer</title>
          <meta name="description" content="Portfolio of Hiren Vaghela - Data Scientist, AI/ML Engineer, and Software Developer." />
        </Head>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Head>
        <title>Hiren Vaghela - AI/ML Engineer & Software Developer</title>
        <meta 
          name="description" 
          content="Portfolio of Hiren Vaghela - Data Scientist, AI/ML Engineer, and Software Developer. Explore my projects, publications, and journey in technology." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Hiren Vaghela" />
        <meta name="keywords" content="Hiren Vaghela, AI, Machine Learning, Data Science, Software Engineer, Portfolio" />
      </Head>

      {/* Simple Navigation */}
      <nav className="fixed-nav bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hiren
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                About
              </a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <SimpleHero />
        
        {/* About Section */}
        <section id="about" className="section-spacing py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A passionate Data Scientist and Software Engineer with a love for AI/ML and building impactful solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Hi there! I'm <strong className="text-gray-900 dark:text-gray-100">Hiren Vaghela</strong>, a Data Scientist 
                    with a passion for applying deep learning and machine learning techniques to solve real-world problems. 
                    I hold a BTech in Electronics and Communications Engineering from NIT Surat.
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm also passionate about system design and software development, constantly seeking to optimize 
                    performance and create efficient, scalable solutions. My skill set spans across a range of languages, 
                    including Python, PyTorch, TensorFlow, and C++, enabling me to approach challenges from diverse angles.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Technical Skills
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Python", level: 95 },
                    { name: "PyTorch", level: 90 },
                    { name: "TensorFlow", level: 85 },
                    { name: "FastAPI", level: 88 },
                    { name: "Docker", level: 85 },
                    { name: "React", level: 80 }
                  ].map((skill, index) => (
                    <div key={index} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-spacing py-16 px-4">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A collection of projects showcasing my expertise in AI/ML, web development, and data science
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Number Detection using Color Segmentation",
                  description: "Real-time number detection system using computer vision and color segmentation techniques.",
                  technologies: ["Python", "OpenCV", "Computer Vision"],
                  github: "https://github.com/hiren-2911/Number_detection_using_color_segmentation"
                },
                {
                  title: "SVHN Dataset Classification",
                  description: "Street View House Numbers (SVHN) dataset classification achieving 90% accuracy.",
                  technologies: ["Python", "PyTorch", "Deep Learning"],
                  github: "https://github.com/hiren-2911/capstone_project"
                },
                {
                  title: "Puzle Platform",
                  description: "AI-powered puzzle solving platform with machine learning algorithms.",
                  technologies: ["Python", "FastAPI", "React", "Docker"],
                  github: "https://github.com/hiren-2911/puzzles-ai"
                }
              ].map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                    <div className="text-6xl">🧩</div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-spacing py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Interested in working together? I'd love to hear from you!
              </p>
              
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/hiren-2911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/hirenvaghela/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="mailto:hiren@Puzle"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container-custom text-center">
          <p>&copy; 2024 Hiren Vaghela. Made with ❤️ and lots of coffee ☕</p>
        </div>
      </footer>
    </div>
  );
}
