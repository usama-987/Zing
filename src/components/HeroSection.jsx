import { useEffect, useState } from "react";
import Button from "./ui/Button";

const HeroSection = ({
  badge, headingStart, headingMiddle, headingHighlight, headingEnd,
  subtext, primaryCTA, secondaryCTA, onPrimaryCTA, onSecondaryCTA,
  buildWithLabel = "BUILD WITH", buildWithIcons = [],
  trustedByLabel = "TRUSTED BY\nSCALING TEAMS", trustedByLogos = [],
  backgroundImage,
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 100); return () => clearTimeout(t); }, []);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section
      className="relative flex flex-col items-center text-center px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat" } : {}}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 flex flex-col items-center gap-5 max-w-5xl mx-auto w-full px-2">
        {badge && (
          <div className="flex items-center gap-2 border border-[#2E6EFE] rounded-full px-3 sm:px-4 py-1.5 whitespace-nowrap" style={fadeUp(0)}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E6EFE] shrink-0" />
            <span className="text-[#93B1FF] text-[10px] sm:text-[13px] font-semibold tracking-wider sm:tracking-widest uppercase">{badge}</span>
          </div>
        )}
        <h1 className="text-[36px] sm:text-[52px] lg:text-[72px] font-semibold text-white leading-none" style={fadeUp(0.15)}>
          {headingStart && (
            <span className="block">
              {headingStart.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </span>
          )}
          {headingMiddle && headingHighlight ? (
            <span className="whitespace-nowrap">
              {headingMiddle}{" "}
              <span style={{ background: "linear-gradient(90deg, #6A90FF 0%, #FFFFFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {headingHighlight}
              </span>
            </span>
          ) : headingHighlight && (
            <span style={{ background: "linear-gradient(90deg, #6A90FF 0%, #FFFFFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {headingHighlight}
            </span>
          )}
          {headingEnd && <span> {headingEnd}</span>}
        </h1>
        {subtext && <p className="text-[#D4D4D8] text-[15px] sm:text-[18px] lg:text-[21px] max-w-2xl leading-relaxed px-2" style={fadeUp(0.3)}>{subtext}</p>}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row items-center gap-3 flex-wrap justify-center" style={fadeUp(0.45)}>
            {primaryCTA && <Button onClick={onPrimaryCTA} className="font-semibold text-[16px] w-full sm:w-auto" style={{ background: "linear-gradient(180deg, #0A19AD 0%, #2B8EF8 100%)" }}>{primaryCTA}</Button>}
            {secondaryCTA && <button onClick={onSecondaryCTA} className="text-white text-[14px] sm:text-[16px] font-medium px-6 py-3 rounded-lg border border-white/20 hover:border-white/50 transition-colors cursor-pointer w-full sm:w-auto">{secondaryCTA}</button>}
          </div>
        )}
        {buildWithIcons.length > 0 && (
          <div className="flex flex-col items-center gap-4 mt-2 w-full" style={fadeUp(0.6)}>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="text-[#71717A] text-[11px] font-semibold tracking-widest uppercase w-full sm:w-auto text-center sm:text-left">{buildWithLabel}</span>
              {buildWithIcons.map((icon, i) => <img key={i} src={icon.src} alt={icon.alt} className="w-6 h-6 sm:w-7 sm:h-7 object-contain opacity-80 hover:opacity-100 transition-opacity" />)}
            </div>
          </div>
        )}
      </div>
      {trustedByLogos.length > 0 && (
        <div className="relative z-10 mt-10 w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-0" style={fadeUp(0.75)}>
          {/* Static label — stays in place, logos scroll behind it on sm+ */}
          <div className="relative z-10 shrink-0 flex items-center sm:self-stretch px-4 sm:pl-8 sm:pr-10"
            style={{ background: "linear-gradient(to right, black 65%, transparent 100%)" }}>
            <p className="text-[#8E8E97] text-[11px] font-semibold tracking-widest uppercase whitespace-pre-line text-center sm:text-left leading-4">
              {trustedByLabel}
            </p>
          </div>
          {/* Marquee — scrolls behind/next to the label */}
          <div className="overflow-hidden flex-1 w-full sm:w-auto sm:-ml-10">
            <div className="marquee-track">
              {[...trustedByLogos, ...trustedByLogos].map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-7 w-28 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity mx-8 sm:mx-10 shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
