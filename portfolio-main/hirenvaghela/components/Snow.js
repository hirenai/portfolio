import { useEffect, useState } from 'react';

export default function Snow() {
  const [snowflakes, setSnowflakes] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const createSnowflake = () => {
      const snowflake = {
        id: Math.random(),
        left: Math.random() * 100,
        animationDuration: Math.random() * 10 + 10, // 10-20 seconds
        delay: Math.random() * 5, // 0-5 seconds delay
        size: Math.random() * 10 + 5, // 5-15px
        opacity: Math.random() * 0.8 + 0.2, // 0.2-1.0
      };
      return snowflake;
    };

    const generateSnowflakes = () => {
      const flakes = [];
      for (let i = 0; i < 50; i++) {
        flakes.push(createSnowflake());
      }
      setSnowflakes(flakes);
    };

    generateSnowflakes();

    // Regenerate snowflakes every 30 seconds
    const interval = setInterval(generateSnowflakes, 30000);

    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="snow-container">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="snowflake"
          style={{
            left: `${snowflake.left}%`,
            animationDuration: `${snowflake.animationDuration}s`,
            animationDelay: `${snowflake.delay}s`,
            fontSize: `${snowflake.size}px`,
            opacity: snowflake.opacity,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}
