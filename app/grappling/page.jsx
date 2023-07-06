import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Button from "../../components/Button";
import hero2Image from "../../public/images/grapplingHero2Image.png";
import grapplingHero1Image from "../../public/images/grapplingHero1Image.png";
import grapplingBBJImage from "../../public/images/grapplingBbjImage.png";
import grapplingNogiImage from "../../public/images/grapplingNo-giImage.png";
import grapplingWrestlingImage from "../../public/images/grapplingWrestlingImage.png";
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
      question: "Do I Need To Be Fit To Do BJJ?",
      answer: `The great thing about BJJ is that you can train it regardless of age and fitness levels. You will 
      build stamina, flexibility, agility, and muscle strength through doing different types of exercises, 
      so even if you don’t start fit, you soon will be! It is all about technique rather than strength, and 
      anyone can learn the necessary skills as long as they put in the hard work.`,
    },
    {
      question: "What Training Gear Is Required For Grappling?",
      answer: `AWe advise that you wear whatever you feel most comfortable in. In BJJ, it is compulsory to wear 
      a Gi; however, you can wear a rashguard, tank top, t-shirt, and shorts or leggings in No-Gi. In 
      wrestling, you can wear shorts, a t-shirt, and wrestling shoes.`,
    },
    {
      question: "Will I Learn Self-Defense With BJJ?",
      answer: `When you sign up for the classes we offer for BJJ in Temecula CA, you will learn a lot of useful 
      self-defensive skills from our highly qualified instructors. So, while at Dan Henderson’s Athletic 
      Fitness Center, we never advocate the use of violence. You will be able to use your acquired BJJ 
      knowledge in real-world settings if you are ever in a life-threatening situation. Self-defense is 
      an extremely important tool to learn, and you will receive the best training with us.`,
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
      text: "BBJ",
      img: grapplingBBJImage,
      link: "/",
    },
    {
      text: "NO-GI",
      img: grapplingNogiImage,
      link: "/",
    },
    {
      text: "Wrestling",
      img: grapplingWrestlingImage,
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
              <span className="text-red">OF GRAPPLING</span>
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
          image={grapplingHero1Image}
          secondaryHeader={[`GET THE BEST TRAINING FOR`, `BJJ IN Nepal`]}
          paragraph={`Whether you are looking to tone up, get fit, or for self-defense reasons, at Dan Henderson’s Athletic Fitness Center, we have the best BJJ in Temecula CA. BJJ is Brazilian jiu-jitsu, the art of grappling. As a martial artist, you will learn to take your opponent down using leverage and positioning. You will also learn about pressure points on the human body, how to defend against attacks, and how to submit your opponent.`}
          button1Text="GET 1 WEEK TRIAL PASS"
          imageHeight={615}
          imageWidth={508}
          animation={true}
        />
        <ClassesSection
          cardsData={cardsData}
          header1={`GRAPPLING PROGRAMS WE`}
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
            "MASTER THE ART OF GRAPPLING",
            "WITH OUR TEMECULA CA BBJ",
            "CLASSES",
          ]}
          paragraph={`At Rage Fitness Center, you can join our range of classes for Brazilian jiu-jitsu wrestling and master the art of grappling in a friendly, fun, and safe environment. You’ll be taught by former 
          combat athletes and coaches, so you know that your time will be well spent. If you’re interested in mastering this fighting style and want to learn from an experienced team, our BJJ in Temecula CA classes welcomes students of all levels. We offer classes for adults, teens, and children so everyone can improve their skills.`}
          imageHeight={571}
          imageWidth={545}
          animation={true}
        />
        <TrainerSection
          header1={`OUR WOLRD CLASS`}
          header2={`GRAPPLING COACHES`}
          slides={slides}
        />
        <Testimonial
          testimonialData={testimonialData}
          headerWhite={`REVIEWS FROM OUR `}
          headerLight={`BBJ STUDENTS`}
        />
        <FaqSection qnaData={qnaData} />
        <FooterHero />
      </div>
      <Footer />
    </div>
  );
}
