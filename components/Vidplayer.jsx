"use client";
import React, { useEffect, useRef } from "react";



export default function Videoplayer({ src, height, width }) {

  return (
    <div className="w-96 h-96">
        <video
        autoPlay
        loop
        muted
        src={src}
        className=""
      />
    </div>
  );
}
