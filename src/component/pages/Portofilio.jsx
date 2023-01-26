import React from "react";

const Portofilio = () => {
  return (
    <section id="home" className="hero py-2">
      <div className="hero-body px-5 mx-auto max-w-screen-lg">
        <div className="flex flex-col first-letter:justify-center mt-5">
          <h2 className="font-bold text-[25px] dakr:text-white">MY PORTFOLIO</h2>
          <p className="dark:text-slate-300">check my best work so far</p>
        </div>

        <div className="p-5">
          <div className="p-2 mb-8  border rounded flex justify-between">
            <div className="w-1/2 images overflow-hidden">
              <img className="w-full object-cover" src="/portfolio1.png" alt="portfolio" />
            </div>
            <div className="py-2 px-5 w-1/2">
              <h2 className="font-bold mb-2 size-[20px] dark:text-blue-500">Front Design for food Website Aplication</h2>
              <p className="text-justify mb-4 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis impedit nihil laborum quo iure autem provident id praesentium voluptate expedita, vel quisquam vitae eos. Delectus aspernatur maxime corrupti?.
              </p>

              <div className="mb-5">
                <h2 className="font-semibold text-blue-500 mb-2">Technology Use :</h2>
                <div className="flex gap-2 items-center">
                  <div className="css p-2 rounded-full border flex justify-center items-center">
                    <img className="w-[40px]" src="./html_logo.png" alt="" />
                  </div>
                  <div className="css p-2 rounded-full border flex justify-center items-center">
                    <img className="w-[40px]" src="./css_logo.png" alt="" />
                  </div>
                  <div className="css p-2 rounded-full border flex justify-center items-center">
                    <img className="w-[40px]" src="./javascript_logo.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="sitelink">
                <button className="w-full py-2 px-5 rounded bg-blue-500 hover:text-white">
                  <a href="#">VISIT SITE</a>
                </button>
              </div>
            </div>
          </div>
          <div className="p-2 mb-8  border rounded flex justify-between">
            <div className="w-1/2 images overflow-hidden">
              <img className="w-full object-cover" src="/portfolio2.png" alt="portfolio" />
            </div>
            <div className="py-2 px-5 w-1/2">
              <h2 className="font-bold mb-2 size-[20px] dark:text-blue-500">Front End Desgin for Landing Page of Food Aplication</h2>
              <p className="text-justify mb-4 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis impedit nihil laborum quo iure autem provident id praesentium voluptate expedita, vel quisquam vitae eos. Delectus aspernatur maxime corrupti?.
              </p>

              <div className="mb-5">
                <h2 className="font-semibold text-blue-500 mb-2">Technology Use :</h2>
                <div className="flex gap-2 items-center">
                  <div className="css p-2 rounded-full border flex justify-center items-center">
                    <img className="w-[40px]" src="./html_logo.png" alt="" />
                  </div>
                  <div className="css p-2 rounded-full border flex justify-center items-center">
                    <img className="w-[40px]" src="./css_logo.png" alt="" />
                  </div>
                  <div className="css p-2 rounded-full border flex justify-center items-center">
                    <img className="w-[40px]" src="./javascript_logo.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="sitelink">
                <button className="w-full py-2 px-5 rounded bg-blue-500 hover:text-white">
                  <a target="_blank" href="https://fiqrireomy.github.io/">
                    VISIT SITE
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="p-2 mb-5  border rounded flex justify-between">
            <div className="w-1/2 images overflow-hidden">
              <img className="w-full object-cover" src="/portfolio3.png" alt="portfolio" />
            </div>
            <div className="py-2 px-5 w-1/2">
              <h2 className="font-bold mb-2 size-[20px] dark:text-blue-500">Fullstack E-commerce Food Website Application</h2>
              <p className="text-justify mb-4 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis impedit nihil laborum quo iure autem provident id praesentium voluptate expedita, vel quisquam vitae eos. Delectus aspernatur maxime corrupti?.
              </p>

              <div className="mb-5">
                <h2 className="font-semibold text-blue-500 mb-2">Technology Use :</h2>
                <div className="flex gap-2 items-center">
                  <div className="css p-2 rounded-full border flex justify-center items-center">
                    <img className="w-[40px]" src="./html_logo.png" alt="" />
                  </div>
                  <div className="css p-2 rounded-full border flex justify-center items-center">
                    <img className="w-[40px]" src="./css_logo.png" alt="" />
                  </div>
                  <div className="css p-2 rounded-full border flex justify-center items-center">
                    <img className="w-[40px]" src="./javascript_logo.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="sitelink">
                <button className="w-full py-2 px-5 rounded bg-blue-500 hover:text-white">
                  <a href="#">VISIT SITE</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofilio;
