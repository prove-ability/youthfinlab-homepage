"use client";

import { cn } from "@/lib/utils";
import { ReactNode, FC } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?:
    | "default"
    | "accent"
    | "muted"
    | "gradient-primary"
    | "gradient-primary-reverse";
}

const Section: FC<SectionProps> = ({
  children,
  className,
  containerClassName,
  background = "default",
}) => {
  const backgroundStyles = {
    default: "bg-background",
    accent: "bg-accent",
    muted: "bg-muted",
    "gradient-primary": "bg-gradient-to-b from-primary/5 to-transparent",
    "gradient-primary-reverse":
      "bg-gradient-to-b from-transparent to-primary/5",
  };

  return (
    <section className={cn("py-16", backgroundStyles[background], className)}>
      <div className={cn("container mx-auto px-4", containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
