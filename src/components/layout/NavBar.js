import React, { useState } from 'react'
import { useData } from '@/components/context/DataContext';
import { NavbarMobile, NavbarLaptop } from '@/components';

export const NavBar = ( ) => {
  const { data, locale, setLocale } = useData();

  const switchLanguage = () => {
    setLocale(locale === 'es' ? 'en' : 'es');
  };
  
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className='fixed top-0 w-full bg-white dark:bg-dark shadow-md z-50'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleIsOpen}>
          <span className={` bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} `}></span>
          <span className={` bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'} `}></span>
          <span className={` bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} `}></span>
        </button>
        <NavbarLaptop data={data} switchLanguage={switchLanguage} locale={locale} />
        {
          isOpen ? <NavbarMobile /> : null
        }
      </div>
    </header>
  )
}