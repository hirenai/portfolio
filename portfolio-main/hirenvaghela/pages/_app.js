import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <Component {...pageProps} />
            {mounted && (
                <Toaster 
                    position="top-right"
                    toastOptions={{
                        duration: 4000,
                        style: {
                            background: 'var(--toast-bg)',
                            color: 'var(--toast-color)',
                        },
                    }}
                />
            )}
        </>
    );
}
