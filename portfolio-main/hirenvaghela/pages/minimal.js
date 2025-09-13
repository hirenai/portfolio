import Head from "next/head";
import { useState, useEffect } from "react";

export default function Minimal() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" suppressHydrationWarning>
      <Head>
        <title>Minimal Test - Hiren Vaghela</title>
        <meta name="description" content="Minimal test page" />
      </Head>

      <nav className="p-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold">Minimal Test</h1>
      </nav>

      <main className="p-8">
        <h2 className="text-4xl font-bold mb-4">Hello World</h2>
        <p className="text-lg mb-4">This is a minimal test page.</p>
        
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <h3 className="text-xl font-semibold mb-2">Hydration Status:</h3>
          {mounted ? (
            <p className="text-green-600">✅ Hydrated successfully</p>
          ) : (
            <p className="text-yellow-600">⏳ Still hydrating...</p>
          )}
        </div>
      </main>
    </div>
  );
}
