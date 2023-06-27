import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    const class_schedule=[
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
    ]
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
    <div className="w-screen py-6 bg-black text-white md:flex md:justify-around">
      <div className="py-2 w-64">
        <Image
          height={50}
          width={183}
          priority
          src={"/images/logo.png"}
          alt="Logo"
        ></Image>
        <p className="font-para text-justify mt-4">
          Rage fitness offers classes and programs to meet the needs of everyone
          regardless of age or previous experience.
        </p>
      </div>
      <div className="flex-flex-col font-para text-[16px]">
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
      <div>
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
      <h1 className="font-para text-[14px] text-center mb-6 mt-8">© 2023 Rage Fitness Center. All Rights Reserved.</h1>
    </div>
  );
}
