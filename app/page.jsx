import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import hero1Image from "../public/images/hero1image.png";
import hero2Image from "../public/images/hero2image.png";
import hero3Image from "../public/images/hero3image.png";
import Button from "@/components/Button";
import Loading from "./loading";
import ClassesSection from "@/components/ClassesSection";
import TrainerSection from "@/components/TrainerSection";
import FooterHero from "@/components/FooterHero";
export default function Home() {
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
        <ClassesSection />

      <Hero
        isLeft={false}
        image={hero3Image}
        button1Text="GET 1 WEEK TRIAL PASS"
        secondaryHeader={[
          "BENEFITS OF TRAINING AT ", 
          "OUR RAGE FITNESS"
        ]}
        paragraph={hero2paragraph}
        imageHeight={571}
        imageWidth={545}
        animation={true}
      />
      <TrainerSection/>
      <FooterHero/>
      </div>
     
      <Footer />
    </div>
  );
}
