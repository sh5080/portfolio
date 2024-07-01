import React, { useEffect, useRef, useState } from "react";

const FadeIn = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const HOC: React.FC<P> = (props) => {
    const [fadeIn, setFadeIn] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setFadeIn(true);
          } else {
            setFadeIn(false);
          }
        },
        {
          threshold: 0,
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

    return (
      <div ref={sectionRef} className={fadeIn ? "fade-in" : ""}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return HOC;
};

export default FadeIn;
