const Profilecard = ({image,position,name}:any) =>
{
    return <div className="flex flex-col  items-center">
        <img src={image} className="w-[200px] h-[200px]"/>
        <h1>{position}</h1>
        <p>{name}</p>
    </div>
}

const Legacyoftrust= () =>
{

    const profiles = [
        {
            image:"/profile/1.png",
            position:"1930-1977(Founder)",
            name:"Late Shri Champalal Mittal"
        },
        {
            image:"/profile/2.png",
            position:"1945-Present(Director)",
            name:"Shri Manakchand Mittal"
        },
        {
            image:"/profile/3.png",
            position:"1970-Present(M.D.)",
            name:"Shri Uttam Mittal"
        },
        {
            image:"/profile/4.png",
            position:"2003-Present(G.M)",
            name:"Shri Keshav Mittal"
        }
    ]


    const companyphases = [
        {
            heading:"Humble Beginnings",
            descr:"In the 1969’s, Late Shri Champalalji Mittal started a grain trading business in Khandwa, laying the foundation of RC’s legacy."
        },
        {
            heading:"First Transformation",
            descr:"In the 1990s, Shri Manakchandji Mittal established Ram Pratap Champalal Mills, setting up warehousing and grading units for urad dal continuing legacy of his father."
        },
        {
            heading:"Expansion Era",
            descr:"The mill grew into a full-fledged agro-processing unit, pioneering modern grading and storage systems to serve wider markets."
        },
        {
            heading:"Modernisation Drive",
            descr:"Manakchand Mittal handed legacy to Uttam Mittal.Under Shri Uttam Mittal’s leadership, advanced processing units were installed, streamlining supply chains and strengthening quality standards."
        },
        {
            heading:"Building Farmer Partnerships",
            descr:"RC Mills began direct farmer sourcing and fair pricing models, empowering rural supply chains and ensuring consistent raw material."
        },
        {
            heading:"Global Footprint",
            descr:"RC expanded into exports, supplying premium pulses to international markets and building a reputation for reliability."
        },
        {
            heading:"Next-Gen Leadership",
            descr:"In 2024, Shri Keshav Mittal took the reins, combining tradition with modern agri-tech, branding, and digital innovation."
        },
        {
            heading:"A Vision for Tomorrow",
            descr:"RC Mills is now focused on sustainable growth, eco-friendly packaging, and becoming India’s most trusted agro-processing brand."
        }
    ]
    return <div className="flex flex-col gap-[30px]   px-4 md:px-[60px] py-6 md:py-[60px] bg-[#F9F9F9] text-black ">
              <h1 className="text-[44px]">Our <span className="font-bold">Legacy of Trust</span></h1>

              <div className="flex justify-between">
                <div className="flex flex-col gap-[40px]">
                    {
                        profiles.map((profile)=>(
                            <Profilecard {...profile}/>
                        ))
                    }
                </div>
                <div className="flex w-[700px]">
                <div className="flex flex-col gap-[30px] w-[80%]">
                    { companyphases.map((phase)=>(
                        <div className="flex flex-col gap-[5px]">
                            <h1>{phase.heading}</h1>
                            <p>{phase.descr}</p>
                        </div>
                    ))
                        
                    }
                </div>
                </div>
                
              </div>
    </div>
}


export default Legacyoftrust;