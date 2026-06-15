import useInView from "../hooks/useInView";
import Button from "./ui/Button";

const CaseStudyCard = ({ image, heading, subtext, ctaText = "Book Architecture Review", onCTA }) => {
  const [ref, inView] = useInView(0.1);

  return (
    <div className="w-full bg-[#000000]">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div ref={ref} className="w-full flex flex-col items-center gap-8 border overflow-hidden pb-12">
          {image && (
            <div className="w-full" style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
              <img src={image} alt="Case study" className="w-full object-cover" />
            </div>
          )}
          <div className="flex flex-col items-center text-center gap-4 px-6"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}>
            <h2 className="text-white font-medium text-[36px] sm:text-[44px] lg:text-[56px] leading-tight">
              {heading && heading.split("\n").map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
            <p className="text-[#C7C7CC] text-[17px] sm:text-[20px] font-normal max-w-lg leading-relaxed">{subtext}</p>
            <Button onClick={onCTA} className="mt-2 font-semibold text-[16px]" style={{ background: "linear-gradient(180deg, #0A19AD 0%, #2B8EF8 100%)" }}>{ctaText}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
