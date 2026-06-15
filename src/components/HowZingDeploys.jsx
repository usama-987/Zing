const HowZingDeploys = ({
  label = "SYSTEMS",
  headingLine1 = "How Zing",
  headingLine2 = "Deploys Systems.",
  highlightColor = "#2E6EFE",
  image,
}) => {
  return (
    <div
      className="w-full bg-[#010913]"
      style={{ borderTop: "1px solid #FFFFFF17", borderBottom: "1px solid #FFFFFF17" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col gap-8">

        <span className="text-[#8E8E97] text-[13px] font-semibold tracking-widest uppercase">
          {label}
        </span>

        <h2 className="font-medium text-[36px] sm:text-[44px] lg:text-[56px] leading-tight">
          <span className="block text-white">{headingLine1}</span>
          <span style={{ color: highlightColor }}>{headingLine2}</span>
        </h2>

        {image && (
          <div className="w-full mt-4 rounded-xl overflow-hidden border border-[#FFFFFF17]">
            <img src={image} alt="How Zing deploys systems" className="w-full object-cover" />
          </div>
        )}

      </div>
    </div>
  );
};

export default HowZingDeploys;
