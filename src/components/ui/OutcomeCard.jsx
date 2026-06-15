const OutcomeCard = ({ icon, title, description }) => {
  return (
    <div
      className="hover-card flex flex-col gap-3 p-5 bg-white"
      style={{ borderRadius: "8px", border: "1px solid #111113" }}
    >
      {icon && (
        <img src={icon} alt={title} className="w-5 h-5 object-contain" />
      )}
      <h3 className="font-semibold text-[19px]" style={{ color: "#0A0A0BB8" }}>
        {title}
      </h3>
      <p className="font-normal text-[15.5px] text-[#A1A1AA] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default OutcomeCard;
