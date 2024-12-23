import React from "react";
import SectionContainer from "../sections_utility/SectionContainer";
import SectionHeader from "../sections_utility/SectionHeader";
import testimonials from "@/data/testimonials.json";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <SectionContainer id="testimonials">
      <div className="section-contents">
        <SectionHeader
          plainText="📢 Check Out These"
          highlightText="Testimonials"
        />
        <div className="w-full overflow-x-clip">
          <div className="w-[1758px] sm:w-[2754px] flex
            items-stretch justify-start gap-[23px] 
            pr-[23px] overflow-x-clip animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, id) => (
              <Testimonial
                key={id}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                description={testimonial.description}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
