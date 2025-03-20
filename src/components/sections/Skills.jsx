import React, { useState } from 'react';
import { AnimatedText, Skill } from '@/components';
import { useData } from '@/components/context/DataContext';

const Skills = ({ skills }) => {
  const { translations } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!skills || skills.length === 0) {
    return <div>Loading skills...</div>;
  }

  // Función para navegar a la izquierda
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
  };

  // Función para navegar a la derecha
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === skills.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calcula las esferas visibles (5 en total)
  const visibleSkills = [];
  for (let i = -2; i <= 2; i++) {
    const index = (currentIndex + i + skills.length) % skills.length;
    visibleSkills.push(skills[index]);
  }

  return (
    <section id="skills" className="scroll-smooth">
      <AnimatedText
        text={translations.TITLE_SKILLS}
        className="mt-16 mb-5 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />

      {/* Contenedor del slider */}
      <div className="relative overflow-hidden h-64">
        {/* Botón para navegar a la izquierda */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-75"
        >
          ←
        </button>

        {/* Contenedor de esferas */}
        <div className="flex justify-center items-center h-full">
          {visibleSkills.map((skill, index) => {
            const distance = index - 2; // Distancia respecto a la esfera central
            const isCenter = distance === 0; // Esfera central

            // Calcula el desplazamiento y el escalado
            const translateX = distance * 100; // 100% de separación entre esferas
            const scale = isCenter ? 1.1 : 0.9; // Escala de la esfera
            const opacity = isCenter ? 1 : 0.75; // Opacidad de la esfera

            return (
              <div
                key={skill.id}
                className={`
                  absolute transition-all duration-500 ease-in-out
                  ${isCenter ? 'z-20' : 'z-10'}
                `}
                style={{
                  transform: `translateX(${translateX}%) scale(${scale})`,
                  opacity: opacity,
                }}
              >
                <Skill skill={skill} />
              </div>
            );
          })}
        </div>

        {/* Botón para navegar a la derecha */}
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-75"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Skills;