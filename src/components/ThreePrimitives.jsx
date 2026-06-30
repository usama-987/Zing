import useInView from "../hooks/useInView";
import FeatureCard from "./ui/FeatureCard";

const ThreePrimitives = ({
  label = "ANATOMY", headingLine1 = "Three primitives.",
  headingLine2Start = "One", headingLine2Highlight = "system.",
  highlightColor = "#2E6EFE", subtext, image,
  middleSlot,
  engineeringLabel = "ENGINEERING",
  engineeringHeadingHighlight = "AI-assisted engineering",
  engineeringHeadingRest = " allows production systems to ship in days instead of months",
  engineeringSubtext, cards = [], stats = [],
  systemsLabel = "SYSTEMS", systemsHeadingLine1 = "How Zing",
  systemsHeadingLine2 = "Deploys Systems.", systemsImage,
}) => {
  const [ref1, inView1] = useInView(0.1);
  const [ref2, inView2] = useInView(0.1);
  const [ref3, inView3] = useInView(0.1);

  const slide = (inView, dir, delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : `translateX(${dir === "left" ? "-50px" : "50px"})`,
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  const fadeUp = (inView, delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <>
      {/* Section 1 */}
      <div className="w-full bg-[#010913] overflow-hidden">
        <div className="w-full" style={{ borderTop: "1px solid #FFFFFF17" }} />
        <div ref={ref1} className="max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col gap-8">
          <span className="text-[#8E8E97] text-[13px] font-semibold tracking-widest uppercase" style={slide(inView1, "left")}>{label}</span>
          <h2 className="font-medium text-[36px] sm:text-[44px] lg:text-[56px] leading-tight" style={slide(inView1, "left", 0.1)}>
            <span className="block text-white">{headingLine1}</span>
            <span className="text-white">{headingLine2Start} </span>
            <span style={{ color: highlightColor }}>{headingLine2Highlight}</span>
          </h2>
          {subtext && <p className="text-[#C7C7CC] text-[17px] sm:text-[20px] font-normal leading-relaxed max-w-2xl" style={slide(inView1, "left", 0.2)}>{subtext}</p>}
          {image && (
            <div className="w-full mt-4 rounded-xl overflow-hidden border border-[#FFFFFF17]" style={fadeUp(inView1, 0.3)}>
              <img src={image} alt="Three primitives" className="w-full object-cover" />
            </div>
          )}
        </div>
        <div className="w-full" style={{ borderBottom: "1px solid #FFFFFF17" }} />
      </div>

      {middleSlot && middleSlot}

      {/* Section 2 */}
      <div className="w-full bg-[#010913] overflow-hidden">
        <div className="w-full" style={{ borderTop: "1px solid #FFFFFF17" }} />
        <div ref={ref2} className="max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col items-center gap-8">
          <span className="text-[#8E8E97] text-[13px] font-semibold tracking-widest uppercase text-center" style={fadeUp(inView2)}>{engineeringLabel}</span>
          <h2 className="font-medium text-[32px] sm:text-[40px] lg:text-[56px] leading-tight text-center max-w-4xl" style={fadeUp(inView2, 0.1)}>
            <span style={{ color: "#2E6EFE" }}>{engineeringHeadingHighlight}</span>
            <span className="text-white">{engineeringHeadingRest}</span>
          </h2>
          {engineeringSubtext && <p className="text-[#C7C7CC] text-[17px] sm:text-[20px] font-normal leading-relaxed text-center max-w-2xl" style={fadeUp(inView2, 0.2)}>{engineeringSubtext}</p>}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {cards.map((card, i) => (
              <div key={i} style={{ opacity: inView2 ? 1 : 0, transform: inView2 ? "translateX(0)" : `translateX(${i % 2 === 0 ? "-40px" : "40px"})`, transition: `opacity 0.6s ease ${0.1 + i * 0.1}s, transform 0.6s ease ${0.1 + i * 0.1}s` }}>
                <FeatureCard icon={card.icon} title={card.title} description={card.description} />
              </div>
            ))}
          </div>
          {stats.length > 0 && (
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 mt-4 w-full">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full whitespace-nowrap"
                  style={{ border: "1px solid #FFFFFF17", opacity: inView2 ? 1 : 0, transform: inView2 ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s` }}>
                  <span className="text-white font-bold text-[13px] sm:text-[15px]">{stat.value}</span>
                  <span className="text-[#D4D4D8] font-normal text-[13px] sm:text-[15px]">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-full" style={{ borderBottom: "1px solid #FFFFFF17" }} />
      </div>

      {/* Section 3 */}
      <div className="w-full bg-[#010913] mt-0 overflow-hidden">
        <div className="w-full" style={{ borderTop: "1px solid #FFFFFF17" }} />
        <div ref={ref3} className="max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col gap-8">
          <span className="text-[#8E8E97] text-[13px] font-semibold tracking-widest uppercase" style={slide(inView3, "left")}>{systemsLabel}</span>
          <h2 className="font-medium text-[36px] sm:text-[44px] lg:text-[56px] leading-tight" style={slide(inView3, "left", 0.1)}>
            <span className="block text-white">{systemsHeadingLine1}</span>
            <span style={{ color: "#2E6EFE" }}>{systemsHeadingLine2}</span>
          </h2>
          {systemsImage && (
            <div className="w-full mt-4 rounded-xl overflow-hidden border border-[#FFFFFF17]" style={fadeUp(inView3, 0.2)}>
              <img src={systemsImage} alt="How Zing deploys systems" className="w-full object-cover" />
            </div>
          )}
        </div>
        <div className="w-full" style={{ borderBottom: "1px solid #FFFFFF17" }} />
      </div>
    </>
  );
};

export default ThreePrimitives;
