import React from "react";
import WorkCard from "./WorkCard";
import SmallWork from "./SmallWork";

const WorkSection = (): JSX.Element => {
  return (
    <>
      {/* Blu Resort Lucky Numbers Doublestar Aidni Website Api Day Mumbai */}

      <h2 className="mt-16 md:mt-24">Selected Work</h2>

      <div className="work mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <WorkCard
          image={"/work/blu/bluwaterresort.png"}
          title={"Blu Water Resort"}
          description={
            "Enhancing Resort Experiences through a User-Friendly Booking Website"
          }
          url={"/work/bluwaterresort"}
        />
        <WorkCard
          image={"/work/luckynumbers/mockup-light.png"}
          title={"Lucky Number Game"}
          description={"Modernize the classic 1980s TV show"}
          url={"/work/luckynumbers"}
        />
        <WorkCard
          image={"/work/doublestar/doublestar.png"}
          title={"Double Star Game"}
          description={
            "Revamping Casino Betting for Mass Participation with User-Friendly Performance"
          }
          url={"/work/doublestar"}
        />
      </div>
      <div className="mt-20 flex flex-col divide-y divide-gray-200 border-t border-gray-200">
        <SmallWork
          title={"Malshej Agro Resort"}
          url={"https://www.malshejagro.com/"}
        />
        <SmallWork
          title={"Air-O-Sea International"}
          url={"https://airoseainternational.com"}
        />
        <SmallWork
          title={"Darban Resort"}
          url={"https://www.darbanresort.com/"}
        />
        <SmallWork
          title={"SKG Steeltech"}
          url={"https://skgsteeltech.com/"}
        />
        <SmallWork
          title={"Squirrel Resort"}
          url={"https://www.squirrelresort.com/"}
        />
      </div>
    </>
  );
};

export default WorkSection;
