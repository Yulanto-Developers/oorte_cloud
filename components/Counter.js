"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Counter = ({ end = 100, decimals = 0, extraClass }) => {
  const ref = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={extraClass}>
      {startCount && (
        <CountUp end={end} duration={3} decimals={decimals} />
      )}
    </span>
  );
};

export default Counter;
