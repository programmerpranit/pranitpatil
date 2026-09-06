import React from "react";
import Link from "next/link";
import { experience } from "@/content/experience";

const ExperienceSection = (): JSX.Element => {
  return (
    <div className="mt-16 md:mt-24">
      <h2>Experience</h2>

      <div className="mt-8 flex flex-col gap-10">
        {experience.map((item) => (
          <div key={item.company}>
            <h3>{item.role}</h3>
            <p className="mt-1 text-secondary">
              {item.company} · {item.location} · {item.start} – {item.end}
            </p>
            <p className="mt-3">{item.impact}</p>
          </div>
        ))}
      </div>

      <Link href="/about">
        <p className="mt-8 font-semibold text-primary">Full experience & resume</p>
      </Link>
    </div>
  );
};

export default ExperienceSection;
