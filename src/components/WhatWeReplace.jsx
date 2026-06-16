import useInView from "../hooks/useInView";

const WhatWeReplace = ({ heading = "What we replace", images = [] }) => {
  const [ref, inView] = useInView(0.1);

  return (
    <div className="w-full bg-[#000000] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col gap-10">
        <h2 className="text-white font-medium text-[36px] sm:text-[44px] lg:text-[56px] leading-tight animate-fade-up"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-50px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          {heading}
        </h2>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="hover-card rounded-xl overflow-hidden border border-[#FFFFFF17]"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : `translateX(${i % 2 === 0 ? "-40px" : "40px"})`, transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s` }}>
              <img src={img.src} alt={img.alt || `Replace ${i + 1}`} className="w-full h-48 sm:h-56 lg:h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeReplace;
