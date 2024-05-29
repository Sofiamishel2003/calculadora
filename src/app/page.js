"use client";

import React from 'react';
import Calculator from './calculator/components/Calculator';

export default function Home() {
  return (
    <div>
      <h1>Slay Calculator</h1>
      <Calculator />
      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

