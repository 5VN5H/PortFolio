import React, { useState, useEffect, useRef } from 'react';

const LANGUAGE_HELLOS = ['Namaste', 'Hola', 'Bonjour', 'こんにちは', 'Hallo', 'Olá', 'Ciao', 'Salaam', 'Annyeong', 'Sawadee'];

// Greeting follows the visitor's local clock.
function getBaseGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Good Morning';
  if (hour >= 12 && hour < 17) return 'Good Afternoon';
  if (hour >= 17) return 'Good Evening';
  return 'Good Night';
}

const TYPING_SPEED = 60;
const DELETING_SPEED = 35;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

const DynamicGreeting = () => {
  const base = useRef(getBaseGreeting()).current;
  const [displayText, setDisplayText] = useState('');
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(`${base}, ${LANGUAGE_HELLOS[0]}`);
      return undefined;
    }

    const tick = () => {
      const currentPhrase = `${base}, ${LANGUAGE_HELLOS[phraseIndex.current]}`;

      if (!isDeleting.current) {
        charIndex.current++;
        setDisplayText(currentPhrase.substring(0, charIndex.current));
        if (charIndex.current === currentPhrase.length) {
          isDeleting.current = true;
          timeoutRef.current = setTimeout(tick, PAUSE_AFTER_TYPE);
          return;
        }
        timeoutRef.current = setTimeout(tick, TYPING_SPEED);
      } else {
        charIndex.current--;
        setDisplayText(currentPhrase.substring(0, charIndex.current));
        if (charIndex.current === 0) {
          isDeleting.current = false;
          phraseIndex.current = (phraseIndex.current + 1) % LANGUAGE_HELLOS.length;
          timeoutRef.current = setTimeout(tick, PAUSE_AFTER_DELETE);
          return;
        }
        timeoutRef.current = setTimeout(tick, DELETING_SPEED);
      }
    };

    timeoutRef.current = setTimeout(tick, 500);
    return () => clearTimeout(timeoutRef.current);
  }, [base]);

  return (
    <p className="dynamic-greeting" aria-label={`${base}, ${LANGUAGE_HELLOS[0]}`}>
      <span aria-hidden="true">{displayText}</span>
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </p>
  );
};

export default DynamicGreeting;
