import React from 'react';
import './index.css';

const BackgroundHello = () => {
  const hellos = [
    "Hello", "नमस्ते", "Hola", "Bonjour", "Hallo", "Ciao", "こんにちは", "你好", "Привет", "مرحبا"
  ];

  return (
    <div className="background-hello">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="hello-row">
          <div className="hello-track">
            {hellos.map((h, j) => (
              <span key={j}>{h}</span>
            ))}
            {hellos.map((h, j) => (
              <span key={j + hellos.length}>{h}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundHello;
