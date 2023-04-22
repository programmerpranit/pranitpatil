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
            <p className="hover:text-primary cursor-pointer ">A. C. Patil College of Engineering</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            consequuntur ea aliquid laboriosam consequatur, quidem iste eos.
            Enim officia in recusandae, nesciunt accusamus quasi ipsam
            aspernatur voluptate consequatur ex impedit?
          </p>
        </div>
      </div>
    </>
  );
}
