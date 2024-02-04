"use client";

import Image from "next/image";
import React from "react";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { PiCursorClickBold } from "react-icons/pi";
import { RiSeoLine } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Bluwater = (): JSX.Element => {
  return (
    <>
      {/* Top Section */}
      <section className="mx-auto my-10 flex max-w-7xl flex-col gap-5 md:flex-row ">
        <div className="flex flex-col items-center justify-center p-5 md:w-1/2 md:px-10">
          <h2 className="text-center">
            A User-Friendly Resort Booking Website
          </h2>
          <br />
          <p className="text-center">
            Blu Water Resort. Seamlessly Connecting Guests to Unforgettable
            Stays
          </p>
          <a className="mt-2 font-semibold" href="https://bluwaterresort.in">
            View Website
          </a>
        </div>
        <div className="md:w-1/2">
          <Image
            src={"/work/blu/bluwaterresort.png"}
            width={700}
            height={700}
            alt=""
          />
        </div>
      </section>

      {/* Detail Strip  */}
      <section className="my-20 bg-primary  bg-opacity-5 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-around gap-10 md:flex-row">
          <div className="flex flex-col items-center justify-center">
            <p className="pb-2 text-lg font-semibold">Role</p>
            <p>Freelance Developer</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="pb-2 text-lg font-semibold">Project Type</p>
            <p> Web App</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="pb-2 text-lg font-semibold">Duration</p>
            <p>14 Weeks</p>
          </div>
        </div>
      </section>
      {/* Business Objectives  */}
      <section className=" mx-auto my-10 max-w-7xl gap-5 ">
        <h2 className="text-center">Business Objectives</h2>
        <br />
        <p className="p-5 text-center">
          The Resort Booking Website aimed to revolutionize the guest experience
          by providing an intuitive platform for hassle-free booking and
          seamless access to the resort amenities. With a focus on user-friendly
          design and robust functionality, the goal was to enhance customer
          satisfaction and streamline the booking process.
        </p>
        <div className="flex flex-col py-10 md:flex-row">
          <div className="p-5 md:w-1/3">
            <PiCursorClickBold
              className="mx-auto text-primary text-opacity-80"
              size={50}
            />
            <br />
            <h3 className="pb-2 text-center">Enhanced User Experience</h3>

            <p className="text-center ">
              Simplify the booking process and provide an engaging, intuitive
              interface for users.
            </p>
          </div>
          <div className="p-5 md:w-1/3">
            <FaArrowUpWideShort
              className="mx-auto text-primary text-opacity-80"
              size={50}
            />
            <br />
            <h3 className="pb-2 text-center">Increased Bookings</h3>

            <p className="text-center">
              Drive more online bookings through an efficient and appealing
              platform.
            </p>
          </div>
          <div className="p-5 md:w-1/3">
            <RiSeoLine
              className="mx-auto text-primary text-opacity-80"
              size={50}
            />
            <br />
            <h3 className="pb-2 text-center">Improved Accessibility & SEO</h3>

            <p className="text-center">
              Ensure accessibility across various devices and browsers to reach
              a wider audience.
            </p>
          </div>
        </div>
      </section>

      {/* Project Development Considerations  */}
      <section className="mx-auto my-20 flex max-w-7xl flex-col md:flex-row md:gap-5 ">
        <div className="flex flex-col items-center justify-center p-5 px-10 md:w-1/2">
          <h2 className="text-center">Project Development Considerations</h2>
        </div>
        <div className="p-5 md:w-1/2">
          <p className="pb-2">
            To develop a responsive web app for hassle-free room booking.With a
            focus on user-friendly design and robust functionality.
          </p>

          <ul className="list-inside list-disc">
            <li>
              <strong>Real-Time Booking Integration:</strong> Synchronized
              website and resort database for instant room availability updates,
              ensuring accurate and timely booking information for users
              convenience.
            </li>
            <li>
              <strong>Responsive Design Implementation:</strong> Crafted a
              mobile-first design strategy, ensuring an intuitive and consistent
              user experience across various devices and screen sizes.
            </li>
            <li>
              <strong>Secure Payment Gateway Integration:</strong> Implemented a
              robust and encrypted payment gateway, prioritizing user data
              security while facilitating seamless and trustworthy online
              transactions.
            </li>
          </ul>
        </div>
      </section>
      {/* Tech Stack Used  */}
      <section className="mx-auto my-10  max-w-7xl">
        <h2 className="text-center">Tech Stack Used</h2>
        <div className="flex flex-col justify-around gap-5 py-10 md:flex-row ">
          <div className=" flex flex-col  items-center">
            <Image
              className="h-20 object-contain"
              width={70}
              height={70}
              src={"/stack/nextjs.png"}
              alt=""
            />
            <p className="pt-2 font-semibold">Next Js</p>
          </div>
          <div className=" flex flex-col  items-center">
            <Image
              className="h-20 object-contain"
              width={70}
              height={70}
              src={"/stack/tailwind-css.png"}
              alt=""
            />
            <p className="pt-2 font-semibold">Tailwind Css</p>
          </div>
          <div className=" flex flex-col  items-center">
            <Image
              className="h-20 object-contain"
              width={70}
              height={70}
              src={"/stack/mongodb.png"}
              alt=""
            />
            <p className="pt-2 font-semibold">MongoDB</p>
          </div>
          <div className=" flex flex-col  items-center">
            <Image
              className="h-20 object-contain"
              width={70}
              height={70}
              src={"/stack/nodejs.png"}
              alt=""
            />
            <p className="pt-2 font-semibold">Node Js</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto my-10 flex max-w-7xl flex-col gap-5 py-20 md:flex-row">
        <div className="flex flex-col items-center justify-center p-5 px-10 md:w-1/2">
          <h2 className="text-center">Result</h2>
          <br />
          <p className="text-center">
            Within the first six months of launch, online bookings increased by
            40%. Positive feedback from users citing the website ease of
            navigation and booking process. Achieved a mobile responsiveness
            rate of 90%, catering to a diverse range of devices and users.
          </p>
        </div>
        <div className="md:w-1/2">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src={"/work/blu/blu-booking.jpg"}
                width={700}
                height={700}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"/work/blu/blu-booking-2.jpg"}
                width={700}
                height={700}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Bluwater;
