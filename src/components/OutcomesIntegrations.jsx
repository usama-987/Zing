import useInView from "../hooks/useInView";
import Button from "./ui/Button";
import OutcomeCard from "./ui/OutcomeCard";

const OutcomesIntegrations = ({
  outcomesLabel = "OUTCOMES",
  headingStart = "Turn operations", headingLine2Start = "into ",
  headingHighlight = "leverage.", highlightColor = "#2E6EFE",
  outcomesSubtext, outcomesCTA = "Book Architecture Review", onOutcomesCTA, cards = [],
  integrationsLabel = "INTEGRATIONS",
  integrationsHeading = "Built to integrate\nwith your stack.",
  integrationsSubtext, integrations = [],
}) => {
  const [ref1, inView1] = useInView(0.1);
  const [ref2, inView2] = useInView(0.1);

  return (
    <div className="w-full bg-[#010913] overflow-hidden">
      <div ref={ref1} className="max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row gap-12 items-start">
        <div className="w-full lg:w-1/2 flex flex-col gap-6"
          style={{ opacity: inView1 ? 1 : 0, transform: inView1 ? "translateX(0)" : "translateX(-50px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          <span className="text-[#8E8E97] text-[13px] font-semibold tracking-widest uppercase">{outcomesLabel}</span>
          <h2 className="font-medium text-[36px] sm:text-[44px] lg:text-[56px] leading-tight">
            <span className="block text-white">{headingStart}</span>
            <span className="text-white">{headingLine2Start}</span>
            <span style={{ color: highlightColor }}>{headingHighlight}</span>
          </h2>
          {outcomesSubtext && <p className="text-[#C7C7CC] text-[17px] sm:text-[20px] font-normal leading-relaxed">{outcomesSubtext}</p>}
          <Button onClick={onOutcomesCTA} className="font-semibold text-[16px] w-fit" style={{ background: "linear-gradient(180deg, #0A19AD 0%, #2B8EF8 100%)" }}>{outcomesCTA}</Button>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          style={{ opacity: inView1 ? 1 : 0, transform: inView1 ? "translateX(0)" : "translateX(50px)", transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s" }}>
          {cards.map((card, i) => <OutcomeCard key={i} icon={card.icon} title={card.title} description={card.description} />)}
        </div>
      </div>

      <div className="w-full" style={{ borderTop: "1px solid #FFFFFF17" }} />

      <div ref={ref2} className="max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col items-center gap-8 text-center">
        <span className="text-[#8E8E97] text-[13px] font-semibold tracking-widest uppercase"
          style={{ opacity: inView2 ? 1 : 0, transform: inView2 ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>{integrationsLabel}</span>
        <h2 className="text-white font-medium text-[36px] sm:text-[44px] lg:text-[56px] leading-tight"
          style={{ opacity: inView2 ? 1 : 0, transform: inView2 ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s" }}>
          {integrationsHeading.split("\n").map((line, i) => <span key={i} className="block">{line}</span>)}
        </h2>
        {integrations.length > 0 && (
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {integrations.map((item, i) => (
              <div key={i} className="flex items-center gap-2"
                style={{ opacity: inView2 ? 1 : 0, transform: inView2 ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.5s ease ${0.15 + i * 0.1}s, transform 0.5s ease ${0.15 + i * 0.1}s` }}>
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <span className="text-white font-semibold text-[22px]">{item.name}</span>
              </div>
            ))}
          </div>
        )}
        {integrationsSubtext && (
          <p className="text-[#C7C7CC] text-[15px] sm:text-[16px] font-normal leading-relaxed max-w-5xl text-center"
            style={{ opacity: inView2 ? 1 : 0, transform: inView2 ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s" }}>
            {integrationsSubtext}
          </p>
        )}
      </div>
    </div>
  );
};

export default OutcomesIntegrations;
