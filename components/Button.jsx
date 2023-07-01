import React from "react";
import Link from "next/link";

/**
 *
 * @param  text {String} The text the button displays
 * @param  size {String} sm/md/lg  height remains the same only width changes
 * @param  fill {boolean} true returns a button with red background else with a dark background and white text
 * @param  isLink {boolean} true returns a button as link else it takes in a function to be executed
 * @param action {function} function to handle onClick events in case the button i s not a link
 * @returns
 */
export default function Button({ text, size, fill, isLink, action, to }) {
  const sizeStyle = {
    sm: "w-full h-12 md:w-48 md:h-12 px-4 text-[12px]",
    md: "w-full h-12 md:w-64 md:h-14 py-2 px-2 text-[12px]",
    lg: "w-84 h-12 md:w-96 md:h-16 py-2 px-2 text-[20px]",
  };
  return (
    <>
      {isLink ? (
        <Link href={to ? to : "/"}>
          <button
            className={`leading-3 whitespace-nowrap text-center font-header text-white ${
              fill ? "bg-red" : "bg-black border-2 border-white text-[18px]"
            } ${sizeStyle[size]} rounded-[4px]`}
          >
            {text}
          </button>
        </Link>
      ) : (
        <button
          value={text}
          className={`leading-3 font-header text-white ${
            fill ? "bg-red" : "bg-black"
          } ${sizeStyle[size]} rounded-[4px]`}
          onClick={action}
        >
          {text}
        </button>
      )}
    </>
  );
}
