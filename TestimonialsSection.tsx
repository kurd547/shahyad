"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteCards, FlowCards, CompanyCardItem } from "@/components/ui/animations";
import { Animate3DDiv } from "@/components/ui/animations";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-10 z-10 flex flex-col gap-10 justify-center items-center"
    >
      <Animate3DDiv rotateDepth={10} translateDepth={10}>
        <h1 className="text-4xl sm:text-6xl font-semibold text-center">
          What <span className="text-purple animate-shine">People Say</span>
        </h1>
      </Animate3DDiv>

      <div className="flex flex-col items-center ">
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteCards items={testimonials} direction="left" speed={80} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16">
        <FlowCards direction="right" speed="slow">
          {companies.map((c, idx) => (
            <CompanyCardItem
              key={idx}
              img={c.img}
              nameImg={c.nameImg}
              name={c.name}
              width={c.id === 4 || c.id === 5 ? 100 : 150}
            />
          ))}
        </FlowCards>
      </div>
    </section>
  );
};

export default Testimonials;
