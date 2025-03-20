import React from 'react'
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, CustomMobileLink } from '@/components';

export const NavbarMobile = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
      animate={{ scale: 1, opacity: 1 }}
      className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
        '>

      <nav className='flex items-center flex-col justify-center'>
        <CustomMobileLink href="#home" title={translations.NAVBAR_HOME} className='text-dark dark:text-light hover:text-primary-500' toggle={handleIsOpen} />
        <CustomMobileLink href="#about" title={translations.NAVBAR_ABOUT} className='text-dark dark:text-light hover:text-primary-500' toggle={handleIsOpen} />
        <CustomMobileLink href="#skills" title={translations.NAVBAR_SKILLS} className='text-dark dark:text-light hover:text-primary-500' toggle={handleIsOpen} />
        <CustomMobileLink href="#projects" title={translations.NAVBAR_PROJECTS} className='text-dark dark:text-light hover:text-primary-500' toggle={handleIsOpen} />
      </nav>

      <nav className='flex items-center justify-center flex-wrap mt-2'>
        <motion.a href={githubLink} target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mr-3 bg-light rounded-full dark:bg-dark sx:mx-1'
        >
          <GithubIcon />
        </motion.a>
        <motion.a href={linkedin} target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 ml-3 sx:mx-1'
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
    </motion.div>
  )
}
