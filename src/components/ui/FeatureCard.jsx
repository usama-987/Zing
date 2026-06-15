const FeatureCard = ({ icon, title, description }) => {
  return (
    <div
      className="hover-card flex flex-col gap-4 p-6 bg-white"
      style={{ borderRadius: "8px", border: "1px solid #111113" }}
    >
      {icon && (
        <div
          className="w-9 h-9 flex items-center justify-center"
          style={{ border: "1px solid #8080808C", borderRadius: "8px" }}
        >
          <img src={icon} alt={title} className="w-5 h-5 object-contain" />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold" style={{ color: "#0A0A0BB8", fontSize: "19px" }}>
          {title}
        </h3>
        <p className="font-normal text-[16px]" style={{ color: "#646464" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
