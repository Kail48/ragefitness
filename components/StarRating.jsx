import React from "react";
import star from "../public/images/star.svg";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
const StarRating = ({ rating }) => {
  const stars = [];

  // Create an array of five stars
  for (let i = 1; i <= 5; i++) {
    let starClass = "text-white";
    
    if (i <= rating) {

      starClass = "text-red";
    }
    console.log(rating,i)
    // Add the star to the stars array
    console.log(starClass)
    stars.push(<FaStar key={i} className={`${starClass} w-8 h-8`} />);
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
