// Layout.js
import React from 'react';
import CTAItem from './CTAitem';
import Button1 from '../Components/Buttons/Button1';
import '../App.css';

const Layout = ({ content = {} }) => {
  const {
    label = '',
    heading = '',
    subheading = '',
    description = '',
    button = {},
    ctaItems = [],
  } = content;

  return (
    <main className="bg-[#FFFCFA] min-h-screen">
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <header className="text-center pt-12">
          <p className="font-ttcommons-normal text-[15px] leading-[16px] tracking-[0.02em] text-[#39494D]">
            {label}
          </p>
          <h1 className="text-3xl sm:text-4xl font-ttcommons-demibold leading-snug sm:leading-[48px] tracking-tight mt-2">
            <strong>{heading}</strong>
            <br />
            <span className="font-alpina-light text-[32px] sm:text-[42px] leading-[40px] sm:leading-[48px] tracking-[-0.03em] block">
              {subheading}
            </span>
          </h1>
          <p className="font-ttcommons-normal text-[17px] sm:text-[19px] leading-[24px] tracking-[0%] text-[#1E2526] opacity-80 mt-4">
            {description}
          </p>

          {button?.text && (
            <div className="mt-4 flex justify-center">
              <Button1 text={button.text} disabled={button.disabled} />
            </div>
          )}
        </header>

        <section className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-full sm:max-w-[720px] md:max-w-[1600px] mx-auto">
            {ctaItems.map((item, i) => (
              <CTAItem key={i} {...item} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Layout;
