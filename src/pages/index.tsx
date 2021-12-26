/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

import Footer from '@/components/Footer';
import ArrowLink from '@/components/links/ArrowLink';
import CustomLink from '@/components/links/CustomLink';
import ParticleComponent from '@/components/ParticleComponent';
import Seo from '@/components/Seo';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <main>
        <ParticleComponent />
        <section className='bg-transparent text-primary-50'>
          <div className='layout flex flex-col justify-center items-center min-h-screen text-center'>
            <h1 className='z-10'>LordRonz{"'"}s Archive</h1>
            <p className='mt-2 text-md text-primary-50 z-10'>
              The purpose of this account is to store{' '}
              <CustomLink href='https://github.com/LordRonz/'>my main account{"'"}s</CustomLink> archived repo so that it
              doesn{"'"}t clutter the repository list.
            </p>
            <p className='text-md text-primary-50 z-10'>
              AND to fulfill someone{"'"}s desire for the{' '}
              <CustomLink href='https://github.com/matteobruni/tsparticles'>particle component</CustomLink>.
            </p>
            <p className='mt-4 text-md text-primary-50 z-10'>
              <CustomLink href='https://github.com/orgs/lordronz-archive/repositories'>See the repositories</CustomLink>
            </p>

            <p className='mt-4 text-md text-primary-50 z-10'>Below are my github accounts</p>

            <div className='z-10 flex gap-x-10 mt-4'>
              <ArrowLink className='mt-6' href='https://github.com/lordronz/' variant='primary'>
                LordRonz
              </ArrowLink>
              <ArrowLink className='mt-6' href='https://github.com/znordrol/' variant='primary'>
                znordrol
              </ArrowLink>
            </div>

            <Footer />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
