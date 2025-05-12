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
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-col gap-6 h-full">
        {/* Header Section */}
        <header className="mx-auto pt-12 flex flex-col items-center text-center w-full max-w-md sm:max-w-2xl md:max-w-3xl gap-6 border-t border-[#E0E0E0]">
          <p className="font-ttcommons-normal text-[14px] md:text-[15px] text-[#39494D]">
            {label}
          </p>
          <h1 className="font-ttcommons-demibold text-[36px] md:text-[40px] text-center">
            {heading}
            <br />
            <span className="font-alpina-light text-[24px] md:text-[32px] block">
              {subheading}
              <span className="font-ttcommons-demibold">
                {" "}
                {subheadingHighlight}
              </span>
            </span>
          </h1>

          <p className="font-ttcommons-normal text-[17px] md:text-[19px] text-[#1E2526] opacity-80 text-center">
            {description}
          </p>

          {button?.text && (
            <div className="flex justify-center">
              <Button1 text={button.text} disabled={button.disabled} />
            </div>
          )}
        </header>

        {/* CTA Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] max-w-[1312px] h-[515px] mx-auto w-full">
            {ctaItems.map((item, i) => (
              <article
                key={i}
                className="relative w-full h-[515px] overflow-hidden gap-[10px]"
              >
                <img
                  src={item.image}
                  alt="Call to Action Background"
                  className="w-[644px] h-[515px] object-cover rounded-[4px]"
                />
                <footer
                  className="absolute bottom-0 left-0 w-full h-1/2 opacity-80"
                  style={{
                    background:
                      "linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0) 100%)",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-20 flex justify-between w-[303px] sm:w-[596px] sm:h-[64px]">
                  <div>
                    <h3 className="font-ttcommons-demibold text-white text-[22px] md:text-[28px] leading-snug tracking-tight">
                      {item.title}
                    </h3>

                    <p className="font-ttcommons-normal text-[19px] leading-[24px] tracking-normal font-medium text-white/80 mt-1 opacity-50">
                      {item.description}
                    </p>
                  </div>
                </div>
                <Button2 />
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Layout;
