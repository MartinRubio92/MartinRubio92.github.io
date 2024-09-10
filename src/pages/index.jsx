import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import profilePic from "../../public/images/profile/01-developer.png"
import profilePic2 from "../../public/images/profile/developer-pic-2.png"
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import { GithubIcon, LinkArrow } from '@/components/Icons'
import { AnimatedText, Education, Experience, Layout, Logo, Skills } from '@/components'
import { useData } from '@/components/context/DataContext';

const FramerImage = motion(Image);

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between relative roun-br-2xl
      rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      ' />
      <Link href={link} target="_blank"
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'><GithubIcon />{" "}</Link>
          <Link
            href={link} target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl
      border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
        rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      ' />
      <Link href={link} target="_blank"
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link
            href={link} target='_blank'
            className='text-lg font-semibold underline md:text-base'
          >
            Visit Project
          </Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon />{" "}</Link>
        </div>
      </div>
    </article>
  )
}

export default function Home({ }) {
  const { abouts, translations } = useData();

  if (!abouts || !translations) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <Head>
        <title>{translations.TEXT_BROWSER}</title>
        <meta name="Home" content={translations.TEXT_META_INDEX} />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light scroll-smooth'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='fixed z-50 left-12 -translate-x-1/2 bottom-5 '>
            <Logo />
          </div>
          <section id="home" className='flex items-center justify-between w-full lg:flex-col scroll-smooth'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="CodeBucjs" className='"w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text={translations.PRESENTATION_HOME} className='!text-6xl !text-left
                  xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-2xl sm:!text-3xl
                '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                {translations.RESUME_HOME}
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/dummy.pdf" target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6
                      rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                      border-2 border-solid border-transparent hover:border-dark

                      dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                      hover:dark:border-light md:p-2  md:px-4 md:text-base
                    '
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:abcd@gmail.com" target={"_blank"}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>Contact</Link>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="scroll-smooth">
            <AnimatedText text={translations.TITLE_ABOUT} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
              <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>

                <p className='font-medium'>
                  {translations.TEXT_ABOUT_PART_1}
                </p>
                <p className='my-4 font-medium'>
                  {translations.TEXT_ABOUT_PART_2}
                </p>
                <p className='font-medium'>
                  {translations.TEXT_ABOUT_PART_3}
                </p>
              </div>
              <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid borde-dark
                bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
              '>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                <Image src={profilePic2} alt="MartinRubio" className='w-full h-auto rounded-2xl'
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                <div className='flex flex-col  items-end justify-center xl:items-center'>
                  <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={abouts.clients} />+
                  </span>
                  <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:test-sm'>
                    satisfied clients
                  </h2>
                </div>
                <div className='flex flex-col  items-end justify-center xl:items-center'>
                  <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={abouts.projects} />+
                  </span>
                  <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:test-sm'>
                    projet completed
                  </h2>
                </div>
                <div className='flex flex-col  items-end justify-center xl:items-center'>
                  <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={abouts.years} />+
                  </span>
                  <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:test-sm'>
                    years of experience
                  </h2>
                </div>
              </div>
            </div>

            <Skills skills={abouts.skills} />
            <Experience experiences={abouts.experiences} />
            <Education educations={abouts.educations} />
          </section>

          <section id="projects" className="scroll-smooth">
            <AnimatedText text="Imagination Trumps Knowledge!"
              className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
            />

            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
              <div className='col-span-12'>
                <FeaturedProject
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
        </Layout>
      </main>
    </>
  )
}