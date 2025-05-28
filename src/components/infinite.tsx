"use client";

import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";

export const Infinite = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller w-screen overflow-hidden relative z-20",
        "px-4 md:px-12",
        className
      )}
      style={{
        maskImage:
          "linear-gradient(to right, rgba(255,255,255,0) 60px, white 120px, white calc(100% - 120px), rgba(255,255,255,0) calc(100% - 60px))",
        WebkitMaskImage:
          "linear-gradient(to right, rgba(255,255,255,0) 60px, white 120px, white calc(100% - 120px), rgba(255,255,255,0) calc(100% - 60px))",
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[450px] max-w-full shrink-0 rounded-2xl overflow-hidden border border-zinc-200 bg-white px-2 py-2 md:w-[450px] dark:border-zinc-700 dark:bg-zinc-900"
          >
            <img
              src={item.image}
              alt={`Discount ${idx}`}
              className="w-full h-[450px] object-cover rounded-xl"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Infinite;
