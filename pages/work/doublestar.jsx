import Image from "next/image";
import React from "react";

const BluWaterResort = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto p-5">
        <h2 className="leading-10">Double Star Game</h2>
        <p className="text-lg py-3">Full Stack Developer - Freelance</p>
        <div className=" mx-auto max-w-4xl ">
          <Image
            src={"/work/blu/bluwaterresort.png"}
            width={1000}
            height={1000}
            alt=""
            className=" my-5  rounded-lg"
          />
        </div>

        <h3>Introduction</h3>
        <p>
          Double Star Game is a modernized version of the traditional gambling
          game Matka. As the Full Stack Developer Lead, I led a team of 3
          developers to create a React Native application that brings the thrill
          of the Matka game to a wider audience. The application&apos;s
          development involved handling critical game logic, implementing secure
          authentication, and managing the entire application lifecycle.
        </p>

        <br />

        <br />
        <h3>Goals and Objectives</h3>
        <p>
          The primary objective of Double Star Game was to create a
          user-friendly and engaging mobile app that modernizes the traditional
          Matka game. The app aimed to attract users from different age groups
          and geographical locations by incorporating intuitive user interfaces,
          real-time updates, and secure authentication.
        </p>

        <br />

        <div className="flex max-md:flex-col p-5 gap-5">
          <Image
            src={"/work/blu/blu-booking.jpg"}
            width={2000}
            height={1000}
            alt=""
            className="md:w-1/2"
          />
          <Image
            src={"/work/blu/blu-booking-2.jpg"}
            width={2000}
            height={1000}
            alt=""
            className="md:w-1/2"
          />
        </div>
        <br />

        <h3>Key Responsibilities</h3>
        <p>
          The resort management team collaborated with me to create a robust and
          intuitive booking website. The following steps were undertaken to
          achieve the project goals:
        </p>
        <br />
        <p>
          <strong>Requirement Gathering: </strong>
          Detailed discussions were held with resort stakeholders to understand
          their specific needs and requirements. This involved identifying
          target audiences, desired features, and any unique aspects of the
          resort that needed to be highlighted.
        </p>
        <p>
          <strong>Design and User Interface: </strong>
          The design was optimized to reflect the resort&apos;s brand identity,
          with attention to aesthetics and usability.
        </p>
        <p>
          <strong>Development: </strong>
          Leveraging modern web technologies like Next.js, MongoDB, Tailwind
          CSS, I built the website using a combination of frontend and backend
          frameworks. They ensured the website was responsive, allowing users to
          access it seamlessly from desktops and smartphones.
        </p>
        <p>
          <strong>Accommodation Listings and Availability: </strong>A robust
          database management system was implemented to store and retrieve
          information about available accommodations, their amenities, pricing,
          and availability. This allowed users to explore various accommodation
          options and check their availability in real-time.
        </p>

        <p>
          <strong>Booking Process: </strong>
          The booking process was streamlined to minimize the number of steps
          required. Users could select their desired dates, choose from
          available accommodation options, and proceed to the payment gateway
          securely. User-friendly forms and clear instructions were implemented
          to guide users through the process effortlessly.
        </p>
        <p>
          <strong>Payment Gateway Integration: </strong>
          To ensure secure and reliable transactions, a AirPay payment gateway
          was integrated into the website. This allowed users to make payments
          using various methods such as credit cards, debit cards, and online
          wallets, with dual encryption and robust security measures in place.
        </p>
        <p>
          <strong>Search Engine Optimization (SEO): </strong>
          The website was optimized for search engines, incorporating relevant
          keywords, meta tags, and other SEO best practices. This helped improve
          the website&apos;s visibility in search engine results and attract
          organic traffic.
        </p>

        <br />

        {/** Tech Stack Used */}

        <br />
        <h3>Results and Outcomes:</h3>
        <p>
          The implementation of the user-friendly resort booking website yielded
          several positive outcomes:
        </p>
        <br />
        <p>
          <strong>Improved User Experience: </strong>The intuitive design and
          streamlined booking process significantly enhanced the user
          experience, resulting in reduced bounce rates and increased user
          engagement.
        </p>
        <p>
          <strong>Increased Bookings: </strong>The simplified booking process,
          coupled with an appealing and informative website, led to a
          substantial increase in bookings and revenue for the resort.
        </p>
        <p>
          <strong>Higher Customer Satisfaction: </strong>Positive feedback from
          guests indicated a high level of satisfaction with the website.
        </p>
      </div>
    </>
  );
};

export default BluWaterResort;
