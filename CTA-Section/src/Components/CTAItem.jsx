import React from 'react';
import Button2 from '../Components/Buttons/Button2';

const CTAItem = ({ title, description, image }) => (
  <article className="relative w-full h-[400px] sm:h-[450px] md:h-[515px] rounded-[4px] overflow-hidden">
    <img src={image} alt="Call to Action Background" className="w-full h-full object-cover" />
    <footer
      className="absolute bottom-0 left-0 w-full h-1/2 opacity-80"
      style={{
        background: 'linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0) 100%)',
      }}
    />
    <div className="absolute bottom-4 left-4 right-20">
      <h3 className="font-ttcommons-demibold text-white text-xl sm:text-2xl leading-snug tracking-tight">
        {title}
      </h3>
      <p className="font-ttcommons-regular text-[19px] leading-[24px] tracking-normal font-medium text-white/80 mt-1 opacity-50">
        {description}
      </p>
    </div>
    <Button2 />
  </article>
);

export default CTAItem;
