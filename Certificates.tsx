import React from "react";
import { SparklesText } from "../ui/effects/SparklesText";
import { FlowCards } from "../ui/animations";
import { CertificateCardItem } from "../ui/animations/FlowCards";
import { certificates } from "@/data";

export default function Certificates() {
  return (
    <div className="bg-transparent p-10">
      <SparklesText text="Certificates" />
      <section className="-mt-10">
        <FlowCards direction="left" speed="slow">
          {certificates.map((c, idx) => (
            <CertificateCardItem
              key={idx}
              img={c.img}
              alt={c.name}
              width={500}
            />
          ))}
        </FlowCards>
      </section>
    </div>
  );
}
