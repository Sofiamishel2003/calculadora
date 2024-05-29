"use client";

import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button className="button" onClick={() => onClick(label)}>
      {label}
      <style jsx>{`
        .button {
          width: 25%;
          height: 100px;
          font-size: 1.5em;
          border: 1px solid #000;
          background-color: #fff;
          cursor: pointer;
        }
        .button:active {
          background-color: #ddd;
        }
      `}</style>
    </button>
  );
};

export default Button;
