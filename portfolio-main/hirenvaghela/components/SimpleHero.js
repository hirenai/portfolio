import { getPersonalInfo } from '../utils/portfolioData';

export default function SimpleHero() {
  const personalInfo = getPersonalInfo();
  
  return (
    <section className="hero-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      <div className="container-custom relative z-10">
        <div className="hero-content text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="profile-container">
            <div className="profile-image">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - ${personalInfo.title}`}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{display: 'none'}}>
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
              <div className="status-indicator w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            {personalInfo.subtitle.split(' • ').map((item, index, array) => (
              <span key={index}>
                <span className="font-medium">{item}</span>
                {index < array.length - 1 && <span className="mx-4 text-blue-500">•</span>}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.description}
          </p>

          {/* Fun Fact */}
          <div className="mb-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 max-w-md mx-auto">
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              {personalInfo.funFact}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="btn-group mb-12">
            <a
              href="#about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center space-x-2"
            >
              <span>Explore My Work</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            
            <a
              href={personalInfo.resumeUrl}
              download
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 inline-flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="social-icons">
            <a
              href={personalInfo.social?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={personalInfo.social?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
