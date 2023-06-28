"use client"
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
/**
 * This is fully customizable hero section that can display an image with either large main header and cta
 * or medium heading with paragraph
 * @param {boolean}  isLeft true: place the image on left, false:place image on right
 * @param {String}  image  image source
 * @param {Array}   header main header divided into multiple lines top line is shown in red
 * @param {String}  subtitle subtitle text
 * @param {String}  button1text  text to display in the button 1
 * @param {String}  button2text  text to display in the button 2
 * @param {number}  imageHeight height of image to be displayed
 * @param {number}  imageWidth  width of image to be displayed
 * @param {boolean} animation toggle animation on or off
 */
export default function Hero({
  isLeft,
  header,
  image,
  subtitle,
  button1Text,
  button2Text,
  secondaryHeader,
  paragraph,
  imageHeight,
  imageWidth,
  animation,
}) {
  console.log(imageHeight, imageWidth);
  return (
    <div className="w-full flex px-10 mb-32 justify-center items-center">
      {isLeft ? (
        <>
          <Image
            src={image}
            alt="image"
            height={imageHeight}
            width={imageWidth}
            priority
          />

          <div className="px-4 ">
            {header ? (
              <div className="font-header text-header text-start">
                <span className="text-red">{header[0]}</span>
                <br />
                <span className="text-white">{header[1]}</span>
              </div>
            ) : (
              <div></div>
            )}
            {subtitle ? (
              <h1 className="text-start text-header3 text-lightyellow mt-4">
                {subtitle}
              </h1>
            ) : (
              <div></div>
            )}

            {secondaryHeader ? (
              <div className="font-header text-header2 text-start text-lightyellow whitespace-nowrap">
                <span className="">{secondaryHeader[0]}</span>
                <br />
                <span className="">{secondaryHeader[1]}</span>
              </div>
            ) : (
              <div></div>
            )}
            {paragraph ? (
              <div>
                <p className="font-para text-para text-justify whitespace-normal overflow-hidden mt-4">
                  {paragraph}
                </p>
              </div>
            ) : (
              <div></div>
            )}
            <div className="flex gap-x-6 py-2">
              <Button
                text={button1Text}
                isLink={true}
                to="/"
                fill={true}
                size="md"
              />
              {button2Text ? (
                <Button
                  text={button2Text}
                  isLink={true}
                  to="/"
                  fill={false}
                  size="md"
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="px-4">
            {header ? (
              <div className="font-header text-header text-start">
                <span className="text-red">{header[0]}</span>
                <br />
                <span className="text-white">{header[1]}</span>
              </div>
            ) : (
              <div></div>
            )}
            {subtitle ? (
              <h1 className="text-start text-header3 text-lightyellow mt-4">
                {subtitle}
              </h1>
            ) : (
              <div></div>
            )}

            {secondaryHeader ? (
              <h1 className="text-start text-header2 text-lightyellow mt-4">
                {secondaryHeader}
              </h1>
            ) : (
              <div></div>
            )}
            {paragraph ? (
              <div>
                <p className="font-para text-para text-justify whitespace-normal overflow-hidden mt-4">
                  {paragraph}
                </p>
              </div>
            ) : (
              <div></div>
            )}
            <div className="flex gap-x-6 py-2">
              <Button
                text={button1Text}
                isLink={true}
                to="/"
                fill={true}
                size="md"
              />
              <Button
                text={button2Text}
                isLink={true}
                to="/"
                fill={false}
                size="md"
              />
            </div>
          </div>
          <Image
          className=""
            src={image}
            alt="image"
            height={imageHeight}
            width={imageWidth}
            priority
          />

        </>
      )}
    </div>
  );
}
