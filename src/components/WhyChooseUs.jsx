import useInView from "../hooks/useInView";

const WhyChooseUs = ({
  headingStart = "Why Companies Choose",
  headingHighlight = "Zing",
  highlightColor = "#2E6EFE",
  points = [],
  image,
}) => {
  const [ref, inView] = useInView(0.15);

  const slide = (dir, delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : `translateX(${dir === "left" ? "-50px" : "50px"})`,
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <div className="w-full bg-[#001022] overflow-hidden">
      <div ref={ref} className="max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col gap-8" style={slide("left")}>
          <h2 className="font-medium text-[36px] sm:text-[44px] lg:text-[56px] leading-tight">
            <span className="text-white">{headingStart} </span>
            <span style={{ color: highlightColor }}>{headingHighlight}</span>
          </h2>
          <ul className="flex flex-col gap-4">
            {points.map((point, i) => (
              <li key={i} className="flex items-center gap-3"
                style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-30px)", transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s` }}
              >
                <span className="text-[#2E6EFE] text-[16px] shrink-0">✓</span>
                <span className="text-[#E4E4E7] text-[17px] font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        {image && (
          <div className="flex-1 flex justify-center lg:justify-end" style={slide("right", 0.15)}>
            <img src={image} alt="Why choose us" className="w-full max-w-sm lg:max-w-md rounded-xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyChooseUs;
