import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Button from "../../components/Button";
import hero2Image from "../../public/images/hero3image.png";
import strikeHeroImage from "../../public/images/strikeHeroImage.png";
import strikeBoxingImage from "../../public/images/strikeBoxingImage.png";
import strikeMmaImage from "../../public/images/strikeMmaImage.png";
import strikeMuayThaiImage from "../../public/images/strikeMuayThaiImage.png";
import ClassesSection from "../../components/ClassesSection";
import TrainerSection from "../../components/TrainerSection";
import trainer1 from "../../public/images/tonyja.jpeg";
import test1img from "../../public/images/testimonial1img.png";
import test2img from "../../public/images/testimonial2img.png";
import test3img from "../../public/images/testimonial3img.png";
import Testimonial from "../../components/Testimonial";
import FaqSection from "../../components/FaqSection";
import FooterHero from "../../components/FooterHero";
import Footer from "../../components/Footer";
export default function Page() {
    const qnaData = [
        {
          question: "Do You Offer Any Trials?",
          answer: `Yes, we do! To ensure that you get to experience our excellent services with no commitment, 
          we offer a 1-week trial pass to anyone interested. This pass allows you to try out any classes 
          we offer, so you can know exactly what to expect.`,
        },
        {
          question: "Will I Learn Self-Defence?",
          answer: `At Rage Fitness, we never advocate the use of violence. However, we do teach everyone the 
          skills necessary to learn how to defend themselves in a life-threatening situation. Since all our 
          students are taught by former professional combat sports athletes and world-renowned 
          combat sports coaches, you can be sure to learn both crucial effective techniques and gain a 
          lot of confidence.`,
        },
        {
          question: "How Do I Sign Up?",
          answer: `Signing up with us is easy! All you have to do is give us a call and book your gym tour, along 
          with your class choice. When you come to the fitness center for your tour, you can then sign up 
          in person with our team, for a 1-week trial FULL Access to our classes. We look forward to 
          meeting you and starting your fitness journey!`,
        },
      ];
  const testimonialData = [
    {
      name: "KRISHNA DHAKAL",
      image: test1img,
      rating: 5,
      text: `I started bringing my son here for off season 
              training for football . I was referred by my friend. 
              I have to say we have come to love the gym . 
              We are there everyday of the week and everyone 
              is so nice and it’s just a great positive environment. 
              I highly recommend bringing your kids and yourself here.`,
    },
    {
      name: "SEDRINA TAMANG",
      image: test2img,
      rating: 5,
      text: `I started bringing my son here for off season 
                  training for football . I was referred by my friend. 
                  I have to say we have come to love the gym . 
                  We are there everyday of the week and everyone 
                  is so nice and it’s just a great positive environment. 
                  I highly recommend bringing your kids and yourself here.`,
    },
    {
      name: "BISHOW RIMAL",
      image: test3img,
      rating: 5,
      text: `I started bringing my son here for off season 
                      training for football . I was referred by my friend. 
                      I have to say we have come to love the gym . 
                      We are there everyday of the week and everyone 
                      is so nice and it’s just a great positive environment. 
                      I highly recommend bringing your kids and yourself here.`,
    },
  ];
  const slides = [
    trainer1,
    trainer1,
    trainer1,
    trainer1,
    trainer1,
    trainer1,
    trainer1,
  ];
  const cardsData = [
    {
      text: "MMA",
      img: strikeMmaImage,
      link: "/",
    },
    {
      text: "MUAY THAI",
      img: strikeMuayThaiImage,
      link: "/",
    },
    {
      text: "BOXING",
      img: strikeBoxingImage,
      link: "/",
    },
  ];
  const hero1Text = `At Rage fitness, we offer the best-rated classes for MMA in Kathmandu, Nepal. Through our hard work, specialist instructors, high-grade equipment, and passion for helping people learn, we have managed to create a community that welcomes all levels and ages. You won’t find any other fitness centre in the area that offers our high-quality classes for the fantastic prices we have. We are the area’s number one choice for fitness centre's, so don’t miss out!`;
  return (
    <div className="w-screen">
      <Navbar />
      <div className=" bg-black font-header text-header3 md:text-header text-lightyellow text-center py-12 overflow-x-hidden">
        <div className="w-full md:flex px-10 mt-12 mb-8 md:mb-16  items-center md:mt-12 bg-black text-white">
          <div className="md:px-4">
            <div className="font-header text-header2 md:text-header text-start">
              <span className="text-white">LEARN ALL TYPES</span>
              <br />
              <span className="text-red">OF STRIKING</span>
            </div>

            <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-6 py-2">
              <Button
                text={"GET 1 WEEK TRIAL PASS"}
                isLink={true}
                to="/"
                fill={true}
                size="md"
              />

              <Button
                text={"+977 - 9812345678"}
                isLink={true}
                to="/"
                fill={false}
                size="md"
              />
            </div>
          </div>
        </div>
        <Hero
          isLeft={true}
          image={strikeHeroImage}
          secondaryHeader={[
            `JOIN THE BEST MMA FITNESS `,
            `GYM IN Nepal (KATHMANDU)`,
          ]}
          paragraph={hero1Text}
          button1Text="GET 1 WEEK TRIAL PASS"
          imageHeight={615}
          imageWidth={508}
          animation={true}
        />
        <ClassesSection
          cardsData={cardsData}
          header1={`STRIKING PROGRAMS WE`}
          header2={`OFFER FOR`}
          header3={`EVERY AGE`}
          subtitle={`We offer programs for every age. Whether you are a beginner or an expert, we have something 
        for you. Our fitness center is designed to meet the needs of everyone.`}
        />
        <Hero
          isLeft={false}
          image={hero2Image}
          button1Text="GET 1 WEEK TRIAL PASS"
          secondaryHeader={[
            "MASTER THE ART OF STANDUP",
            "WITH OUR TEMECULA",
            "KICKBOXING CLASSES",
          ]}
          paragraph={`When you train with our fitness center for MMA in Temecula CA, you get plenty of benefits. First and foremost, our specially designed classes cater to any age and skill level. The perks continue with our talented instructor list, including former professional combat athletes and coaches, and a huge range of classes to choose from for MMA and fitness. At Dan Henderson’s Athletic Fitness Center, you’ll be a part of a supportive community from the teachers and fellow students, and all at extremely competitive prices!`}
          imageHeight={571}
          imageWidth={545}
          animation={true}
        />
        <TrainerSection
          header1={`OUR WOLRD CLASS`}
          header2={`STRIKING COACHES`}
          slides={slides}
        />
        <Testimonial
          testimonialData={testimonialData}
          headerWhite={`REVIEWS FROM OUR `}
          headerLight={`KICKBOXING STUDENTS`}
        />
        <FaqSection qnaData={qnaData} />
        <FooterHero />
      </div>
      <Footer/>
    </div>
  );
}
