import { useEffect, useState } from "react";
import useInView from "../hooks/useInView";

const AnimatedNumber = ({ value, inView }) => {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");
    if (isNaN(numeric)) { setDisplay(value); return; }
    let start = 0;
    const duration = 1500;
    const step = 16;
    const increment = numeric / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numeric) { setDisplay(value); clearInterval(timer); }
      else setDisplay(Math.floor(start) + suffix);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <>{display}</>;
};

const StatsBar = ({ stats = [] }) => {
  const [ref, inView] = useInView(0.2);

  return (
    <div className="w-full bg-[#000000] py-4" ref={ref}>
      <div
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4"
        style={{ borderTop: "1px solid #1E1E1E", borderBottom: "1px solid #1E1E1E" }}
      >
        {stats.map((stat, i) => {
          // 2-col mobile: left border on odd cols, top border on 2nd row
          // 4-col desktop (md+): left border on every col except first
          const borderClass = [
            i === 1 ? "border-l border-l-[#FFFFFF0F]" : "",
            i === 2 ? "border-t border-t-[#FFFFFF0F] md:border-t-0 md:border-l md:border-l-[#FFFFFF0F]" : "",
            i === 3 ? "border-t border-t-[#FFFFFF0F] border-l border-l-[#FFFFFF0F]" : "",
          ].join(" ");

          return (
            <div
              key={i}
              className={`flex flex-col items-center justify-center py-6 px-4 ${borderClass}`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <span className="font-medium leading-none text-[32px] sm:text-[48px] lg:text-[64px] whitespace-nowrap" style={{ color: "#2E6EFE" }}>
                <AnimatedNumber value={stat.value} inView={inView} />
              </span>
              <span className="text-[#A1A1AA] text-[12px] sm:text-[14px] lg:text-[16px] font-normal mt-2 text-center">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsBar;
