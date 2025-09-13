import portfolioData from '../data/portfolio.json';

// Icon mapping for dynamic icon loading
export const iconMap = {
  // Font Awesome icons
  FaPython: () => import('react-icons/fa').then(mod => mod.FaPython),
  FaDocker: () => import('react-icons/fa').then(mod => mod.FaDocker),
  FaReact: () => import('react-icons/fa').then(mod => mod.FaReact),
  FaNodeJs: () => import('react-icons/fa').then(mod => mod.FaNodeJs),
  FaAws: () => import('react-icons/fa').then(mod => mod.FaAws),
  FaGitAlt: () => import('react-icons/fa').then(mod => mod.FaGitAlt),
  FaBrain: () => import('react-icons/fa').then(mod => mod.FaBrain),
  FaCode: () => import('react-icons/fa').then(mod => mod.FaCode),
  FaRocket: () => import('react-icons/fa').then(mod => mod.FaRocket),
  FaGraduationCap: () => import('react-icons/fa').then(mod => mod.FaGraduationCap),
  FaGithub: () => import('react-icons/fa').then(mod => mod.FaGithub),
  FaLinkedin: () => import('react-icons/fa').then(mod => mod.FaLinkedin),
  FaSun: () => import('react-icons/fa').then(mod => mod.FaSun),
  FaMoon: () => import('react-icons/fa').then(mod => mod.FaMoon),
  FaBars: () => import('react-icons/fa').then(mod => mod.FaBars),
  FaTimes: () => import('react-icons/fa').then(mod => mod.FaTimes),
  FaFilePdf: () => import('react-icons/fa').then(mod => mod.FaFilePdf),
  FaExternalLinkAlt: () => import('react-icons/fa').then(mod => mod.FaExternalLinkAlt),
  FaQuoteLeft: () => import('react-icons/fa').then(mod => mod.FaQuoteLeft),
  FaCalendarAlt: () => import('react-icons/fa').then(mod => mod.FaCalendarAlt),
  FaUsers: () => import('react-icons/fa').then(mod => mod.FaUsers),
  FaBookOpen: () => import('react-icons/fa').then(mod => mod.FaBookOpen),
  FaDownload: () => import('react-icons/fa').then(mod => mod.FaDownload),
  FaEye: () => import('react-icons/fa').then(mod => mod.FaEye),
  
  // Simple Icons
  SiTensorflow: () => import('react-icons/si').then(mod => mod.SiTensorflow),
  SiPytorch: () => import('react-icons/si').then(mod => mod.SiPytorch),
  SiFastapi: () => import('react-icons/si').then(mod => mod.SiFastapi),
  SiMongodb: () => import('react-icons/si').then(mod => mod.SiMongodb),
  SiPostgresql: () => import('react-icons/si').then(mod => mod.SiPostgresql),
  SiKubernetes: () => import('react-icons/si').then(mod => mod.SiKubernetes),
  SiJupyter: () => import('react-icons/si').then(mod => mod.SiJupyter),
};

// Get portfolio data
export const getPortfolioData = () => portfolioData;

// Get specific sections
export const getPersonalInfo = () => portfolioData.personal;
export const getBio = () => portfolioData.bio;
export const getSocialLinks = () => portfolioData.social;
export const getSkills = () => portfolioData.skills;
export const getAchievements = () => portfolioData.achievements;
export const getProjects = () => portfolioData.projects;
export const getPublications = () => portfolioData.publications;
export const getBooks = () => portfolioData.books;
export const getWorkExperience = () => portfolioData.workExperience;
export const getCatInfo = () => portfolioData.cat;
export const getStartupInfo = () => portfolioData.startup;
export const getSEOInfo = () => portfolioData.seo;

// Helper function to get icon component
export const getIconComponent = async (iconName) => {
  if (iconMap[iconName]) {
    return await iconMap[iconName]();
  }
  return null;
};

// Helper function to get featured items
export const getFeaturedProjects = () => portfolioData.projects.filter(project => project.featured);
export const getFeaturedPublications = () => portfolioData.publications.filter(pub => pub.featured);
export const getFeaturedBooks = () => {
  const novels = portfolioData.books.novels || [];
  const growth = portfolioData.books.growth || [];
  return [...novels, ...growth].filter(book => book.featured);
};
export const getFeaturedWorkExperience = () => portfolioData.workExperience.filter(exp => exp.featured);

// Helper function to get stats
export const getPortfolioStats = () => ({
  totalProjects: portfolioData.projects.length,
  featuredProjects: getFeaturedProjects().length,
  totalPublications: portfolioData.publications.length,
  totalCitations: portfolioData.publications.reduce((sum, pub) => sum + pub.citations, 0),
  hIndex: 1, // From your Google Scholar
  totalBooks: (portfolioData.books.novels || []).length + (portfolioData.books.growth || []).length,
  totalWorkExperience: portfolioData.workExperience.length,
  skillsCount: portfolioData.skills.length
});

export default portfolioData;
