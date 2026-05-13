import React, { useState, useEffect, useRef } from 'react';

const LANGUAGE_HELLOS = [
  'Namaste',
  'Hola',
  'Bonjour',
  'こんにちは',
  'Hallo',
  'Olá',
  'Ciao',
  'Salaam',
  'Annyeong',
  'Sawadee',
];

function getBaseGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Good Morning';
  if (hour >= 12 && hour < 17) return 'Good Afternoon';
  if (hour >= 17) return 'Good Evening';
  return 'Good Night';
}

const TYPING_SPEED = 60;    // ms per character typing
const DELETING_SPEED = 35;  // ms per character deleting
const PAUSE_AFTER_TYPE = 2000; // pause when fully typed
const PAUSE_AFTER_DELETE = 400; // pause before typing next

const DynamicGreeting = () => {
  const base = useRef(getBaseGreeting()).current;
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const tick = () => {
      const currentPhrase = `${base}, ${LANGUAGE_HELLOS[phraseIndex.current]}`;

      if (!isDeleting.current) {
        // Typing
        charIndex.current++;
        setDisplayText(currentPhrase.substring(0, charIndex.current));

        if (charIndex.current === currentPhrase.length) {
          // Finished typing — pause then start deleting
          isDeleting.current = true;
          timeoutRef.current = setTimeout(tick, PAUSE_AFTER_TYPE);
          return;
        }
        timeoutRef.current = setTimeout(tick, TYPING_SPEED);
      } else {
        // Deleting
        charIndex.current--;
        setDisplayText(currentPhrase.substring(0, charIndex.current));

        if (charIndex.current === 0) {
          // Finished deleting — move to next phrase
          isDeleting.current = false;
          phraseIndex.current = (phraseIndex.current + 1) % LANGUAGE_HELLOS.length;
          timeoutRef.current = setTimeout(tick, PAUSE_AFTER_DELETE);
          return;
        }
        timeoutRef.current = setTimeout(tick, DELETING_SPEED);
      }
    };

    timeoutRef.current = setTimeout(tick, 500); // Initial delay
    return () => clearTimeout(timeoutRef.current);
  }, [base]);

  return (
    <div className="dynamic-greeting">
      {displayText}
      <span className="typewriter-cursor" style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
    </div>
  );
};

export default DynamicGreeting;
