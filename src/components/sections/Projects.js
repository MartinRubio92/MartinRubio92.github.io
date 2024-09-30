import React from 'react'
import project1 from "@/../public/images/projects/fashion-studio-website.jpg"
import { AnimatedText, Project, FeaturedProjects } from '@/components'
import { useData } from '../context/DataContext'

const Projects = () => {
  const { data, translations } = useData();
  
  return (
    <section id="projects" className="scroll-smooth">
      <AnimatedText text={translations.TITLE_PROJECTS}
        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
      />

      <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
        <div className='col-span-12'>
          <FeaturedProjects
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
            link="/"
            github="/"
            type="Featured Project"
            img={project1}
          />
        </div>
        <div className='col-span-6 sm:col-span-12'>
          <Project
            title="Crypto Screener Application"
            link="/"
            github="/"
            type="Featured Project"
            img={project1}
          />
        </div>
        <div className='col-span-6 sm:col-span-12'>
          <Project
            title="Crypto Screener Application"
            link="/"
            github="/"
            type="Featured Project"
            img={project1}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects;