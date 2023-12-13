import Image from "next/image";
import React from "react";

const LuckyNumbers = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto p-5">
        <h2 className="leading-10">
          Lucky Numbers Game - Modernize the classic 1980s TV show
        </h2>
        <p className="text-lg py-3">Full Stack Developer - WebXStudio</p>
        <br />
        <div className=" mx-auto max-w-4xl ">
          <Image
            src={"/work/luckynumbers/mockups.png"}
            width={1000}
            height={1000}
            alt=""
            className=" my-5  rounded-lg"
          />
        </div>
        <br />
        <br />

        <p>
          The &quot;Lucky Numbers Game&quot; is a modernized mobile application
          based on the popular 1980s TV show &quot;Lucky Numbers.&quot; As the
          Full Stack Developer Lead, I had the privilege of leading the
          development team and handling the entire application lifecycle. The
          project involved creating a user-friendly and engaging React Native
          app for players and an efficient Admin Panel to manage the game and
          users.
        </p>

        <br />

        <h3>Background</h3>
        <p>
          The &quot;Lucky Numbers Game&quot; project aimed to modernize the
          classic 1980s TV show &quot;Lucky Numbers&quot; by transforming it
          into an engaging and user-friendly mobile gaming experience. Before
          our involvement, there was an existing app based on the TV show, but
          it suffered from numerous bugs and performance issues. The app&apos;s
          lackluster performance and outdated design hindered user experience.
        </p>
        <br />
        <br />
        <h3>Goals and Objectives</h3>
        {/* <br /> */}
        <p>
          <strong> Enhance Performance and Stability:</strong>
          The primary goal of the project was to address the performance issues
          and bugs that plagued the original app. We aimed to optimize the
          app&apos;s speed, reduce loading times, and ensure smooth gameplay for
          an uninterrupted user experience.
        </p>
        <p>
          <strong>Modernize the User Interface:</strong>
          Our objective was to give the app a fresh and modern look while
          retaining elements that would evoke nostalgia for fans of the original
          TV show. An appealing and intuitive design was essential to attract
          new users and retain existing ones.
        </p>

        <p>
          <strong>Develop an Access-based Admin Panel:</strong>
          To streamline game management, we aimed to create an efficient and
          secure admin panel with role-based access control. This would empower
          administrators to handle questions, users, and game sessions
          effectively.
        </p>

        <p>
          <strong>Integrate Robust Authentication</strong>
          Security was a top priority, and we aimed to implement strong
          authentication mechanisms to protect user data and prevent
          unauthorized access to the app.
        </p>

        <p>
          <strong>Improve Overall User Experience</strong>
          By revamping the app&apos;s design, enhancing performance, and
          incorporating real-time gameplay, we aimed to provide a delightful and
          immersive user experience that would keep players coming back for
          more.
        </p>

        <br />
        <br />

        <h3>Tech Stack Used</h3>
        <br />
        <div className="flex max-md:flex-col p-5 gap-5">
          <div className="">
            <Image
              src={"/stack/react-native.png"}
              width={1000}
              height={500}
              alt=""
              className="h-44 object-contain"
            />
            <p className="mt-5 text-center font-semibold">React Native</p>
          </div>
          <div className="">
            <Image
              src={"/stack/nextjs.webp"}
              width={1000}
              height={500}
              alt=""
              className="h-44 object-contain"
            />
            <p className="mt-5 text-center font-semibold">Next Js</p>
          </div>
          <div className="">
            <Image
              src={"/stack/supabase.png"}
              width={1000}
              height={500}
              alt=""
              className="h-44 object-contain"
            />
            <p className="mt-5 text-center font-semibold">Supabase</p>
          </div>
          <div className="">
            <Image
              src={"/stack/postgres.png"}
              width={1000}
              height={500}
              alt=""
              className="h-44 object-contain"
            />
            <p className="mt-5 text-center font-semibold">Postgresql</p>
          </div>
        </div>
        <br />

        <h3>Development Process</h3>

        {/* <br /> */}
        <p>
          <strong>Project Planning and Requirements Gathering:</strong>
          Collaborated with stakeholders, including product managers and game
          designers, to understand their vision for the modernized Lucky Numbers
          Game. Conducted a comprehensive analysis of the existing app&apos;s
          issues and user feedback to identify pain points and improvement
          opportunities.
        </p>
        <p>
          <strong>Architecture and Tech Stack Selection: </strong>
          After considering the project&apos;s requirements and scalability
          needs, we opted for React Native as the development framework to
          ensure cross-platform compatibility and a faster development cycle. We
          Chose NextJs for Admin Panel also additional libraries and tools to
          optimize performance and deliver a seamless user experience.
        </p>
        <p>
          <strong>Team Management: </strong>
          As the Full Stack Developer Lead, I managed a team of three
          developers, ensuring clear communication, well-defined tasks, and
          timely progress updates. Encouraged teamwork and knowledge sharing to
          leverage the strengths of each team member
        </p>
        <p>
          <strong>React Native App Development and UI/UX Design: </strong>A
          Started the app development process from scratch, addressing the
          identified performance issues and bugs to create a stable foundation.
          Collaborated with UI/UX designers to create a visually appealing and
          intuitive user interface that aligned with the game&apos;s theme and
          branding
        </p>

        <p>
          <strong>Admin Panel Development </strong>
          Designed and developed a robust admin panel with role-based access
          control, allowing administrators to manage various aspects of the
          game, such as analytics, users, and game sessions. Prioritized
          security measures in the admin panel to protect sensitive information.
        </p>
        <p>
          <strong>Game Logic: </strong>
          Implemented and refined the game logic to ensure best user experience
          and winner determination.
        </p>
        <p>
          <strong>Authentication and Security: </strong>
          Integrated secure authentication mechanisms, such as OAuth (google,
          facebook, apple) and Phone Number Authentication, to safeguard user
          data and ensure secure login and registration processes.
        </p>

        <br />

        {/** Tech Stack Used */}

        <br />
        <h3>Results and Outcomes:</h3>
        <p>
          The successful execution of the Lucky Numbers Game App project
          resulted in a revitalized and high-performance mobile gaming
          experience. The achieved outcomes and results include:
        </p>
        <br />
        <p>
          <strong>Improved Performance: </strong>Through optimization efforts
          and bug fixes, we significantly enhanced the app performance, reducing
          loading times and ensuring a smoother gameplay experience.
        </p>
        <p>
          <strong>Modern User Interface: </strong>The modernized UI/UX design
          breathed new life into the app, captivating users with its fresh look
          while still paying homage to the TV show&apos;s nostalgic elements.
        </p>
        <p>
          <strong>Efficient Admin Panel: </strong>The access-based admin panel
          simplified game management and allowed administrators to handle
          various aspects of the app with ease.
        </p>
        <p>
          <strong>Enhanced Security: </strong>The integration of robust
          authentication mechanisms ensured that user data remained secure,
          establishing trust among players.
        </p>

        <br />
        <h3>Conclusion:</h3>
        <br />
        <p>
          As the Full Stack Developer Lead for the Lucky Numbers Game App, I had
          the privilege of modernizing a beloved TV show into an interactive and
          engaging mobile gaming experience. By addressing performance issues,
          enhancing the user interface, and incorporating real-time multiplayer
          functionality, we successfully revitalized the app, attracting a wider
          audience and earning positive user feedback.
        </p>
        <p>
          The project allowed me to demonstrate my expertise in React Native app
          development, game logic implementation, and security measures.
          Moreover, managing a team of developers and collaborating with
          stakeholders honed my leadership and communication skills.
        </p>
        <p>
          The Lucky Numbers Game App case study showcases my ability to deliver
          high-quality and innovative applications, and I am proud to have been
          a part of this project. I eagerly anticipate taking on new challenges
          and contributing to the development of future cutting-edge
          applications.
        </p>
      </div>
    </>
  );
};

export default LuckyNumbers;
