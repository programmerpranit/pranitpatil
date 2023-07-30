import React from "react";
import WorkCard from "./WorkCard";
import SmallWork from "./SmallWork";

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
        <WorkCard
          image={"/work/luckynumbers/mockup-light.png"}
          title={"Lucky Number Game"}
          description={"Modernize the classic 1980s TV show"}
          url={"/work/luckynumbers"}
        />
      </div>
      <div className=" flex justify-center flex-wrap mt-20">
        <SmallWork
          image={"/work/aidni/aidni.jpg"}
          title={"Aidni International"}
          url={"https://aidniinternational.com/"}
        />
        <SmallWork
          image={"/work/UI/air-o-sea.jpg"}
          title={"Air-O-Sea International"}
          url={"https://airoseainternational.com"}
        />

        <SmallWork
          image={"/work/UI/darban.png"}
          title={"Darban Resort"}
          url={"https://www.darbanresort.com/"}
        />

        <SmallWork
          image={"/work/UI/malshej-agro.png"}
          title={"Malshej Agro Resort"}
          url={"https://www.malshejagro.com/"}
        />

        <SmallWork
          image={"/work/UI/skg.jpg"}
          title={"SKG Steeltech"}
          url={"https://skgsteeltech.com/"}
        />

        <SmallWork
          image={"/work/UI/squirrel.png"}
          title={"Squirrel Resort"}
          url={"https://www.squirrelresort.com/"}
        />

        <SmallWork
          image={"/work/UI/torna-mutton.png"}
          title={"Torna Mutton Khanawal"}
          url={"https://hoteltornamuttonkhanawal.com/"}
        />
      </div>
    </>
  );
};

export default WorkSection;
