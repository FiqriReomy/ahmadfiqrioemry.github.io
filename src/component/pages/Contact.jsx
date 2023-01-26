import React from "react";

const Contact = () => {
  return (
    <>
      {/* Contact Me Section Area Start */}
      <section id="contactme" className="py-[19px] bg-blue-500 dark:bg-blue-900">
        <div className="contact px-5 mx-auto max-w-screen-md">
          <div className="container ">
            <div className="title flex flex-col items-center justify-center mb-5">
              <p className="text-[18px] dark:text-white">FOR COLLABORATION AND ENGAGEMENT OPPORTUNITIES</p>
              <h2 className="font-bold text-[30px] dark:text-[#0f172a]">CONTACT ME</h2>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="socialmedia flex justify-center gap-2 w-full md:w-1/2 text-[28px]">
                <a className="py-2 px-4" target="_blank" href="https://www.linkedin.com/in/ahmad-fiqri-aa7221173/">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a className="py-2 px-4" href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a className="py-2 px-4" target="_blank" href="https://api.whatsapp.com/send/?phone=082160945033&text&type=phone_number&app_absent=0">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
                <a className="py-2 px-4" href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </div>
              <div className="socialmedia flex justify-center items-center gap-2 w-full md:w-1/2">
                <div className="w-full p-2">
                  <form action="">
                    <div className="field mb-2">
                      <input className="w-full py-1 px-2 bg-white text-white" type="text" placeholder="Nama" />
                    </div>
                    <div className="field mb-2">
                      <input className="w-full py-1 px-2 bg-white text-white" type="text" placeholder="Email" />
                    </div>
                    <div className="field mb-2">
                      <input className="w-full py-1 px-2 bg-white text-white" type="text" placeholder="Nama" />
                    </div>
                    <div className="field mb-2">
                      <input className="w-full py-1 px-2 bg-white text-white" type="text" placeholder="Phone" />
                    </div>
                    <div className="field mb-2">
                      <textarea className="w-full py-1 px-2 bg-white text-white" name="text" id="" cols="30" rows="10" placeholder="Type Your Message Here ..."></textarea>
                    </div>
                    <div className="field">
                      <button className="py-2 px-5 rounded bg-black text-white cursor-pointer">SEND</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact Me Section Area end--> */}
    </>
  );
};

export default Contact;
