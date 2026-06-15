import useInView from "../hooks/useInView";
import Button from "./ui/Button";

const CTABanner = ({
  headingStart = "Your Software Should\nWork For ",
  headingHighlight = "Your Business", highlightColor = "#2E6EFE",
  subtext, primaryCTA = "Book Architecture Review",
  secondaryCTA = "See Live System Examples",
  onPrimaryCTA, onSecondaryCTA, noteItems = [], backgroundImage,
}) => {
  const [ref, inView] = useInView(0.1);

  const fadeUp = (delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <div className="relative w-full overflow-hidden"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" } : { backgroundColor: "#010913" }}>
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6 py-20 lg:py-28 flex flex-col items-center text-center gap-6">
        <h2 className="font-medium text-[38px] sm:text-[44px] lg:text-[52px] leading-tight text-white" style={fadeUp(0)}>
          {headingStart.split("\n").map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
          <span style={{ color: highlightColor }}>{headingHighlight}</span>
        </h2>
        {subtext && <p className="text-[#A1A1AA] text-[17px] sm:text-[20px] font-normal leading-relaxed max-w-xl" style={fadeUp(0.15)}>{subtext}</p>}
        <div className="flex flex-col sm:flex-row items-center gap-3" style={fadeUp(0.3)}>
          <Button onClick={onPrimaryCTA} className="font-semibold text-[16px]" style={{ background: "linear-gradient(180deg, #0A19AD 0%, #2B8EF8 100%)" }}>{primaryCTA}</Button>
          {secondaryCTA && (
            <button onClick={onSecondaryCTA} className="text-white text-[16px] font-medium px-6 py-3 rounded-lg border border-white/20 hover:border-white/50 transition-colors cursor-pointer">{secondaryCTA}</button>
          )}
        </div>
        {noteItems.length > 0 && (
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-3 w-full" style={fadeUp(0.45)}>
            {noteItems.map((item, i) => (
              <span key={i} className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                <span className="text-[#A1A1AA] text-[12px]">•</span>
                <span className="text-[#A1A1AA] text-[13px] sm:text-[15px] font-normal font-[onset]">{item}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CTABanner;
