import useInView from "../hooks/useInView";

const Footer = ({
  tagline = "We build the systems that run\nhow your business actually works.",
  columns = [],
  copyright = "© 2026 Zing Systems, Inc.",
}) => {
  const [ref, inView] = useInView(0.1);

  return (
    <footer className="w-full bg-[#001022]">
      <div className="w-full" style={{ borderTop: "1px solid #FFFFFF17" }} />
      <div ref={ref} className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="flex flex-col gap-4 lg:max-w-[220px]"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-50px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
            <img src="/Logo.svg" alt="Zing Logo" className="h-7 w-fit" />
            <p className="text-[#A1A1AA] text-[15.5px] font-normal leading-relaxed whitespace-pre-line">{tagline}</p>
          </div>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(50px)", transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s" }}>
            {columns.map((col, i) => (
              <div key={i} className="flex flex-col gap-3">
                {col.links.map((link, j) => (
                  <a key={j} href={link.href || "#"} className="text-[#A1A1AA] text-[15.5px] font-normal hover:text-white transition-colors">{link.label}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full" style={{ borderTop: "1px solid #FFFFFF17" }} />
      <div className="max-w-5xl mx-auto px-6 py-5">
        <p className="text-[#71717A] text-[14px] font-normal">{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
