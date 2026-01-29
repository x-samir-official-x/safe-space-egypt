
import React from 'react';

export const COLORS = {
  primary: '#114B9A', // Dark Blue from brain
  secondary: '#4AB9E2', // Light Blue from brain
  accent: '#F2548B', // Pink from heart
  text: '#1E293B',
  bg: '#F8FAFC'
};

export const LOGO_SVG = (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Right side Heart (Pink) */}
    <path d="M50 82C50 82 85 62 85 40C85 28 78 20 68 20C61 20 55 24 50 30V82Z" fill="#F2548B" />
    {/* Left side Brain (Blue Tones) */}
    <path d="M50 30C45 24 39 20 32 20C22 20 15 28 15 40C15 62 50 82 50 82V30Z" fill="#4AB9E2" />
    {/* Detail to distinguish brain/heart split */}
    <path d="M50 30V82C50 82 51 81.5 52 80V32C51 31 50.5 30.5 50 30Z" fill="#114B9A" />
    {/* Minimal brain squiggles for character */}
    <path d="M25 35C28 33 32 34 33 38" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M22 45C26 43 32 46 34 52" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M28 65C32 63 36 66 38 60" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);
