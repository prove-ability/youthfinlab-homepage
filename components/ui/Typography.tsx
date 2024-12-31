import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: ReactNode;
}

const H1: FC<Props> = ({ className, children }) => {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
};

const H2: FC<Props> = ({ className, children }) => {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
};

const H3: FC<Props> = ({ className, children }) => {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
};

const H4: FC<Props> = ({ className, children }) => {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h4>
  );
};

const P: FC<Props> = ({ className, children }) => {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  );
};

const Blockquote: FC<Props> = ({ className, children }) => {
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>
      {children}
    </blockquote>
  );
};

const InlineCode: FC<Props> = ({ className, children }) => {
  return (
    <code
      className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className}`}
    >
      {children}
    </code>
  );
};

const Lead: FC<Props> = ({ className, children }) => {
  return (
    <p className={`text-xl text-muted-foreground ${className}`}>{children}</p>
  );
};

const Large: FC<Props> = ({ className, children }) => {
  return <div className={`text-lg font-semibold ${className}`}>{children}</div>;
};

const Muted: FC<Props> = ({ className, children }) => {
  return (
    <p className={`text-sm text-muted-foreground ${className}`}>{children}.</p>
  );
};

const Label: FC<Props> = ({ className, children }) => {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-none",
        "text-foreground/90",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        "select-none",
        "transition-colors",
        className
      )}
    >
      {children}
    </label>
  );
};

export default Object.assign(
  {},
  { H1, H2, H3, H4, P, Lead, Large, Muted, Blockquote, InlineCode, Label }
);
