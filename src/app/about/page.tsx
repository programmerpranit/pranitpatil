import React from "react";

const About = (): JSX.Element => {
  return (
    <>
      <div className="m-auto max-w-6xl p-5">
        <h2 className=" my-5">About Me</h2>

        <a href="/resume-pranit-patil.pdf" download>
          <button className="bg-primary">My Resume</button>
        </a>
        <br />
        <br />
        <div className="hidden">I am going to add a parallex effect here</div>

        <p>
          I&apos;m a passionate Full stack developer based in Mumbai, with
          expertise in both freelance projects and full-time roles. With a
          strong command of modern technologies and frameworks, including React,
          JavaScript, Next.js, and TypeScript, I have mastered the art of
          creating robust and dynamic web applications. I take pride in
          delivering high-quality code and crafting intuitive user experiences.
        </p>
        <br />
        <p>
          In addition to web development, I also have the skills to develop
          mobile applications, providing seamless experiences across platforms.
          Whether it&apos;s building responsive websites or creating mobile
          apps, I strive to stay up-to-date with the latest industry trends and
          best practices to ensure that my projects are at the forefront of
          innovation.
        </p>
        <br />
        <p>
          As a community-oriented individual, I actively engage with other
          developers, sharing knowledge and insights to foster growth within the
          tech community. I believe in the power of collaboration and
          continuously seek opportunities to contribute to open-source projects
          and attend industry events.
        </p>
        <br />
        <p>
          I am dedicated to creating exceptional digital experiences that make a
          positive impact. Whether you&apos;re looking for a talented full stack
          developer or a frontend specialist, I am ready to bring your vision to
          life. Let&apos;s collaborate and build something extraordinary
          together.
        </p>
        <br />
        <p>
          Feel free to explore my portfolio and get in touch. I can&apos;t wait
          to hear about your exciting projects and how we can work together to
          achieve your goals.
        </p>
      </div>
    </>
  );
};

export default About;
