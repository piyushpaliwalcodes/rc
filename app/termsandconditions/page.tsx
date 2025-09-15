const Termsandconditions = () => {
    const points = [
      {
        mainheading: "Company Information",
        heading: [
          {
            content:
              "RC Pulses (including RC Mills, RC Dal, RC Seeds, and related product lines) is engaged in agro-processing, packaging, and distribution of pulses, grains, and seeds across India and international markets.",
          },
          {
            content:
              "The Site is designed to provide product information, facilitate customer orders, and support business-to-business (B2B) and business-to-consumer (B2C) transactions.",
          },
        ],
      },
      {
        mainheading: "Eligibility to Use",
        heading: [
          {
            content: "By using the Site, you confirm that you are:",
            subheadings: [
              "At least 18 years of age, or using the website under supervision of a parent/guardian.",
              "Authorized to represent an entity or company (in case of B2B orders).",
            ],
          },
          {
            content:
              "RC Pulses reserves the right to refuse access or service to any customer if misuse, fraud, or violation of these Terms is suspected.",
          },
        ],
      },
      {
        mainheading: "Product Information & Availability",
        heading: [
          {
            content:
              "All product descriptions, images, and packaging shown are for illustrative purposes. Variations in size, labeling, or design may occur due to updates, regulatory requirements, or regional preferences.",
          },
          {
            content:
              "RC Pulses does not guarantee continuous product availability. Certain items may be limited in stock or discontinued without prior notice.",
          },
        ],
      },
      {
        mainheading: "Pricing & Payment",
        heading: [
          {
            content:
              "Prices listed are in Indian Rupees (INR) unless otherwise specified for international customers.",
          },
          {
            content:
              "RC Pulses reserves the right to change pricing, discounts, and offers at its sole discretion.",
          },
        ],
      },
      {
        mainheading: "Shipping & Delivery",
        heading: [
          {
            content:
              "Domestic and international shipping timelines will be communicated at the time of order confirmation.",
          },
          {
            content:
              "Delivery timelines may vary depending on location, logistics, customs clearance (for exports), and unforeseen circumstances.",
          },
          {
            content:
              "RC Pulses is not liable for delays caused by third-party couriers, strikes, natural calamities, or force majeure events.",
          },
        ],
      },
      {
        mainheading: "Returns, Refunds & Replacements",
        heading: [
          {
            content:
              "Due to the consumable nature of pulses and food products, returns are generally not accepted once the package is opened or tampered.",
          },
          {
            content: "Refunds/replacements may be considered only in cases of:",
            subheadings: [
              "Damaged packaging on delivery.",
              "Incorrect product supplied.",
              "Proven quality issues within shelf life.",
            ],
          },
          {
            content:
              "Claims must be raised within 7 days of delivery with proof (photos, invoice details).",
          },
        ],
      },
      {
        mainheading: "Intellectual Property Rights",
        heading: [
          {
            content:
              "All trademarks, trade names, product packaging, logos, designs, and content displayed on this Site are the exclusive property of RC Pulses.",
          },
          {
            content:
              "Users are prohibited from copying, distributing, reproducing, or exploiting any materials without prior written consent.",
          },
        ],
      },
      {
        mainheading: "User Conduct",
        heading: [
          {
            content: "You agree not to:",
            subheadings: [
              "Misuse the website for unlawful activities.",
              "Distribute spam, malware, or harmful content.",
              "Post defamatory, offensive, or misleading information regarding RC Pulses.",
              "Attempt unauthorized access to the Site or its servers.",
            ],
          },
        ],
      },
      {
        mainheading: "Limitation of Liability",
        heading: [
          {
            content:
              "RC Pulses shall not be responsible for any indirect, incidental, or consequential damages resulting from the use of products or the website.",
          },
          {
            content:
              "Customers are advised to ensure proper storage and handling of food products after delivery.",
          },
        ],
      },
      {
        mainheading: "Governing Law & Dispute Resolution",
        heading: [
          {
            content: "These Terms are governed by the laws of India.",
          },
          {
            content:
              "Any disputes shall fall under the exclusive jurisdiction of courts in New Delhi, India.",
          },
          {
            content:
              "For international customers, disputes will be resolved in accordance with applicable Indian laws unless otherwise agreed.",
          },
        ],
      },
    ];
  
    return (
      <div className="flex flex-col">
        <div className="flex flex-col p-4 py-6 md:p-[60px] gap-6 md:gap-[60px] text-black max-w-full bg-[#FBF9F4]">
          <h1 className="text-center text-[40px] font-bold">
            Terms & Conditions
          </h1>
        </div>
  
        {/*second section*/}
        <div className="flex flex-col p-4 py-6 md:p-[60px] gap-5 text-black max-w-full">
          <h1>
            <span className="font-semibold">Last Updated:</span> 12 September 2025
          </h1>
          <p>
            Welcome to RC Pulses. By visiting or purchasing from our website
            [www.rcpluses.com], you (“User,” “Customer”) agree to comply with and
            be bound by the following Terms & Conditions. Please read them
            carefully before using our website.
          </p>
  
          <ol className="list-decimal pl-6 space-y-4">
            {points.map((point, index) => (
              <li key={index}>
                <h2 className="font-bold text-lg">{point.mainheading}</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {point.heading.map((head, i) => (
                    <li key={i}>
                      {head.content}
                      {head.subheadings && (
                        <ul className="list-[circle] pl-6 space-y-1">
                          {head.subheadings.map((sub, j) => (
                            <li key={j}>{sub}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
                <h2 className="font-bold text-lg">Contact Information</h2>
                <p>For any queries,complaints or clarifications:</p>
                <h2 className="font-bold text-lg">RC Pulses</h2>
                <h2 className="text-lg"> <span className="font-bold">Office Address:</span>Moghat Road</h2>
                <h2 className="text-lg"> <span className="font-bold">Factory Address:</span>Mokalgoan Road, Dondwada, Khandwa</h2>
                <h2 className="text-lg"> <span className="font-bold">Email:</span>Mokalgoan Road, Dondwada, Khandwa</h2>
                <h2 className="text-lg"> <span className="font-bold">Phone:</span>+ 91 9425326237, + 91 9425326237</h2>
                

            </li>
          </ol>
        </div>
      </div>
    );
  };
  
  export default Termsandconditions;
  