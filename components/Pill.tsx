// components/Pill.tsx
import React from 'react';

interface PillProps {
  label: string;
  onClick: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 mr-2 text-sm rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
    >
      {label}
    </button>
  );
};

export default Pill;
