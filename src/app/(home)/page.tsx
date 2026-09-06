import React from "react";
import WorkSection from "./WorkSection";
import ExperienceSection from "./ExperienceSection";

const Page = (): JSX.Element => {
  return (
    <div className="m-auto max-w-6xl p-5">
      <h1 className="m-auto mt-10 text-center text-[38px] leading-normal md:mt-16 md:max-w-3xl md:text-[55px] md:leading-relaxed">
        Hey, I&lsquo;m a{" "}
        <span className="text-primary"> Fullstack Developer </span> from Mumbai
      </h1>

      <ExperienceSection />
      <WorkSection />
    </div>
  );
};

export default Page;
