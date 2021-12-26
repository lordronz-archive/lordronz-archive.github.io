/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

import Footer from '@/components/Footer';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <main>
        <section className='bg-black text-primary-50'>
          <div className='layout flex flex-col justify-center items-center min-h-screen text-center'>
            <h1>LordRonz{"'"}s Archive repository</h1>
            <p className='mt-2 text-md text-primary-50'>
              The purpose of this account is to store{' '}
              <CustomLink href='https://github.com/LordRonz/'>my main account{"'"}s</CustomLink> archived repo so that it
              doesn{"'"}t clutter the repository list.
            </p>
            <p className='mt-2 text-md text-primary-50'>
              <CustomLink href='https://github.com/orgs/lordronz-archive/repositories'>See the repositories</CustomLink>
            </p>

            <p className='mt-2 text-md text-primary-50'>Below are my github accounts</p>

            <ButtonLink className='mt-6' href='#' variant='primary'>
              Work In Progress
            </ButtonLink>

            <Footer />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
