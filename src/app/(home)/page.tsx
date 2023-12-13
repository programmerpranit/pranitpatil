import React from "react";
import WorkSection from "./WorkSection";

const Page = (): JSX.Element => {
  return (
    <>
      <h2 className="m-auto mt-14 p-5 text-center leading-normal md:mt-20 md:max-w-3xl md:text-[55px] md:leading-relaxed">
        Hey, I&lsquo;m a{" "}
        <span className="text-primary"> Fullstack Developer </span> from Mumbai
      </h2>

      <WorkSection />
    </>
  );
};

export default Page;
