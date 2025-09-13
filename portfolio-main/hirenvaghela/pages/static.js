import Head from "next/head";

export default function Static() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Head>
        <title>Static Test - Hiren Vaghela</title>
        <meta name="description" content="Static test page without any dynamic content" />
      </Head>

      <nav className="p-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold">Static Test</h1>
      </nav>

      <main className="p-8">
        <h2 className="text-4xl font-bold mb-4">Static Content</h2>
        <p className="text-lg mb-4">This page has no dynamic content or client-side JavaScript.</p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">About</h3>
            <p>This is a static about section.</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <p>This is a static projects section.</p>
          </div>
        </div>
      </main>

      <footer className="p-4 bg-gray-100 dark:bg-gray-800 mt-8">
        <p className="text-center">© 2024 Hiren Vaghela</p>
      </footer>
    </div>
  );
}
