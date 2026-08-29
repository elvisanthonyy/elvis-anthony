import React, { useState, useEffect, useRef, Children } from "react";

interface ChildProps {
  children: React.ReactNode;
  isVisible?: boolean;
}

//to add animation when element is in view
const Reveal = ({ children }: ChildProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisble] = useState(false);
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisble(true);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all h-fit shadow-2xl/4 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } duration-700 lg:mx-auto ease-in w-full`}
    >
      {children}
    </div>
  );
};

export default Reveal;
