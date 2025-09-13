import Head from "next/head";
import { useState, useEffect } from "react";

export default function Debug() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" suppressHydrationWarning>
      <Head>
        <title>Debug - Hiren Vaghela</title>
        <meta name="description" content="Debug page for hydration issues" />
      </Head>

      <nav className="p-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold">Debug Page</h1>
        <p className="text-sm text-gray-600">Testing hydration step by step</p>
      </nav>

      <main className="p-8">
        <div className="space-y-8">
          {/* Test 1: Basic static content */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Test 1: Static Content</h2>
            <p>This should render identically on server and client.</p>
          </div>

          {/* Test 2: Client-side only content */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Test 2: Client-side Content</h2>
            {mounted ? (
              <p className="text-green-600">✅ Client-side rendered successfully</p>
            ) : (
              <p className="text-yellow-600">⏳ Still loading...</p>
            )}
          </div>

          {/* Test 3: Date rendering */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Test 3: Date Rendering</h2>
            <p>Server time: {new Date().toISOString()}</p>
            {mounted && (
              <p>Client time: {new Date().toISOString()}</p>
            )}
          </div>

          {/* Test 4: Local storage */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Test 4: Local Storage</h2>
            {mounted ? (
              <p>Local storage available: {typeof window !== 'undefined' ? 'Yes' : 'No'}</p>
            ) : (
              <p>Checking local storage...</p>
            )}
          </div>

          {/* Test 5: Theme classes */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Test 5: Theme Classes</h2>
            <p className="text-gray-900 dark:text-gray-100">
              This text should change color based on theme
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
