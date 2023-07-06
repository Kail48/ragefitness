import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import hero1Image from "../public/images/hero1image.png";
import hero2Image from "../public/images/hero2image.png";
import hero3Image from "../public/images/hero3image.png";
import strikingcardimg from "../public/images/strikecardimg.png";
import grapplingcardimg from "../public/images/graplingcardimg.png";
import fitnesscardimg from "../public/images/fitnesscardimg.png";
import boxingcardimg from "../public/images/boxingcardimg.png";
import kidscardimg from "../public/images/kidscardimg.png";
import resultscardimg from "../public/images/resultscardimg.png";
import Loading from "./loading";
import ClassesSection from "../components/ClassesSection";
import TrainerSection from "../components/TrainerSection";
import FooterHero from "../components/FooterHero";
import Testimonial from "../components/Testimonial";
import FaqSection from "../components/FaqSection";
import trainer1 from "../public/images/tonyja.jpeg";
import Footer from "../components/Footer";
import test1img from "../public/images/testimonial1img.png";
import test2img from "../public/images/testimonial2img.png";
import test3img from "../public/images/testimonial3img.png";
export default function Home() {
  const testimonialData = [
    {
      name: "KRISHNA DHAKAL",
      image: test1img,
      rating:5,
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
      rating:5,
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
      rating:5,
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
      text: "STRIKING",
      img: strikingcardimg,
      link: "/",
    },
    {
      text: "GRAPPLING",
      img: grapplingcardimg,
      link: "/",
    },
    {
      text: "FITNESS",
      img: fitnesscardimg,
      link: "/",
    },
    {
      text: "BOXING",
      img: boxingcardimg,
      link: "/",
    },
    {
      text: "KIDS",
      img: kidscardimg,
      link: "/",
    },
    {
      text: "RESULTS BASED",
      img: resultscardimg,
      link: "/",
    },
  ];
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
  const hero2paragraph = `At Rage fitness, we offer the best-rated classes for MMA in Kathmandu, Nepal. Through our hard work, specialist instructors, high-grade equipment, and passion for helping people learn, we have managed to create a community that welcomes all levels and ages. You won’t find any other fitness centre in the area that offers our high-quality classes for the fantastic prices we have. We are the area’s number one choice for fitness centre's, so don’t miss out!`;
  return (
    <div className="w-screen ">
      <Navbar />
      <div className=" bg-black font-header text-header3 md:text-header text-lightyellow text-center py-12 overflow-x-hidden">
        <Hero
          isLeft={false}
          image={hero1Image}
          header={["WE MAKE", "CHAMPIONS"]}
          subtitle="IN THE CAGE AND IN LIFE - COME TRAIN WITH US"
          button1Text="GET 1 WEEK TRIAL PASS"
          button2Text="+977 - 9812345678"
          imageHeight={571}
          imageWidth={545}
          animation={false}
        />
        <Hero
          isLeft={true}
          image={hero2Image}
          secondaryHeader={[
            "JOIN THE BEST MMA FITNESS",
            "GYM IN NEPAL(KATHMANDU)",
          ]}
          paragraph={hero2paragraph}
          button1Text="GET 1 WEEK TRIAL PASS"
          imageHeight={615}
          imageWidth={508}
          animation={true}
        />
        <ClassesSection
          cardsData={cardsData}
          header1={`WE HAVE CLASSES FOR`}
          header2={` EVERY AGE`}
          header3={` AND EVERY SKILL LEVEL`}
          subtitle={` We offer programs to suit any individual’s needs. Whether you are a
          beginner or an expert, we have something for you. Our MMA fitness
          center is designed to meet the needs of everyone.`}
        />

        <Hero
          isLeft={false}
          image={hero3Image}
          button1Text="GET 1 WEEK TRIAL PASS"
          secondaryHeader={["BENEFITS OF TRAINING AT ", "OUR RAGE FITNESS"]}
          paragraph={hero2paragraph}
          imageHeight={571}
          imageWidth={545}
          animation={true}
        />
        <TrainerSection
          slides={slides}
          header1={`OUR AWESOME `}
          header2={`COACHES AND TRAINERS`}
          subtitle={`Our coaches are here to meet the needs of everyone regardless of age
          or previous experience. Whether you’re into cardio, yoga, spin,
          kettlebells, boxing, Jiu-Jitsu, MMA, weight lifting, or something else
          altogether, our world-class instructors exist to help you level up and
          become a better you!`}
        />
        <Testimonial testimonialData={testimonialData} />
        <FaqSection qnaData={qnaData} />
        <FooterHero />
      </div>

      <Footer />
    </div>
  );
}
