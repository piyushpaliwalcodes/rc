const Profilecard = ({ image, position, name }: any) => {
    return (
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          className="w-24 h-24 md:w-[200px] md:h-[200px] object-cover"
        />
        <h1 className="text-sm md:text-base mt-2">{position}</h1>
        <p className="text-xs md:text-sm text-black/80">{name}</p>
      </div>
    );
  };
  
  const Mobileview = ({ companyphases, profiles }: any) => {
    return (
      <div className="flex flex-col gap-8 relative md:hidden">
        {profiles.map((profile: any, index: number) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <Profilecard {...profile} />
            {companyphases[index] && (
              <div className="flex flex-col gap-[5px] text-center">
                <h1 className="font-semibold text-base">
                  {companyphases[index].heading}
                </h1>
                <p className="text-sm text-black/70">
                  {companyphases[index].descr}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  const Legacyoftrust = () => {
    const profiles = [
      {
        image: "/profile/1.png",
        position: "1930-1977 (Founder)",
        name: "Late Shri Champalal Mittal",
      },
      {
        image: "/profile/2.png",
        position: "1945-Present (Director)",
        name: "Shri Manakchand Mittal",
      },
      {
        image: "/profile/3.png",
        position: "1970-Present (M.D.)",
        name: "Shri Uttam Mittal",
      },
      {
        image: "/profile/4.png",
        position: "2003-Present (G.M)",
        name: "Shri Keshav Mittal",
      },
    ];
  
    const companyphases = [
      {
        heading: "Humble Beginnings",
        descr:
          "In the 1969’s, Late Shri Champalalji Mittal started a grain trading business in Khandwa, laying the foundation of RC’s legacy.",
      },
      {
        heading: "First Transformation",
        descr:
          "In the 1990s, Shri Manakchandji Mittal established Ram Pratap Champalal Mills, setting up warehousing and grading units for urad dal continuing legacy of his father.",
      },
      {
        heading: "Expansion Era",
        descr:
          "The mill grew into a full-fledged agro-processing unit, pioneering modern grading and storage systems to serve wider markets.",
      },
      {
        heading: "Modernisation Drive",
        descr:
          "Manakchand Mittal handed legacy to Uttam Mittal. Under Shri Uttam Mittal’s leadership, advanced processing units were installed, streamlining supply chains and strengthening quality standards.",
      },
      {
        heading: "Building Farmer Partnerships",
        descr:
          "RC Mills began direct farmer sourcing and fair pricing models, empowering rural supply chains and ensuring consistent raw material.",
      },
      {
        heading: "Global Footprint",
        descr:
          "RC expanded into exports, supplying premium pulses to international markets and building a reputation for reliability.",
      },
      {
        heading: "Next-Gen Leadership",
        descr:
          "In 2024, Shri Keshav Mittal took the reins, combining tradition with modern agri-tech, branding, and digital innovation.",
      },
      {
        heading: "A Vision for Tomorrow",
        descr:
          "RC Mills is now focused on sustainable growth, eco-friendly packaging, and becoming India’s most trusted agro-processing brand.",
      },
    ];
  
    return (
      <div className="flex flex-col gap-10 md:gap-[60px] px-4 md:px-[60px] py-6 md:py-[60px] text-black ">
        <h1 className="text-3xl md:text-[44px]">
          Our <span className="font-bold">Legacy of Trust</span>
        </h1>
  
        {/* Desktop View */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-[200px] relative hidden md:flex">
          {/* Profiles */}
          <div className="flex flex-col gap-6 md:gap-[40px]">
            {profiles.map((profile, index) => (
              <Profilecard key={index} {...profile} />
            ))}
          </div>
  
          {/* Phases */}
          <div className="flex w-full md:w-[700px] relative">
            <div className="flex flex-col gap-6 md:gap-[60px] w-full md:w-[95%] relative">
              {/* Vertical yellow line */}
              <div className="absolute left-[-35px] top-10 w-1 bg-[#FCD900] h-[89%]"></div>
  
              {companyphases.map((phase, index) => (
                <div key={index} className="flex flex-col gap-[5px] relative">
                  {/* Yellow circular node */}
                  <div className="absolute -left-[40px] top-1/2 w-4 h-4 bg-[#FCD900] rounded-full shadow-md"></div>
                  <h1 className="font-semibold text-lg">{phase.heading}</h1>
                  <p className="text-base text-black/70">{phase.descr}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Mobile View */}
        <Mobileview companyphases={companyphases} profiles={profiles} />
      </div>
    );
  };
  
  export default Legacyoftrust;
  