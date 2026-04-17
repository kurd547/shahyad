import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/layouts";
import { gridItems } from "@/data";

function Grid() {
  return (
    <section id="about" className="bg-gradient-to-b from-blue-700/38 via-transparent to-black px-5 sm:px-10">
      <BentoGrid className="w-full py-5">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            titleStyle={item.titleStyle}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
