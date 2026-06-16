import useInView from "../hooks/useInView";

const ComparisonSection = ({
  label = "COMPARISON", heading, subtext, image,
  leftLabel = "TRADITIONAL APPROACH", rightLabel = "ZING APPROACH",
  leftPoints = [], rightPoints = [],
}) => {
  const [refH, inViewH] = useInView(0.1);
  const [refT, inViewT] = useInView(0.1);

  const slide = (dir, delay = 0) => ({
    opacity: inViewH ? 1 : 0,
    transform: inViewH ? "translateX(0)" : `translateX(${dir === "left" ? "-50px" : "50px"})`,
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <div className="w-full bg-[#010913] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div ref={refH} className="flex flex-col gap-4 max-w-xl" style={slide("left")}>
          <span className="text-[#8E8E97] text-[13px] font-semibold tracking-widest uppercase">{label}</span>
          <h2 className="text-white font-medium text-[36px] sm:text-[44px] lg:text-[56px] leading-tight">
            {heading && heading.split("\n").map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="text-[#C7C7CC] text-[17px] sm:text-[20px] font-normal leading-relaxed">{subtext}</p>
        </div>

        {image && (
          <div className="my-12 w-full overflow-hidden" style={{ opacity: inViewH ? 1 : 0, transform: inViewH ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}>
            <img src={image} alt="Comparison illustration" className="w-full object-cover" />
          </div>
        )}

        <div ref={refT} className="w-full overflow-hidden bg-[#070A10]">
          <div className="grid grid-cols-2 border-b border-[#FFFFFF0F]">
            <div className="px-6 py-4 border-r border-[#FFFFFF0F]" style={{ opacity: inViewT ? 1 : 0, transform: inViewT ? "translateX(0)" : "translateX(-30px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
              <span className="text-[#8E8E97] text-[12px] font-semibold tracking-widest uppercase">{leftLabel}</span>
            </div>
            <div className="px-6 py-4" style={{ opacity: inViewT ? 1 : 0, transform: inViewT ? "translateX(0)" : "translateX(30px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
              <span className="text-[#FFFFFF] text-[12px] font-semibold tracking-widest uppercase">{rightLabel}</span>
            </div>
          </div>
          {Array.from({ length: Math.max(leftPoints.length, rightPoints.length) }).map((_, i) => (
            <div key={i} className="grid grid-cols-2" style={i !== 0 ? { borderTop: "1px solid #FFFFFF0F" } : {}}>
              <div className="px-6 py-4 border-r border-[#FFFFFF0F] flex items-center gap-3"
                style={{ opacity: inViewT ? 1 : 0, transform: inViewT ? "translateX(0)" : "translateX(-30px)", transition: `opacity 0.5s ease ${0.05 * i}s, transform 0.5s ease ${0.05 * i}s` }}>
                <span className="text-[#555555] text-[16px] shrink-0">✕</span>
                <span className="text-[#8E8E97] text-[17px] font-normal">{leftPoints[i] || ""}</span>
              </div>
              <div className="px-6 py-4 flex items-center gap-3"
                style={{ opacity: inViewT ? 1 : 0, transform: inViewT ? "translateX(0)" : "translateX(30px)", transition: `opacity 0.5s ease ${0.05 * i}s, transform 0.5s ease ${0.05 * i}s` }}>
                <span className="text-[#2E6EFE] text-[16px] shrink-0">✓</span>
                <span className="text-[#FFFFFF] text-[17px] font-normal">{rightPoints[i] || ""}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
