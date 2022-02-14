import React, { FC } from 'react';

const IconSquare: FC = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="265" height="144" viewBox="0 0 265 144" fill="none">
      <rect x="1" y="1" width="263" height="142" rx="15" fill="#130645"/>
      <line x1="6.22852" y1="7.55527" x2="259.229" y2="137.555" stroke="white" strokeOpacity="0.2"/>
      <line x1="259.229" y1="8.44473" x2="6.22852" y2="138.445" stroke="white" strokeOpacity="0.2"/>
      <rect x="1" y="1" width="263" height="142" rx="15" stroke="url(#paint0_linear_103_43)" strokeWidth="2"/>
      <defs>
        <linearGradient id="paint0_linear_103_43" x1="132.5" y1="0" x2="131.671" y2="143.998" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.5"/>
          <stop offset="1" stopColor="white" stopOpacity="0.5"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconSquare;