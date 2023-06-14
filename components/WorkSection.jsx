import React from "react";
import WorkCard from "./WorkCard";

const WorkSection = () => {
  return (
    <>
      {/* Blu Resort Lucky Numbers Doublestar Aidni Website Api Day Mumbai */}

      <div className="work flex md:flex-row flex-col justify-around mt-40">
        <WorkCard
          image={"/work/blu/bluwaterresort.png"}
          title={"Blu Water Resort"}
          description={
            "Enhancing Resort Experiences through a User-Friendly Booking Website"
          }
          url={"/work/bluwaterresort"}
        />
        {/* <WorkCard image={"/"} title={""} url={""} /> */}
      </div>
    </>
  );
};

export default WorkSection;
