import useInView from "../hooks/useInView";

const WhoItsFor = ({
  label = "WHO IT'S FOR",
  heading,
  subtext,
  items = [],
}) => {
  const [ref, inView] = useInView(0.15);

  return (
    <div className="w-full bg-[#001022] overflow-hidden">
      <div ref={ref} className="max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

        <div className="w-full lg:w-1/2 flex flex-col gap-6"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-50px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
        >
          <span className="text-[#8E8E97] text-[13px] font-semibold tracking-widest uppercase">{label}</span>
          <h2 className="text-white font-medium text-[36px] sm:text-[44px] lg:text-[56px] leading-none">
            {heading && heading.split("\n").map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="text-[#C7C7CC] text-[17px] sm:text-[20px] font-normal leading-relaxed">{subtext}</p>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-5"
              style={{
                borderTop: i !== 0 ? "1px solid #FFFFFF17" : "",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(50px)",
                transition: `opacity 0.6s ease ${0.1 + i * 0.08}s, transform 0.6s ease ${0.1 + i * 0.08}s`,
              }}
            >
              <div className="flex items-center gap-4">
                <span className="text-[#71717A] text-[13px] font-medium">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-white font-medium text-[24px]">{item}</span>
              </div>
              <span className="text-[#FFFFFF17] text-[20px]">→</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhoItsFor;
