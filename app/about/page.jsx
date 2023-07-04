import React from "react";
import Footer from "../../components/Footer"
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import heroImage from "../../public/images/hero1image.png";
import Button from "../../components/Button";
import Videoplayer from "../../components/Vidplayer";
import FooterHero from "../../components/FooterHero";
export default function About() {
  return (
    <div className="w-screen ">
      <Navbar />
      <div className=" bg-black font-header text-header3 md:text-header text-lightyellow text-center py-12 overflow-x-hidden">
        <Hero
          isLeft={false}
          image={heroImage}
          header={["ABOUT", "RAGE FITNESS"]}
          subtitle="IN THE CAGE AND IN LIFE - COME TRAIN WITH US"
          button1Text="GET 1 WEEK TRIAL PASS"
          button2Text="+977 - 9812345678"
          imageHeight={571}
          imageWidth={545}
          animation={false}
        />

        <div className="w-full md:flex px-10 mt-12 mb-8 md:mb-16 gap-x-16 md:mt-20 bg-black text-white">
          <div className="w-96 h-full">
            <Videoplayer src={"/videos/aboutGymVid.mp4"} />
          </div>
          <div className="px-4 ">
            <div className="font-header leading-6 text-[18px]  md:text-header2 text-start text-lightyellow whitespace-nowrap">
              <span className="">WE HAVE CLASSES TO MEET</span>
              <br />
              <span className="">THE NEEDS OF EVERYONE</span>
            </div>

            <div>
              <p className="font-para text-para text-justify whitespace-normal overflow-hidden mt-4">
                Rage Fitness Center offers classes and programs to meet the
                needs of everyone regardless of age or previous experience.
                Whether you’re into cardio, yoga, spin, kettlebells, boxing, Jiu
                Jitsu, MMA, weight lifting, or something else altogether, our
                state-of-the-art facility has just the thing for you.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-6 py-2">
              <Button
                text={"SIGN UP 1 WEEK TRIAL PASS"}
                isLink={true}
                to="/"
                fill={true}
                size="md"
              />
            </div>
          </div>
        </div>
        <div className="hidden  md:flex justify-center items-center md:my-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113026.29755423567!2d85.25646271334247!3d27.715069374448966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190fad455bc1%3A0x4ebe1e2fb2619080!2sRage%20Fitness!5e0!3m2!1sen!2snp!4v1688461442761!5m2!1sen!2snp"
            width="1000"
            height="400"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <FooterHero/>
      </div>
      <Footer />
    </div>
  );
}
