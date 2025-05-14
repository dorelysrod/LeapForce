import React from "react";
import Button1 from "../Components/Buttons/Button1";
import Button2 from "../Components/Buttons/Button2";
import "../App.css";

const Layout = ({ content = {} }) => {
  const {
    label = "",
    heading = "",
    subheading = "",
    subheadingHighlight = "",
    description = "",
    button = {},
    ctaItems = [],
  } = content;

  return (
    <main className="bg-[#FFFCFA] min-h-screen">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-col gap-6 md:gap-12 h-full mb-[30px] md:mb-[96px]">
        <header className="mx-auto pt-8 flex flex-col items-center text-center w-full max-w-3xl gap-2 border-t border-[#E0E0E0]">
          {/* Optional label */}
          {label && (
            <p className="font-ttcommons-regular text-[14px] leading-[16px] tracking-[0.02em] text-[#39494D] md:text-[15px]">
              {label}
            </p>
          )}

          {/* Main Title */}
          <h1 className="text-[32px] xs:text-[36px] sm:text-[40px] font-ttcommons-demibold leading-tight tracking-tight">
            {heading}
            <br />
            <span className="text-[34px] xs:text-[38px] sm:text-[46px] font-light font-alpina-light">
              {subheading}{" "}
              <span className="text-[32px] xs:text-[36px] sm:text-[40px] font-ttcommons-demibold">
                {subheadingHighlight}
              </span>
            </span>
          </h1>

          {/* Optional Description */}
          {description && (
            <p className="font-ttcommons-regular text-[23px] leading-[32px] tracking-[0em] text-[#1E2526] opacity-80 md:text-[21px] md:leading-[24px] md:tracking-[0em]">
              {description}
            </p>
          )}

          {/* Optional Button */}
          {button?.text && (
            <Button1 text={button.text} disabled={button.disabled} />
          )}
        </header>

        {/* CTA Section */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-6 max-w-[1312px] mx-auto w-full m-1">
            {ctaItems.map((item, index) => (
              <article
                key={item.id || index}
                className="relative w-full h-[515px] overflow-hidden rounded-lg group"
              >
                <img
                  src={item.image}
                  alt="Call to Action"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 rounded-lg" />

                <div className="absolute bottom-[16px] left-[16px] right-[16px] z-20 flex flex-row items-end justify-between gap-4">
                  {/* Text */}
                  <div className="text-white flex flex-col gap-2 w-[60%] lg:w-full break-words text-pretty">
                    <h3 className="text-[28px] leading-[32px] font-ttcommons-demibold">
                      {item.title}
                    </h3>
                    <p className="text-[17px] leading-[24px] font-[450] opacity-50 sm:text-[19px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="shrink-0">
                    <Button2 />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Layout;
