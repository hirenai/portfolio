import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SimpleHero from "@/components/SimpleHero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Reeds from "@/components/Reeds";
import PawWorld from "@/components/PawWorld";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { getSEOInfo } from "@/utils/portfolioData";

export default function Index() {
  const [mounted, setMounted] = useState(false);
  const seoInfo = getSEOInfo();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Head>
          <title>{seoInfo.title}</title>
          <meta name="description" content={seoInfo.description} />
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
        <title>{seoInfo.title}</title>
        <meta name="description" content={seoInfo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={seoInfo.author} />
        <meta name="keywords" content={seoInfo.keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoInfo.url} />
        <meta property="og:title" content={seoInfo.title} />
        <meta property="og:description" content={seoInfo.description} />
        <meta property="og:image" content={seoInfo.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoInfo.url} />
        <meta property="twitter:title" content={seoInfo.title} />
        <meta property="twitter:description" content={seoInfo.description} />
        <meta property="twitter:image" content={seoInfo.image} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={seoInfo.url} />
      </Head>

      <Navbar />
      
      <main>
        <SimpleHero />
        <About />
        <Projects />
        <Publications />
        <Reeds />
        <PawWorld />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}
