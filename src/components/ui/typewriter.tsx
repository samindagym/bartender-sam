import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Typewriter = ({
  text,
  speed = 100,
  loop = true,
  waitTime = 2000,
}: {
  text: string | string[];
  speed?: number;
  loop?: boolean;
  waitTime?: number;
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);

  const texts = Array.isArray(text) ? text : [text];
  const currentFullText = texts[textArrayIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentFullText) {
      if (!loop && textArrayIndex === texts.length - 1) return;
      timeout = setTimeout(() => setIsDeleting(true), waitTime);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setTextArrayIndex((prev) => (prev + 1) % texts.length);
    } else {
      const delay = isDeleting ? speed / 2 : speed;
      timeout = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentFullText.substring(0, displayedText.length - 1)
            : currentFullText.substring(0, displayedText.length + 1)
        );
      }, delay + (Math.random() * 50 - 25)); // slight random variation for realism
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentFullText, speed, loop, waitTime, textArrayIndex, texts]);

  // Simple regex to match the specific emojis we're using, or any common emoji
  const renderTextWithEmojis = (text: string) => {
    // Match our specific emojis to wrap them
    const parts = text.split(/(🥃|🧪|✨)/g);
    return parts.map((part, i) => {
      if (['🥃', '🧪', '✨'].includes(part)) {
        return (
          <span 
            key={i} 
            className="inline-block" 
            style={{ 
              WebkitTextFillColor: 'initial', 
              WebkitBackgroundClip: 'initial',
              backgroundClip: 'initial',
              color: 'white',
              fontStyle: 'normal',
              marginLeft: '8px',
              // Force rendering of the emoji even if parent is transparent
              opacity: 1,
              visibility: 'visible'
            }}
          >
            {part}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <span className="relative">
      {renderTextWithEmojis(displayedText)}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[0.1em] h-[1em] bg-current ml-1 align-middle"
        style={{ 
          transform: 'translateY(-10%)',
          backgroundColor: 'currentColor' // Inherit from parent text color (which is transparent but has gradient)
        }}
      />
    </span>
  );
};
