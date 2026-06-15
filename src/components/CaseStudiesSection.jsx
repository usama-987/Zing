import { useRef, useState } from "react";

const CaseStudyVideoCard = ({ label, videoUrl, thumbnail, companyName, description, cta = "View Case Study →", onCTA }) => {
  const [playing, setPlaying] = useState(false);

  const ytId = videoUrl?.split("/embed/")[1]?.split("?")[0];
  const thumbSrc = thumbnail || `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;

  return (
    <div className="flex flex-col gap-4 min-w-0">
      <span className="text-[#8E8E97] text-[13px] font-semibold tracking-widest uppercase">
        {label}
      </span>

      {/* Thumbnail / Player */}
      <div className="relative w-full rounded-xl overflow-hidden border border-[#FFFFFF17] aspect-video bg-black cursor-pointer"
        onClick={() => setPlaying(true)}
      >
        {playing ? (
          <iframe
            width="100%" height="100%"
            src={`${videoUrl}?autoplay=1`}
            title={companyName}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <>
            <img src={thumbSrc} alt={companyName} className="w-full h-full object-cover" />
          </>
        )}
      </div>

      <h3 className="text-white font-semibold text-[12px] uppercase tracking-wide">
        {companyName}
      </h3>
      <p className="text-[#A1A1AA] text-[14px] font-normal leading-relaxed">
        {description}
      </p>
      <button
        onClick={onCTA}
        className="text-white text-[13.8px] font-semibold px-5 py-2 rounded-lg w-fit cursor-pointer hover:opacity-90 transition-opacity"
        style={{ background: "linear-gradient(180deg, #0A19AD 0%, #2B8EF8 100%)" }}
      >
        {cta}
      </button>
    </div>
  );
};

const CaseStudiesSection = ({
  headingStart = "Real Business Problems",
  headingHighlight = "We've Solved",
  highlightColor = "#2E6EFE",
  cases = [],
}) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardWidth = () => {
    const el = scrollRef.current;
    if (!el) return 0;
    // Use the first child element's offsetWidth + gap (32px)
    const firstCard = el.firstElementChild;
    return firstCard ? firstCard.offsetWidth + 32 : el.offsetWidth;
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = getCardWidth();
    setActiveIndex(Math.round(el.scrollLeft / cardWidth));
  };

  const scrollTo = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = getCardWidth();
    el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
    setActiveIndex(i);
  };

  return (
    <div className="w-full bg-[#000000]">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col gap-10">

        <h2 className="font-medium text-[36px] sm:text-[44px] lg:text-[56px] leading-tight">
          <span className="block text-white">{headingStart}</span>
          <span style={{ color: highlightColor }}>{headingHighlight}</span>
        </h2>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cases.map((item, i) => (
            <div key={i} className="snap-start shrink-0 w-[82vw] sm:w-[65vw] md:w-[40vw] max-w-[420px]">
              <CaseStudyVideoCard
                label={item.label}
                videoUrl={item.videoUrl}
                thumbnail={item.thumbnail}
                companyName={item.companyName}
                description={item.description}
                cta={item.cta}
                onCTA={item.onCTA}
              />
            </div>
          ))}
        </div>

        {/* Segmented scroll indicator */}
        <div className="flex items-center gap-2">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                height: "3px",
                width: i === activeIndex ? "32px" : "16px",
                background: i === activeIndex ? "#FFFFFF" : "#FFFFFF40",
              }}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default CaseStudiesSection;
