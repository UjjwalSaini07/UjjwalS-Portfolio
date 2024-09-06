"use client";

import { cn } from "../../../@/components/magicui/lib/utils";
import { AnimatedList } from "../../../@/components/magicui/animated-list";

const notifications = [
  {
    name: "Portfolio Website",
    description: "Modern, animated portfolio showcasing React, JavaScript, and design skills.",
    time: "30m ago",
    icon: "😁",
    color: "#00C9A7",
  },
  {
    name: "Dynamic User Interfaces",
    description: "Specialized in responsive, dynamic user interfaces with React.",
    time: "20m ago",
    icon: "🥰",
    color: "#FFC0CB",
  },
  {
    name: "Interactive Project Showcases",
    description: "Developed engaging project showcases highlighting technical skills.",
    time: "15m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Visually Engaging Content",
    description: "Created visually captivating content using advanced CSS animations.",
    time: "12m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Cutting-Edge Frontend Development",
    description: "Delivering high-performing frontend solutions with modern web trends.",
    time: "10m ago",
    icon: "😍",
    color: "#E6E6FA",
  },
  {
    name: "Experience",
    description: "Frontend Developer with 2+ years of experience.",
    time: "5m ago",
    icon: "💼",
    color: "#1E86FF",
  },
  {
    name: "Contact",
    description: "Get in touch at ujjwalsaini0007@gmail.com",
    time: "now",
    icon: "📞",
    color: "#fff",
  },
];

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg bg-background", // Removed border and shadow
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
