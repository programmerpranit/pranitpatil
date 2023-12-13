import Image from "next/image";
import React from "react";

export default function TalkCard(): JSX.Element {
  return (
    <>
      <div className="m-auto my-8 flex max-w-6xl flex-col rounded-lg  border shadow md:flex-row">
        <div className="p-5 md:w-2/5">
          <Image
            src={"/talks/webdev101.jpg"}
            height={200}
            width={600}
            alt=""
            className="max-h-72 rounded-lg object-cover object-center"
          />
        </div>
        <div className="p-5 md:w-3/5">
          <h2 className="mb-4 leading-normal">Web Development 101</h2>
          <div className="flex flex-col pb-4 md:flex-row md:gap-5">
            <p className="cursor-pointer hover:text-primary ">12-10-2022 </p>
            <p className="cursor-pointer hover:text-primary ">
              A. C. Patil College of Engineering
            </p>
          </div>
          <p>
            I organized and presented an engaging web development workshop at
            ACPCE, where participants explored the art of building functional
            websites. We covered important topics like HTML, CSS and JavaScript
            equipping attendees with valuable skills to excel in this field.
            Through interactive exercises, live demonstrations, and engaging
            discussions, the workshop created a collaborative learning
            environment that sparked creativity and empowered participants to
            unleash their full potential in web development.
          </p>
        </div>
      </div>
    </>
  );
}
