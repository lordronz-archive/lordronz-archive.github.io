import React from 'react';

import Contact from '@/components/Contact';

const Footer = (): JSX.Element => (
  <footer className='absolute bottom-2'>
    <div className='flex flex-1 flex-col gap-y-3'>
      <Contact />© Aaron Christopher {new Date().getFullYear()}
    </div>
  </footer>
);

export default Footer;
