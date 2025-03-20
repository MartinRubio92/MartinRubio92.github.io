import React from 'react'
import { motion } from "framer-motion";
import useThemeSwitcher from '@/components/hooks/useThemeSwitcher';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, CustomLink } from '@/components';
import { useData } from '@/components/context/DataContext';

export const NavbarLaptop = ({data, switchLanguage, locale}) => {
  const [mode, setMode] = useThemeSwitcher();
  const githubLink = data?.links?.github || '#';
  const linkedin = data?.links?.linkedin || '#';

  const { translations } = useData();

  if (!translations) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full flex justify-between items-center lg:hidden'>
      <nav>
        <CustomLink href="#home" title={translations.NAVBAR_HOME} className='mr-4 text-dark dark:text-light hover:text-primary-500' />
        <CustomLink href="#about" title={translations.NAVBAR_ABOUT} className='mx-4 text-dark dark:text-light hover:text-primary-500' />
        <CustomLink href="#skills" title={translations.NAVBAR_SKILLS} className='mx-4 text-dark dark:text-light hover:text-primary-500' />
        <CustomLink href="#projects" title={translations.NAVBAR_PROJECTS} className='mx-4 text-dark dark:text-light hover:text-primary-500' />
      </nav>

      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href={githubLink} target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mr-3  text-dark dark:text-light'
        >
          <GithubIcon />
        </motion.a>
        <motion.a href={linkedin} target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 ml-3'
        >
          <LinkedInIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1 
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
        >
          {
            mode === "dark" ?
              <SunIcon className={"fill-dark"} />
              :
              <MoonIcon className={"fill-dark"} />
          }
        </button>
        <button onClick={switchLanguage}
          className={`ml-3 text-dark dark:text-light
          `}
        >
          {locale === 'en' ? 'En' : 'Es'}
        </button>

      </nav>
    </div>
  )
}