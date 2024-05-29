"use client";

import React from 'react';

const Display = ({ value }) => {
  return (
    <div className="display">
      {value}
      <style jsx>{`
        .display {
          height: 100px;
          background-color: #222;
          color: #fff;
          font-size: 2em;
          text-align: right;
          padding: 10px;
          border: 1px solid #000;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Display;
