import Image from "next/image";
import React from "react";

export default function TalkCard() {
  return (
    <>
      <div className="max-w-6xl m-auto border shadow my-8 rounded-lg  flex flex-col md:flex-row">
        <div className="md:w-2/5 p-5">
          <Image
            src={"/talks/webdev101.jpg"}
            height={200}
            width={600}
            alt=""
            className="max-h-72 rounded-lg object-cover object-center"
          />
        </div>
        <div className="md:w-3/5 p-5">
          <h2 className="leading-normal mb-4">Web Development 101</h2>
          <div className="flex flex-col md:flex-row md:gap-5 pb-4">
            <p className="hover:text-primary cursor-pointer ">12-10-2022 </p>
            <p className="hover:text-primary cursor-pointer ">
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
