const Initiative = () => {
  const data = [
    {
      heading: "Sustainable Sourcing",
      points: [
        "Direct partnerships with 500+ farmers across Madhya Pradesh.",
        "Training programs on water-efficient irrigation and organic soil enrichment.",
        "Promoting crop rotation practices for soil health and reduced chemical dependency.",
      ],
    },
    {
      heading: "Energy & Resource Efficiency",
      points: [
        "Our state-of-the-art plant runs with 30% energy savings through modern machinery.",
        "LED-based smart lighting and efficient motors reduce overall power demand.",
        "Water recycling systems help us reuse 40% of process water annually.",
      ],
    },
    {
      heading: "Eco-Friendly Packaging",
      points: [
        "Transitioning from plastic-heavy packaging to 100% recyclable PP bags.",
        "Reduced plastic consumption by 15% in 2023–24.",
        "Ongoing R&D into biodegradable packaging solutions for retail packs.",
      ],
    },
    {
      heading: "Emission Reduction & Clean Energy",
      points: [
        "Installation of solar rooftop panels contributing 20% of daily electricity needs.",
        "Commitment to achieve net zero carbon emissions by 2035.",
        "Reduced GHG emissions by 8% annually through energy-efficient practices.",
      ],
    },
    {
      heading: "Waste Management & By-Product Utilization",
      points: [
        "Dal husk & residues reused for cattle feed and biomass energy.",
        "Composting of organic waste for sustainable farming.",
        "Zero waste-to-landfill target set for 2030.",
      ],
    },
    {
      heading: "Certifications & Standards",
      points: [
        "Compliance with ISO 22000, HACCP, and FSSAI quality benchmarks.",
        "Regular third-party sustainability audits for transparency.",
        "Working towards future certifications in carbon footprint neutrality.",
      ],
    },
  ];

  const images = ["/sustainable/1.png", "/sustainable/2.png", "/sustainable/3.png"];

  return (
    <div className="flex flex-col gap-4 md:gap-14 min-w-1/2 items-center px-4 sm:px-6 md:px-[60px] py-6 md:py-[80px] relative text-black w-full">
      <h1 className="text-2xl sm:text-3xl md:text-[40px] w-full">
        Our Sustainability <span className="font-bold">Initiatives</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-8 md:gap-[170px] w-full">
        {/* Images Column */}
        <div className="flex flex-col md:flex-col gap-4 md:gap-8 p-3 sm:p-4 md:p-0 items-center md:items-start">
          {images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              className="w-[220px] h-[220px] sm:min-w-[270px]  sm:min-h-[270px] object-cover rounded-sm shadow-md "
            />
          ))}
        </div>

        {/* Initiatives Timeline */}
        <div className="flex flex-col gap-6 relative w-full">

          <ol className="space-y-8">
            {data.map((item, idx) => (
              <li key={idx} className="relative pl-12">
                {/* Dot */}
                <span className="absolute left-4 -translate-x-1/2 top-1 w-4 h-4 bg-green-600 rounded-full border-2 border-white shadow-md"></span>
                {/* Connector to next dot (omit on last) */}
                {idx !== data.length - 1 && (
                  <span className="absolute left-4 -translate-x-1/2 top-[0.75rem] w-[2px] bg-green-600 h-[calc(100%-0.75rem+2rem)]"></span>
                )}

                {/* Content */}
                <h2 className="font-semibold text-lg">{item.heading}</h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {item.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Initiative;
