import React, { useState } from 'react';
import * as Icons from '@/components';
import { useData } from '@/components/context/DataContext';

const Skill = ({ skill }) => {
  const [showText, setShowText] = useState(false);
  const { translations } = useData();
  const IconComponent = Icons[skill.iconComponent];

  const handleMoreClick = () => {
    setShowText(!showText); // Toggle para mostrar/ocultar el texto
  };

  const handleMouseLeave = () => {
    setShowText(false); // Ocultar el texto cuando se sale de la card
  };

  return (
    <div onClick={handleMoreClick}
      className="col-span-3 relative h-96 w-56 mt-20"
      onMouseLeave={handleMouseLeave} // Ocultar texto cuando el mouse sale de la card
    >
      <button 
        className="
          group relative block bg-gradient-to-r from-primary to-primaryDark 
          rounded-[100px/200px] overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300
          dark:from-primaryDark dark:to-primary hover:shadow-2xl
        ">
        <div className="flex items-center justify-center h-auto max-w-xs max-h-96">
          {IconComponent ? <IconComponent className="text-white w-24 h-24 transition-all duration-300 group-hover:text-primaryDark dark:group-hover:text-primary" /> : null}
        </div>

        {showText && (
          <div 
            className="
              absolute inset-0 flex flex-col items-center justify-center
              bg-black bg-opacity-50 text-white p-4 rounded-[100px/200px] transition-opacity
            "
          >
            <h2 className="text-lg font-semibold">{skill.name}</h2>
            <p className="text-sm">{skill.experience} {translations.YEARS}</p>
          </div>
        )}

        <div 
          onClick={handleMoreClick}
          className="
            absolute bottom-4 right-16 opacity-0 group-hover:opacity-100 transition-opacity 
            duration-300 ease-in-out transform group-hover:translate-y-1
            bg-white bg-opacity-30 backdrop-blur-lg rounded-full p-1 cursor-pointer
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Skill;