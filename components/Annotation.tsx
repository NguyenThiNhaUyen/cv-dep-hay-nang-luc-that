import { cn } from "@/lib/utils";

type AnnotationProps = {
  children: React.ReactNode;
  className?: string;
};

export function Annotation({ children, className }: AnnotationProps) {
  return (
    <span
      className={cn(
        "font-hand text-xl leading-none text-annotation md:text-2xl",
        className,
      )}
    >
      {children}
    </span>
  );
}
