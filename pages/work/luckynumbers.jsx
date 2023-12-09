import Image from "next/image";
import React from "react";
import { GrDocumentPerformance } from "react-icons/gr";
import { BiUserCheck } from "react-icons/bi";
import { MdOutlineAnalytics } from "react-icons/md";

const LuckyNumbers = () => {
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
            src={"/work/luckynumbers/mockups.png"}
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
            <p>Mobile App & Admin Panel </p>
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
          The Lucky Numbers Game aimed to revive the classic 80s TV show,
          transforming it into an engaging mobile gaming experience. Before our
          involvement, the existing app suffered from bugs, performance issues,
          and an outdated design, hampering user experience.
        </p>
        <div className="flex flex-col md:flex-row py-10">
          <div className="md:w-1/3 p-5">
            <GrDocumentPerformance
              className="mx-auto text-purple-400 "
              size={50}
            />
            <br />
            <h3 className="text-center pb-2">
              Enhanced Performance & Stability
            </h3>
            <p className="text-center ">
              Address and resolve existing bugs, ensuring a smoother and more
              stable app performance.
            </p>
          </div>
          <div className="md:w-1/3 p-5">
            <BiUserCheck className="mx-auto text-purple-400 " size={50} />
            <br />
            <h3 className="text-center pb-2">Modernized User Interface</h3>

            <p className="text-center">
              Revamp the design for a contemporary, user-friendly interface,
              enhancing engagement and accessibility.
            </p>
          </div>
          <div className="md:w-1/3 p-5">
            <MdOutlineAnalytics
              className="mx-auto text-purple-400 "
              size={50}
            />
            <br />
            <h3 className="text-center pb-2">
              Development of Access-based Admin Panel
            </h3>

            <p className="text-center">
              Create an efficient admin panel for streamlined content management
              and updates.
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
              <strong>Performance Enhancement:</strong> Resolved bugs and
              boosted stability for a smoother experience through rigorous
              debugging and code optimization, minimizing crashes and improving
              overall functionality.
            </li>
            <li>
              <strong>User Interface Revamp:</strong>Modernized the outdated
              design, prioritizing user engagement by employing contemporary
              design principles for an intuitive, appealing interface.
            </li>
            <li>
              <strong>Access-based Admin Panel:</strong> Simplified content
              management with an intuitive, access-based admin panel,
              facilitating easy updates and maintenance without technical
              complexities or barriers.
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
              src={"/stack/supabase.png"}
              alt=""
            />
            <p className="font-semibold pt-2">Supabase</p>
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
              src={"/stack/nextjs.png"}
              alt=""
            />
            <p className="font-semibold pt-2">Next Js</p>
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
            Reduced app crashes by 60%, resulting in a smoother and more
            reliable gaming experience. Received positive user feedback on the
            revamped, user-friendly design, leading to a 40% increase in user
            engagement. Enabled hassle-free content updates and management,
            improving operational efficiency by 30%.
          </p>
        </div>
        <div className="md:w-1/2 p-5">
          <Image
            className="rounded-xl"
            src={"/work/luckynumbers/mockups.png"}
            width={700}
            height={700}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default LuckyNumbers;
