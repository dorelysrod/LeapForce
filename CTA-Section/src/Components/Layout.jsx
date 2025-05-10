import arrowIcon from '../assets/Icon/arrow.svg';
import arrowLine from '../assets/Icon/arrowLine.svg';
import '../App.css';

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
    <button
      className="absolute bottom-4 right-4 w-14 h-14 p-4 gap-1 rounded border-2 border-white/30 flex items-center justify-center 
                 hover:border-[#1B242680] focus:border-[#1B2426CC] disabled:border-[#1B24264D] transition"
      aria-label="More about this action"
    >
      <img src={arrowLine} alt="" className="w-4 h-4" />
    </button>
  </article>
);

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
    <button
      className="relative flex items-center gap-2 px-6 py-3 rounded border-2 border-transparent transition
                 text-[#BF564D] hover:text-[#A6433A] focus:text-[#59201B] disabled:text-[#A0A0A0]
                 font-ttcommons-normal text-base sm:text-[19px] hover:border-[#1B242680] focus:border-[#1B2426CC] 
                 disabled:border-[#1B24264D]"
      disabled={button.disabled}
      aria-label={button.text}
    >
      {/* Text */}
      <span>{button.text}</span>
      {/* Icon */}
      <img
        src={arrowIcon}
        alt=""
        className="w-4 h-4 transition-colors
                   hover:invert-[36%] hover:sepia-[76%] hover:saturate-[369%] hover:hue-rotate-[330deg] hover:brightness-[100%] hover:contrast-[95%]
                   focus:invert-[22%] focus:sepia-[41%] focus:saturate-[695%] focus:hue-rotate-[330deg] focus:brightness-[95%] focus:contrast-[91%]
                   disabled:opacity-50"
      />
    </button>
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
