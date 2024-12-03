'use client';
import { FloatingDockContainer } from './FloatingDockContainer';

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10" id="contact">
      <div className="flex flex-col items-center p-0 gap-0 h-[20vh]">
        <h1 className="heading lg:max-w-[45vw]">Get In Touch</h1>
        <FloatingDockContainer />
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright {`© ${new Date().getFullYear()} Harriet Ayugi`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
