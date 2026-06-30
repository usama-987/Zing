import useInView from "../hooks/useInView";

const Footer = ({
  tagline = "Production-grade AI systems for scaling companies. Built around how your business actually works.",
  columns = [],
  copyright = "© 2026 Zing Systems, Inc.",
}) => {
  const [ref, inView] = useInView(0.1);

  return (
    <footer className="w-full bg-[#001022]" style={{ borderTop: "1px solid #FFFFFF17" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-8 py-14">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Brand column */}
          <div
            className="flex flex-col gap-5 max-w-[280px] sm:max-w-[320px] lg:max-w-[210px]"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-40px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            <img src="/Logo.svg" alt="Zing Logo" className="h-6 w-fit" />
            <p className="text-[#6B7280] text-[13.5px] font-normal leading-relaxed lg:max-w-[152px]">{tagline}</p>
          </div>

          {/* Nav columns */}
          <div
            className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-10"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(40px)", transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s" }}
          >
            {columns.map((col, i) => (
              <div key={i} className="flex flex-col gap-4">
                {col.title && (
                  <span className="text-white text-[11px] font-semibold tracking-widest uppercase mb-1">{col.title}</span>
                )}
                {col.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href || "#"}
                    className="text-[#6B7280] text-[13.5px] font-normal hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="w-full" style={{ borderTop: "1px solid #FFFFFF17" }} />
      </div>
      <div className="max-w-6xl mx-auto px-8 py-5">
        <p className="text-[#4B5563] text-[13px] font-normal">{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
