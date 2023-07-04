import React from "react";
import Navbar from "../../components/Navbar";
import heroImage from "../../public/images/aboutUsHeroImg.png";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Image from "next/image";
import trainerImage from "../../public/images/trainerImage.png";
import FooterHero from "../../components/FooterHero";
export default function Page() {
  const shortIntro = `Dan Henderson is one of the most accomplished and admired champions in the history of mixed martial arts, earning titles in multiple organizations and weight classes over the course 
    of a storied career that began in 1997.The two-time Olympic wrestler recently re-joined the UFC after a successful four-fight stint in Strikeforce that saw him record three straight KO victories. hendo owner temecula fitness
    
    Today, the 41-year-old Henderson remains one of the world’s elite MMA athletes. Consistently ranked as one of the top pound-for-pound fighters in all of mixed martial arts, 
    Henderson has compiled a 28-8 record versus elite competition.
    
    In March 2011, he won the Strikeforce light heavyweight crown in emphatic fashion, knocking out Rafael “Feijao” Cavalcante in the third round. In July 2011, he ventured into the heavyweight division to take on longtime Pride champion Fedor Emelianenko. Despite a considerable size disadvantage, Henderson defeated the legendary Russian via TKO in the 
    opening round.`;
  return (
    <div className="w-screen ">
      <Navbar />
      <div className=" bg-black font-header text-header3 md:text-header text-lightyellow text-center py-12 overflow-x-hidden">
        <Hero
          isLeft={false}
          image={heroImage}
          header={["RANDOM", "NAME NEPAL"]}
          subtitle="IN THE CAGE AND IN LIFE - COME TRAIN WITH US"
          button1Text="GET 1 WEEK TRIAL PASS"
          button2Text="+977 - 9812345678"
          imageHeight={571}
          imageWidth={545}
          animation={false}
        />
        <Hero
          isLeft={true}
          image={heroImage}
          secondaryHeader={["ABOUT PERSON"]}
          paragraph={shortIntro}
          button1Text="GET 1 WEEK TRIAL PASS"
          imageHeight={615}
          imageWidth={508}
          animation={true}
        />
        <div className="flex flex-col justify-center items-center gap-y-16 text-white">
          <div className="relative w-[400px] h-[400px] md:w-[1346px] md:h-[898px]">
            <Image src={trainerImage} fill={true} alt="trainer" />
          </div>
          <p className="font-para text-para w-8/12 text-justify space-y-2 leading-7 tracking-wide">
            Dan coached Team USA on Season Nine of Spike TV’s The Ultimate
            Fighter in spring 2009. On July 11, 2009, he faced his coaching
            counterpart, Michael Bisping, on the main card of UFC 100, which was
            the most-watched event in the organization’s history. Dan won via
            devastating knockout and earned the KO of the Night Award. Later in
            2009, he received KO of the Year honors at the World MMA Awards show
            on Versus.
          </p>

          <p className="font-para text-para w-8/12 text-justify space-y-2 leading-7 tracking-wide">
            A former Greco Roman wrestler, Henderson won three senior national
            titles, a junior world title and represented the United States in
            both the 1992 and 1996 Olympic Games.
          </p>

          <p className="font-para text-para w-8/12 text-justify space-y-2 leading-7 tracking-wide">
            Distinguished by his ferocity in the ring and his humility outside
            of it, Henderson is one of the most respected and admired fighters
            in MMA. He co-founded the Team Quest Fight Club with Randy Couture
            in 2000, and now owns Dan Henderson’s Athletic Fitness Center, the
            premier fitness center in Temecula, California.
          </p>
        </div>
      </div>
      <div className="bg-red w-screen py-16 px-10 md:px-16">
        <h1 className="text-white font-header text-[24px] md:text-header2">ACCOMPLISHMENTS</h1>
        <h1 className="font-header text-[20px] md:text-[36px] text-lightyellow mt-6">
          MIXED MARTIAL ARTS
        </h1>

        <ul class="list-disc ml-8 font-para text para ">
          <li class="mb-2">Strikeforce Light Heavyweight Champion (2011)</li>
          <li class="mb-2">Knockout of the Year, World MMA Awards (2009)</li>
          <li class="mb-2">Pride FC Middleweight Champion (2007)</li>
          <li class="mb-2">Pride FC Welterweight Champion (2005)</li>
          <li class="mb-2">
            Pride FC Bushido Welterweight Grand Prix Champion (2005)
          </li>
          <li class="mb-2">
            RINGS King of Kings Absolute Tournament Champion (2000)
          </li>
          <li class="mb-2">UFC 17 Middleweight Tournament Champion (1998)</li>
          <li class="mb-2">Brazil Open Tournament Champion (1997)</li>
        </ul>
        <h1 className="font-header text-[20px] md:text-[36px] text-lightyellow mt-6">
          AMATEUR WRESTLING
        </h1>
        <ul class="list-disc ml-8 font-para text para ">
          <li class="mb-2">2000 Pan American Games Champion</li>
          <li class="mb-2">1998 Pan American Games bronze medalist</li>
          <li class="mb-2">1997 US World Team member (7th)</li>
          <li class="mb-2">1997 US Open Senior National Champion</li>
          <li class="mb-2">1996 US Olympian, Greco Roman (12th)</li>
          <li class="mb-2">1996 World Cup silver medalist</li>
          <li class="mb-2">1995 Pan American Games bronze medalist</li>
          <li class="mb-2">
            1994 US World Team member (12th) &amp; 1997 (7th)
          </li>
          <li class="mb-2">1994 US Open Senior National Champion</li>
          <li class="mb-2">1994 World Cup silver medalist</li>
          <li class="mb-2">
            1994 USA University Greco Roman National Champion mma champ temecula
            fitness
          </li>
          <li class="mb-2">1993 US Open Senior National Champion</li>
          <li class="mb-2">
            1993 USA University Greco Roman National Champion
          </li>
          <li class="mb-2">1993 NCAA Qualifier (Arizona State University)</li>
          <li class="mb-2">1992 US Olympian, Greco Roman (10th)</li>
          <li class="mb-2">
            1991 USA University Greco Roman National Champion
          </li>
          <li class="mb-2">1990 FILA Junior World Greco Roman Champion</li>
          <li class="mb-2">
            1990 Amateur Wrestling News Freshman All American
          </li>
          <li class="mb-2">
            1988 USA Junior National Freestyle and Greco Roman Champion
          </li>
          <li class="mb-2">1988 California State Junior Freestyle Champion</li>
          <li class="mb-2">
            1988 California Interscholastic Federation Championships, 5th
          </li>
          <li class="mb-2">
            1987 California Interscholastic Federation Championships, 2nd
          </li>
        </ul>
      
      </div>
      <div className=" bg-black font-header text-header3 md:text-header text-lightyellow text-center py-12 overflow-x-hidden">
      <FooterHero/>
      </div>
  
      <Footer />
    </div>
  );
}
