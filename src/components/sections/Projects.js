import React from 'react';
import { AnimatedText, FeaturedProjects, Project } from '@/components';
import { useData } from '../context/DataContext';

const imageMap = {
  ecommerceImage: "/images/projects/ecommerce.png",
  portfolioImage: "/images/projects/project_portfolio.png",
  portfolioVCTImage: "/images/projects/portfolio_vctech.png",
};

const Projects = () => {
  const { data, translations } = useData();

  if (!data || !translations) {
    return <div>Loading...</div>;
  }

  const groupProjects = (projects) => {
    const grouped = [];
    let tempGroup = [];

    projects.forEach((project, index) => {
      if (project.code_type === "2") {
        tempGroup.push(project);

        if (tempGroup.length === 2 || index === projects.length - 1) {
          grouped.push(tempGroup);
          tempGroup = [];
        }
      } else if (project.code_type === "1") {
        if (tempGroup.length > 0) {
          grouped.push(tempGroup);
          tempGroup = [];
        }
        grouped.push([project]);
      }
    });

    return grouped;
  };

  const groupedProjects = groupProjects(data.projects || []);

  return (
    <section id="projects">
      <AnimatedText
        text={translations.TITLE_PROJECTS}
        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
      />

      <div className='flex flex-col gap-20 p-12'>
        {groupedProjects.map((group, index) => {
          if (group.length === 1 && group[0].code_type === "1") {
            const project = group[0];
            return (
              <FeaturedProjects
                key={index}
                title={project.name}
                link={project.link}
                github={project.github}
                type={project.type}
                img={imageMap[project.image]}
                summary={translations?.LENGUAGE === "es" ? project.descripcion_es : project.descripcion_en}
              />
            );
          } else {
            return (
              <div key={index} className="flex gap-8">
                {group.map((project, subIndex) => (
                  <div key={subIndex} className="flex-1">
                    <Project
                      title={project.name}
                      link={project.link}
                      github={project.github}
                      type={project.type}
                      img={imageMap[project.image]}
                      summary={translations?.LENGUAGE === "es" ? project.descripcion_es : project.descripcion_en}
                    />
                  </div>
                ))}
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Projects;