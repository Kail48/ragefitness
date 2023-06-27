import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const class_schedule = [
    {
      name: "Kids Class Schedule",
      link: "/",
    },
    {
      name: "Combative Classes Schedule",
      link: "/",
    },
    {
      name: "Fitness Class Schedule",
      link: "/",
    },
  ];
  const quicklinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Classes",
      link: "/",
    },
    {
      name: "Schedule",
      link: "/",
    },
    {
      name: "Coaches",
      link: "/",
    },
    {
      name: "Fighter",
      link: "/",
    },
    {
      name: "FAQ",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];
  const programs = [
    {
      name: "Striking Lesson",
      link: "/",
    },
    {
      name: "Grappling Lesson",
      link: "/",
    },
    {
      name: "Fitness Classes",
      link: "/",
    },
    {
      name: "Kids Program",
      link: "/",
    },
  ];

  return (
    <div>
      <div className="hidden w-screen py-6 bg-black text-white md:flex  justify-center items-center md:flex-row md:justify-around">
        <div className="py-2 w-64 md:w-64 flex flex-col justify-center items-center md:items-start">
          <Image
            height={50}
            width={183}
            priority
            src={"/images/logo.png"}
            alt="Logo"
          ></Image>
          <p className="font-para text-sm text-justify md:text-[16px] mt-4">
            Rage fitness offers classes and programs to meet the needs of
            everyone regardless of age or previous experience.
          </p>
        </div>
        <div className="flex-flex-col items-center justify-center font-para text-[16px]">
          <h1 className="font-header mb-4"> QUICKLINKS</h1>
          {quicklinks.map((link) => (
            <Link href={link.link}>
              <h1 className="">{link.name}</h1>
            </Link>
          ))}
        </div>
        <div className="flex-flex-col font-para text-[16px]">
          <h1 className="font-header mb-4"> PROGRAMS</h1>
          {programs.map((link) => (
            <Link href={link.link}>
              <h1 className="">{link.name}</h1>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 ">
          <div className="flex-flex-col font-para text-[16px]">
            <h1 className="font-header mb-4"> BUSINESS HOURS</h1>
            <p className="">
              Monday - Friday:
              <br /> 08:00AM to 08:00PM <br />
              Saturday: 08:00AM to 02:00PM
              <br />
              Saturday: Close
            </p>
          </div>
          <div className="flex-flex-col font-para text-[16px]">
            <h1 className="font-header mb-4"> ClASSES SCHEDULE</h1>
            {class_schedule.map((link) => (
              <Link href={link.link}>
                <h1 className="">{link.name}</h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* mobile view  */}
      <div className="flex flex-col md:hidden bg-black items-center justify-center text-white gap-y-4">
        <div className="py-2 w-64 md:w-64 flex flex-col justify-center items-center md:items-start">
          <Image
            height={50}
            width={180}
            priority
            src={"/images/logo.png"}
            alt="Logo"
          ></Image>
          <p className="font-para text-sm text-center md:text-[16px] mt-4">
            Rage fitness offers classes and programs to meet the needs of
            everyone regardless of age or previous experience.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center font-para text-[16px]">
          <h1 className="font-header mb-4"> QUICKLINKS</h1>
          {quicklinks.map((link) => (
            <Link href={link.link}>
              <h1 className="text-center">{link.name}</h1>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center font-para text-[16px]">
          <h1 className="font-header mb-4"> PROGRAMS</h1>
          {programs.map((link) => (
            <Link href={link.link}>
              <h1 className="text-center">{link.name}</h1>
            </Link>
          ))}
        </div>
        <div className="flex-flex-col items-center justify-center font-para text-[16px]">
            <h1 className="font-header mb-4 text-center">BUSINESS HOURS</h1>
            <p className="text-center">
              Monday - Friday:
              <br /> 08:00AM to 08:00PM <br />
              Saturday: 08:00AM to 02:00PM
              <br />
              Saturday: Close
            </p>
          </div>
          <div className="flex-flex-col items-center justify-center font-para text-[16px]">
            <h1 className="font-header mb-4 text-center">  ClASSES SCHEDULE</h1>
            {class_schedule.map((link) => (
              <Link href={link.link}>
                <h1 className="text-center">{link.name}</h1>
              </Link>
            ))}
          </div>
      </div>
      <h1 className="font-para text-[14px] text-center mb-6 mt-8">
        © 2023 Rage Fitness Center. All Rights Reserved.
      </h1>
    </div>
  );
}
