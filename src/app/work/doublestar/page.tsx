import Image from "next/image";
import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiUserCheck } from "react-icons/bi";
import { IoMdStopwatch } from "react-icons/io";

const DoubleStar = (): JSX.Element => {
  return (
    <>
      {/* Top Section */}
      <section className="mx-auto my-10 flex max-w-7xl flex-col gap-5 md:flex-row ">
        <div className="flex flex-col items-center justify-center p-5 md:w-1/2 md:px-10">
          <h2 className="text-center">
            Reviving a Classic TV Show into an Engaging Mobile Gaming Experience
          </h2>
          <br />
          <p className="text-center">
            The Lucky Numbers Game aimed to revive the classic 80s TV show,
            transforming it into an engaging mobile gaming experience
          </p>
        </div>
        <div className="p-5 md:w-1/2">
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
      <section className="my-20 bg-purple-400  bg-opacity-5 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-around gap-10 md:flex-row">
          <div className="flex flex-col items-center justify-center">
            <p className="pb-2 text-lg font-semibold">Role</p>
            <p>Full Stack Developer - Webxstudio</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="pb-2 text-lg font-semibold">Project Type</p>
            <p>Mobile App </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="pb-2 text-lg font-semibold">Duration</p>
            <p>16 Weeks</p>
          </div>
        </div>
      </section>
      {/* Business Objectives  */}
      <section className=" mx-auto my-10 max-w-7xl gap-5 ">
        <h2 className="text-center">Business Objectives</h2>
        <br />
        <p className="p-5 text-center">
          The Double Star App redefined casino betting, accommodating 10,000+
          users in simultaneous gameplay. Beyond profitability, the challenge
          involved algorithm optimization for company gain while ensuring a
          user-friendly interface, rapid loading, and optimal performance on
          low-end devices.
        </p>
        <div className="flex flex-col py-10 md:flex-row">
          <div className="p-5 md:w-1/3">
            <MdOutlineAttachMoney className="mx-auto text-blue-600" size={50} />
            <br />
            <h3 className="pb-2 text-center">
              Profitable Algorithm & User Engagement
            </h3>
            <p className="text-center ">
              Develop an algorithm balancing company profits without
              compromising user engagement.
            </p>
          </div>
          <div className="p-5 md:w-1/3">
            <BiUserCheck className="mx-auto text-blue-600" size={50} />
            <br />
            <h3 className="pb-2 text-center">Seamless User Experience</h3>

            <p className="text-center">
              Prioritize a user-friendly interface for an enjoyable betting
              experience.
            </p>
          </div>
          <div className="p-5 md:w-1/3">
            <IoMdStopwatch className="mx-auto text-blue-600 " size={50} />
            <br />
            <h3 className="pb-2 text-center">
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
      <section className="mx-auto my-20  flex max-w-7xl flex-col md:flex-row md:gap-5 ">
        <div className="flex flex-col items-center justify-center p-5 px-10 md:w-1/2">
          <h2 className="text-center">Project Development Considerations</h2>
        </div>
        <div className="p-5 md:w-1/2">
          <ul className="list-inside list-disc">
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
      <section className="mx-auto my-10  max-w-7xl">
        <h2 className="text-center">Tech Stack Used</h2>
        <div className="flex flex-col justify-around gap-5 py-10 md:flex-row ">
          <div className=" flex flex-col  items-center">
            <Image
              className="h-20 object-contain"
              width={70}
              height={70}
              src={"/stack/react.png"}
              alt=""
            />
            <p className="pt-2 font-semibold">React Native</p>
          </div>
          <div className=" flex flex-col  items-center">
            <Image
              className="h-20 object-contain"
              width={70}
              height={70}
              src={"/stack/strapi.png"}
              alt=""
            />
            <p className="pt-2 font-semibold">Strapi</p>
          </div>
          <div className=" flex flex-col  items-center">
            <Image
              className="h-20 object-contain"
              width={70}
              height={70}
              src={"/stack/postgres.png"}
              alt=""
            />
            <p className="pt-2 font-semibold">Postgres</p>
          </div>
          <div className=" flex flex-col  items-center">
            <Image
              className="h-20 object-contain"
              width={70}
              height={70}
              src={"/stack/auth0.png"}
              alt=""
            />
            <p className="pt-2 font-semibold">Auth0</p>
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
            Balanced profitability and engagement, ensuring an exciting and fair
            gaming experience. Users enjoyed the intuitive design and engaging
            features. Enhanced loading and gameplay even on low-end devices,
            providing an inclusive betting experience.
          </p>
        </div>
        <div className="p-5 md:w-1/2">
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
