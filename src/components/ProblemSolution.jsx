import useInView from "../hooks/useInView";

const ProblemSolution = ({
  problemLabel = "THE PROBLEM",
  problemHeading,
  problemSubtext,
  problemPoints = [],
  problemImage,
  solutionLabel = "THE SYSTEM",
  solutionHeadingStart,
  solutionHeadingPrefix,
  solutionHeadingHighlight,
  solutionSubtext,
  solutionPoints = [],
  solutionCTA = "Map my system →",
  onSolutionCTA,
  solutionImage,
}) => {
  const [ref1, inView1] = useInView(0.15);
  const [ref2, inView2] = useInView(0.15);

  const slideStyle = (inView, dir, delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : `translateX(${dir === "left" ? "-50px" : "50px"})`,
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <div className="w-full bg-[#010913]">

      {/* Section 1 */}
      <div ref={ref1} className="max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col gap-5" style={slideStyle(inView1, "left")}>
          <span className="text-[#8E8E97] text-[13px] font-semibold tracking-widest uppercase">{problemLabel}</span>
          <h2 className="text-white font-medium text-[36px] sm:text-[44px] lg:text-[56px] leading-tight">
            {problemHeading && problemHeading.split("\n").map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="text-[#C7C7CC] text-[18px] sm:text-[20px] font-normal leading-relaxed">{problemSubtext}</p>
          <ul className="flex flex-col gap-3 mt-2">
            {problemPoints.map((point, i) => (
              <li key={i} className="flex items-center gap-3 text-[#D4D4D8] text-[17.5px] font-normal">
                <span className="text-[#666666] text-[18px] font-bold shrink-0">✕</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        {problemImage && (
          <div className="flex-1 flex justify-center lg:justify-end" style={slideStyle(inView1, "right", 0.15)}>
            <img src={problemImage} alt="Problem" className="w-full max-w-sm lg:max-w-md rounded-xl border border-[#FFFFFF17]" />
          </div>
        )}
      </div>

      <div className="border-t border-[#FFFFFF17]" />

      {/* Section 2 */}
      <div ref={ref2} className="max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-start gap-12">
        {solutionImage && (
          <div className="flex-1 flex justify-center lg:justify-start mt-8 lg:mt-16" style={slideStyle(inView2, "left")}>
            <img src={solutionImage} alt="Solution" className="w-full max-w-sm lg:max-w-md rounded-xl border border-[#FFFFFF17]" />
          </div>
        )}
        <div className="flex-1 flex flex-col gap-5" style={slideStyle(inView2, "right", 0.15)}>
          <span className="text-[#8E8E97] text-[13px] font-semibold tracking-widest uppercase">{solutionLabel}</span>
          <h2 className="font-medium text-[36px] sm:text-[44px] lg:text-[56px] leading-tight">
            <span className="block text-white">{solutionHeadingStart}</span>
            <span className="text-white">{solutionHeadingPrefix} </span>
            {solutionHeadingHighlight && <span className="text-[#2E6EFE]">{solutionHeadingHighlight}</span>}
          </h2>
          <p className="text-[#C7C7CC] text-[18px] sm:text-[20px] font-normal leading-relaxed">{solutionSubtext}</p>
          <ul className="flex flex-col gap-3 mt-2">
            {solutionPoints.map((point, i) => (
              <li key={i} className="flex items-center gap-3 text-[#D4D4D8] text-[17.5px] font-normal">
                <span className="text-[#2E6EFE] text-[18px] font-bold shrink-0">✓</span>
                {point}
              </li>
            ))}
          </ul>
          {solutionCTA && (
            <button onClick={onSolutionCTA} className="text-white text-[16px] font-semibold mt-2 text-left hover:text-[#2E6EFE] transition-colors cursor-pointer w-fit">
              {solutionCTA}
            </button>
          )}
        </div>
      </div>

    </div>
  );
};

export default ProblemSolution;
