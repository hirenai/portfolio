import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Test() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
      <Head>
        <title>Hydration Test</title>
      </Head>
      
      <h1 className="text-4xl font-bold mb-8">Hydration Test Page</h1>
      
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <h2 className="text-xl font-semibold mb-2">Client-side only content:</h2>
          {mounted ? (
            <p className="text-green-600">✅ Client-side rendered</p>
          ) : (
            <p className="text-gray-500">⏳ Loading...</p>
          )}
        </div>
        
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <h2 className="text-xl font-semibold mb-2">Static content:</h2>
          <p>This should always render the same on server and client.</p>
        </div>
        
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <h2 className="text-xl font-semibold mb-2">Date test:</h2>
          <p>Current time: {mounted ? new Date().toLocaleString() : 'Loading...'}</p>
        </div>
      </div>
    </div>
  );
}
