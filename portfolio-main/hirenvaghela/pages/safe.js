import Head from "next/head";

export default function Safe() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" suppressHydrationWarning>
      <Head>
        <title>Hiren Vaghela - AI/ML Engineer & Software Developer</title>
        <meta name="description" content="Portfolio of Hiren Vaghela - Data Scientist, AI/ML Engineer, and Software Developer." />
      </Head>

      {/* Simple Navigation */}
      <nav className="p-4 bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hiren Vaghela</h1>
          <div className="space-x-4">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary-600">About</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-600">Projects</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hiren Vaghela
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            AI/ML Engineer • Data Scientist • Software Developer
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about applying deep learning and machine learning techniques to solve real-world problems. 
            Building scalable solutions and exploring the intersection of AI and entrepreneurship.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Hi there! I'm Hiren Vaghela, a Data Scientist with a passion for applying deep learning 
                and machine learning techniques to solve real-world problems. I hold a BTech in Electronics 
                and Communications Engineering from NIT Surat.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm also passionate about system design and software development, constantly seeking to 
                optimize performance and create efficient, scalable solutions.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h5 className="font-medium">Python</h5>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h5 className="font-medium">PyTorch</h5>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h5 className="font-medium">React</h5>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                    <div className="bg-cyan-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <h5 className="font-medium">Docker</h5>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Number Detection</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Real-time number detection using computer vision and color segmentation techniques.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">Python</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">OpenCV</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-2">SVHN Classification</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Street View House Numbers dataset classification achieving 90% accuracy.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-sm">PyTorch</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm">Deep Learning</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Puzle</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI-powered puzzle solving platform with machine learning algorithms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">FastAPI</span>
                <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded text-sm">React</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Interested in working together? I'd love to hear from you!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/hiren-2911" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/hirenvaghela/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              LinkedIn
            </a>
            <a href="mailto:hiren@Puzle" className="text-gray-600 dark:text-gray-400 hover:text-red-500">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Hiren Vaghela. Made with ❤️ and lots of coffee ☕</p>
        </div>
      </footer>
    </div>
  );
}
