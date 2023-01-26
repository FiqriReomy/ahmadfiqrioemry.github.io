import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* <!-- Menu section (hero area) start --> */}
      <section id="home" className="hero py-2">
        <div className="hero-body px-5 mx-auto max-w-screen-lg">
          <div className="container mt-16 md:flex block">
            <div className="text w-full md:w-1/2">
              <h2 className="font-bold text-[36px] dark:text-blue-500">Hi,My Names Fiqri</h2>
              <h3 className="font-semibold text-[20px] mb-5 dark:text-white"> Web Developer | Engineer</h3>
              <p className="mb-5 dark:text-slate-200">
                Hi, im graduate as bachelor of Engineer with focus on maintance, Experienced on field as inspector and surveyor to perform and manage a controll to project or product. Passionate and highly motivate on challange and learning
                new things especially related to a technology. Having good communication and coordination skills.
              </p>
              <Link to="/contact">
                <button className="contactbtn py-5 px-2 bg-blue-500 rounded-md flex items-center gap-2  text-black hover:gap-[30px] hover:text-white transition-all">
                  CONTACT ME
                  <i className="flex items-center">
                    <ion-icon name="send-outline"></ion-icon>
                  </i>
                </button>
              </Link>
            </div>
            <div className="display w-full md:w-1/2">
              <div className="w-full flex justify-center items-center relative">
                <div className="mask1">
                  <img className="w-[360px] z-[-99]" src="./display_with_border.png" alt="displaypicture" />
                </div>
              </div>

              <div className="flex justify-center md:hidden mt-5">
                <button className="contactbtn py-5 px-2 bg-blue-500 rounded-md flex items-center gap-2  text-black active:gap-5 active:text-white transition-all">
                  CONTACT ME
                  <i className="flex items-center">
                    <ion-icon name="send-outline"></ion-icon>
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Menu section (hero area) end --> */}
      {/* <!-- Portfolio section Area start --> */}
      <section id="portfolio" className="py-5">
        <div className="hero-body px-5 mx-auto max-w-screen-lg">
          <div className="container mt-10">
            <div className="title flex justify-center">
              <h2 className="font-bold text-[30px] dark:text-white">MY PORTFOLIO</h2>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="display w-full md:w-1/2 lg:w-1/3 p-2">
                <div className="box w-full">
                  <div className="images overflow-hidden">
                    <img className="w-full object-cover rounded" src="./portfolio1.png" alt="" />
                  </div>
                  <div className="text mt-2 p-2 border rounded">
                    <h2 className="dark:text-white font-semibold">Front End Desgin for Landing Page of Food Aplication</h2>
                  </div>
                </div>
              </div>

              <div className="display w-full md:w-1/2 lg:w-1/3 p-2">
                <div className="box w-full">
                  <div className="images overflow-hidden">
                    <img className="w-full object-cover rounded min-h-[235px]" src="./portfolio2.png" alt="" />
                  </div>
                  <div className="text mt-2 p-2 border rounded">
                    <h2 className="dark:text-white font-semibold">Front End Design Website imitation Harisenin.com</h2>
                  </div>
                </div>
              </div>

              <div className="display w-full md:w-1/2 lg:w-1/3 p-2">
                <div className="box w-full">
                  <div className="images  overflow-hidden">
                    <img className="w-full object-cover rounded " src="./portfolio3.png" alt="" />
                  </div>
                  <div className="text mt-2 p-2 border rounded">
                    <h2 className="dark:text-white font-semibold">Fullstack E-commerce Food Website Application</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link className="py-2 px-7 border rounded font-medium hover:bg-blue-500 hover:text-white transition-all dark:bg-blue-500 dark:border-blue-500" to="/portfolio">
            SELENGKAPNYA
          </Link>
        </div>
      </section>
      {/* <!-- Portfolio section Area end--> */}

      {/* <!-- About section Area start--> */}
      <section id="about" className="py-5">
        <div className="hero-body px-5 mx-auto max-w-screen-lg">
          <div className="container mt-5 mb-5">
            <div className="title flex flex-col justify-center items-center mb-5">
              <h2 className="font-bold text-[30px] dark:text-white">ABOUT ME</h2>
              <p className="dark:text-slate-200">My Introduction</p>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="images w-full md:w-1/2 p-2 border">
                <img src="./aboutimages.jpg" alt="aboutme" />
              </div>
              <div className="content w-full md:w-1/2 px-5 py-2">
                <div className="about p-2 text-justify dark:text-slate-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consectetur sapiente nam minima vitae, sed at voluptas perferendis quisquam qui placeat, ex cum voluptatem fuga distinctio provident? Ab laborum fugit
                  iure recusandae quasi.
                </div>
                <div className="flex justify-center gap-5 mt-2">
                  <div className="experience border rounded w-[120px] dark:bg-white">
                    <div className="text-[30px] font-bold flex justify-center">+04</div>
                    <div className="text-[18px] text-center">Years Experiece</div>
                  </div>
                  <div className="experience border rounded w-[120px] dark:bg-white">
                    <div className="text-[30px] font-bold flex justify-center">+10</div>
                    <div className="text-[18px] text-center">Usefull Soft Skills</div>
                  </div>
                  <div className="experience border rounded w-[120px] dark:bg-white">
                    <div className="text-[30px] font-bold flex justify-center">+03</div>
                    <div className="text-[18px] text-center">Companies Works</div>
                  </div>
                </div>
                <div className="download_cv mt-5 flex justify-center items-center">
                  <button className="py-2 px-5 rounded border bg-blue-500 font-medium hover:text-white active:scale-90 dark:border-blue-500">
                    <a href="https://drive.google.com/u/0/uc?id=121hRamXPR64xoXxslqrlu0MD_zQvViQB&export=download"> GET MY RESUME </a>
                    <i className="text-[25px]">
                      <ion-icon name="download-outline"></ion-icon>
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About section Area end--> */}
    </div>
  );
};

export default Home;
