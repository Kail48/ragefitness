"use client";
import React from "react";
import Link from "next/link";
//can define size as in width-sm,md,lg
//fill=true gives red bg button and false gives black bg button
//islink=link(points to link)/action(runs a function,provide action as well)
export default function Button({ text, size, fill, isLink, action, link }) {
    const sizeStyle={
        'sm':'w-48 h-12 py-2 px-4 text-[12px]',
        'md':'',
        'lg':''
    }
  return (
    <>
      {isLink ? (
        <Link href={link}>
          <button  className={`font-header text-white ${fill?'bg-red':'bg-black'} ${sizeStyle[size]} rounded-[4px]`}>{text}</button>
        </Link>
      ) : (
        <button value={text} className={`text-white`}>{text}</button>
      )}
    </>
  );
}
