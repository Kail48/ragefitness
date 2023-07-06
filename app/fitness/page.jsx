import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Button from "../../components/Button";
import hero2Image from "../../public/images/fitnessHero2Image.png";
import fitnessHero1Image from "../../public/images/fitnessHero1Image.png";
import fitnessCardioImage from "../../public/images/fitnessCardioImage.png";
import fitnessSpinImage from "../../public/images/fitnessSpinImage.png";
import fitnessStrengthImage from "../../public/images/fitnessStrengthImage.png";
import fitnessYogaImage from "../../public/images/fitnessYogaImage.png";
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
      text: "CARDIO BAG",
      img: fitnessCardioImage,
      link: "/",
    },
    {
      text: "SPIN",
      img: fitnessSpinImage,
      link: "/",
    },
    {
      text: "STRENGTH & CONDITIONING",
      img: fitnessStrengthImage,
      link: "/",
    },
    {
      text: "YOGA",
      img: fitnessYogaImage,
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
            <div className="font-header text-[36px] md:text-[80px] md:leading-snug text-start">
              <span className="text-white">GET IN SHAPE WITH OUR</span>
              <br />
              <span className="text-red">FITNESS PROGRAM</span>
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
          image={fitnessHero1Image}
          secondaryHeader={[`JOIN THE BEST FITNESS `, `PROGRAM IN NEPAL`]}
          paragraph={`If you’re looking for the best fitness program in Temecula CA, then you have come to the right place. At Dan Henderson’s Athletic Fitness Center, we are specialists in a variety of fitness programs, activities, and classes, including cardio bags, spinning, yoga, and strengthening and conditioning. All our instructors are extremely qualified, with all of them having backgrounds in professional athletics and coaching. With us, you’ll get the best possible classes in a fun and comfortable environment. You can trust us to teach you new skills, improve your self-esteem, and make you fall in love with getting fit.`}
          button1Text="GET 1 WEEK TRIAL PASS"
          imageHeight={615}
          imageWidth={508}
          animation={true}
        />
        <ClassesSection
          cardsData={cardsData}
          header1={`FITNESS PROGRAMS WE`}
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
            "GET IN SHAPE WITH ANY OF ",
            "FITNESS PROGRAMS",
            "IN KATHMANDU",
          ]}
          paragraph={`At Rage Fitness Center, you can join our range of classes for Brazilian jiu-jitsu wrestling and master the art of grappling in a friendly, fun, and safe environment. You’ll be taught by former combat athletes and coaches, so you know that your time will be well spent. If you’re interested in mastering this fighting style and want to learn from an experienced team, our BJJ in Temecula CA classes welcomes students of all levels. We offer classes for adults, teens, and children so everyone can improve their skills.`}
          imageHeight={571}
          imageWidth={545}
          animation={true}
        />
        <TrainerSection
          header1={`OUR WOLRD CLASS`}
          header2={`FITNESS COACHES`}
          slides={slides}
        />
        <Testimonial
          testimonialData={testimonialData}
          headerWhite={`REVIEWS FROM OUR `}
          headerLight={`FITNESS STUDENTS`}
        />
        <FaqSection qnaData={qnaData} />
        <FooterHero />
      </div>
      <Footer />
    </div>
  );
}
