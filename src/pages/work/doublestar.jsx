import Image from "next/image";
import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiUserCheck } from "react-icons/bi";
import { IoMdStopwatch } from "react-icons/io";

const DoubleStar = () => {
  return (
    <>
      {/* Top Section */}
      <section className="flex flex-col md:flex-row mx-auto max-w-7xl gap-5 my-10 ">
        <div className="md:w-1/2 flex flex-col justify-center items-center p-5 md:px-10">
          <h2 className="text-center">
            Reviving a Classic TV Show into an Engaging Mobile Gaming Experience
          </h2>
          <br />
          <p className="text-center">
            The Lucky Numbers Game aimed to revive the classic 80s TV show,
            transforming it into an engaging mobile gaming experience
          </p>
        </div>
        <div className="md:w-1/2 p-5">
          <Image
            className="rounded-xl"
            src={"/work/doublestar/doublestar.png"}
            width={700}
            height={700}
            alt=""
          />
        </div>
      </section>

      {/* Detail Strip  */}
      <section className="px-5 py-10  bg-purple-400 bg-opacity-5 my-20">
        <div className="flex flex-col md:flex-row justify-around mx-auto max-w-7xl gap-10">
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-lg pb-2">Role</p>
            <p>Full Stack Developer - Webxstudio</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-lg pb-2">Project Type</p>
            <p>Mobile App </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-lg pb-2">Duration</p>
            <p>16 Weeks</p>
          </div>
        </div>
      </section>
      {/* Business Objectives  */}
      <section className=" mx-auto max-w-7xl gap-5 my-10 ">
        <h2 className="text-center">Business Objectives</h2>
        <br />
        <p className="text-center p-5">
          The Double Star App redefined casino betting, accommodating 10,000+
          users in simultaneous gameplay. Beyond profitability, the challenge
          involved algorithm optimization for company gain while ensuring a
          user-friendly interface, rapid loading, and optimal performance on
          low-end devices.
        </p>
        <div className="flex flex-col md:flex-row py-10">
          <div className="md:w-1/3 p-5">
            <MdOutlineAttachMoney className="mx-auto text-blue-600" size={50} />
            <br />
            <h3 className="text-center pb-2">
              Profitable Algorithm & User Engagement
            </h3>
            <p className="text-center ">
              Develop an algorithm balancing company profits without
              compromising user engagement.
            </p>
          </div>
          <div className="md:w-1/3 p-5">
            <BiUserCheck className="mx-auto text-blue-600" size={50} />
            <br />
            <h3 className="text-center pb-2">Seamless User Experience</h3>

            <p className="text-center">
              Prioritize a user-friendly interface for an enjoyable betting
              experience.
            </p>
          </div>
          <div className="md:w-1/3 p-5">
            <IoMdStopwatch className="mx-auto text-blue-600 " size={50} />
            <br />
            <h3 className="text-center pb-2">
              Optimized Performance for All Devices:
            </h3>

            <p className="text-center">
              Ensure fast loading and smooth performance, catering to users with
              low-end devices.
            </p>
          </div>
        </div>
      </section>

      {/* Project Development Considerations  */}
      <section className="flex flex-col  md:flex-row mx-auto max-w-7xl md:gap-5 my-20 ">
        <div className="md:w-1/2 flex flex-col justify-center items-center p-5 px-10">
          <h2 className="text-center">Project Development Considerations</h2>
        </div>
        <div className="md:w-1/2 p-5">
          <ul className="list-disc list-inside">
            <li>
              <strong>Algorithm Balancing Profitability & Engagement:</strong>{" "}
              Balancing fair play, profitability, and user engagement posed a
              challenge. The solution involved crafting an algorithm that
              prioritized fairness and engagement while maintaining a profitable
              framework for the company success.
            </li>
            <li>
              <strong>User-Centric Interface & Experience:</strong> Designing a
              seamless interface guiding users through an engaging betting
              journey was challenging. The solution focused on intuitive design
              elements, fostering an enjoyable, user-centric environment for an
              enhanced betting experience.
            </li>
            <li>
              <strong>Optimized Performance Across Devices:</strong> Ensuring
              consistent performance across various devices presented a
              challenge. The solution revolved around refining app functionality
              and seamless gameplay, accommodating diverse device capabilities
              for an inclusive user experience.
            </li>
          </ul>
        </div>
      </section>
      {/* Tech Stack Used  */}
      <section className="mx-auto max-w-7xl  my-10">
        <h2 className="text-center">Tech Stack Used</h2>
        <div className="flex flex-col md:flex-row py-10 gap-5 justify-around ">
          <div className=" flex flex-col  items-center">
            <Image
              className="h-20 object-contain"
              width={70}
              height={70}
              src={"/stack/react.png"}
              alt=""
            />
            <p className="font-semibold pt-2">React Native</p>
          </div>
          <div className=" flex flex-col  items-center">
            <Image
              className="h-20 object-contain"
              width={70}
              height={70}
              src={"/stack/strapi.png"}
              alt=""
            />
            <p className="font-semibold pt-2">Strapi</p>
          </div>
          <div className=" flex flex-col  items-center">
            <Image
              className="h-20 object-contain"
              width={70}
              height={70}
              src={"/stack/postgres.png"}
              alt=""
            />
            <p className="font-semibold pt-2">Postgres</p>
          </div>
          <div className=" flex flex-col  items-center">
            <Image
              className="h-20 object-contain"
              width={70}
              height={70}
              src={"/stack/auth0.png"}
              alt=""
            />
            <p className="font-semibold pt-2">Auth0</p>
          </div>

          <div className=" flex flex-col  items-center">
            <Image
              className="h-20 object-contain"
              width={70}
              height={70}
              src={"/stack/nodejs.png"}
              alt=""
            />
            <p className="font-semibold pt-2">Node Js</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="flex flex-col md:flex-row mx-auto max-w-7xl gap-5 my-10 py-20">
        <div className="md:w-1/2 flex flex-col justify-center items-center p-5 px-10">
          <h2 className="text-center">Result</h2>
          <br />
          <p className="text-center">
            Balanced profitability and engagement, ensuring an exciting and fair
            gaming experience. Users enjoyed the intuitive design and engaging
            features. Enhanced loading and gameplay even on low-end devices,
            providing an inclusive betting experience.
          </p>
        </div>
        <div className="md:w-1/2 p-5">
          <Image
            className="rounded-xl"
            src={"/work/doublestar/doublestar.png"}
            width={700}
            height={700}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default DoubleStar;
