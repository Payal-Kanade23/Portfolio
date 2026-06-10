import React, { useState, useEffect } from 'react';

function TypingAnimation({ text, speed = 100, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;

    let currentIndex = 0;
    let timeoutId;

    const startTyping = () => {
      const typeNextChar = () => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.substring(0, currentIndex));
          currentIndex++;
          timeoutId = setTimeout(typeNextChar, speed);
        } else {
          setIsComplete(true);
        }
      };

      timeoutId = setTimeout(typeNextChar, delay);
    };

    startTyping();

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay]);

  return (
    <h2 className="font-bold text-xl md:text-xl">
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </h2>
  );
}

export default TypingAnimation;
