import Image from "next/image";
import React from "react";

const BluWaterResort = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto p-5">
        <h2>Blu Water Resort - a User-Friendly Booking Website</h2>
        <p className="text-lg py-3">Full Stack Developer - Freelance</p>

        <Image
          src={"/work/blu/bluwaterresort.png"}
          width={700}
          height={500}
          alt=""
          className="mx-auto my-5 object-cover rounded-lg"
        />

        <h3>Introduction</h3>
        <p>
          The aim of this case study is to present the development and
          implementation of a user-friendly resort booking website. This website
          provides a seamless and convenient booking experience for customers,
          allowing them to easily explore and reserve accommodations at the
          resort. By leveraging modern web technologies and an intuitive user
          interface, the website aims to enhance the overall customer experience
          and drive increased bookings for the resort.
        </p>

        <br />
        <br />

        <h3>Background</h3>
        <p>
          The resort, located in a picturesque destination at Malshej Ghat, was
          renowned for its breathtaking views, luxurious accommodations, and a
          wide range of recreational activities. However, the resort faced
          challenges in streamlining their booking process. As a result,
          potential guests often encountered difficulties while trying to make
          reservations, leading to missed opportunities and decreased customer
          satisfaction.
        </p>
        <br />
        <br />
        <h3>Goals and Objectives</h3>
        <p></p>
      </div>
    </>
  );
};

export default BluWaterResort;
