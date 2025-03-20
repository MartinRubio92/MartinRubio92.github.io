import React from 'react'
import Link from 'next/link'
import { Layout } from '@/components'
import { useData } from '../context/DataContext';

export const Footer = () => {
  const { data, translations } = useData();

  if (!data || !translations) {
    return <div>Loading...</div>;
  }

  return (
    <footer className='w-full border-t-2 border-solid border-dark
      font-medium text-lg sm:text-base dark:text-light dark:border-light '
    >
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; {translations.RIGHTS_RESERVED}</span>
        <div className='flex items-center lg:py-2'>
          {translations.BUILD_WITH} <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
          by&nbsp;
          <Link href="/" className='underline underline-offset-2'>{data.alias}</Link>
        </div>
        <Link 
          href={`https://mail.google.com/mail/?view=cm&to=${data.email}`}
          rel="noopener noreferrer"
          target={'_black'} className='underline underline-offset-2'
        >
          {translations.SAY_HELLO}
        </Link>
      </Layout>
    </footer>
  )
}