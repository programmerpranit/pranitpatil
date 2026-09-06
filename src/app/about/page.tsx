import React from "react";
import { experience } from "@/content/experience";

const About = (): JSX.Element => {
  return (
    <>
      <div className="m-auto max-w-6xl p-5">
        <h2 className="my-5">About Me</h2>

        <a href="/resume-pranit-patil.pdf" download>
          <button className="bg-primary">My Resume</button>
        </a>
        <br />
        <br />

        <p>
          I&apos;m a software engineer based in Mumbai, India, working mostly
          with React and Next.js. I care about performance, accessibility,
          and shipping features that hold up at scale.
        </p>

        <h3 className="mb-4 mt-12">Experience</h3>

        {experience.map((item) => (
          <div key={item.company} className="mb-8">
            <h4 className="mb-1">
              {item.role} — {item.company}
            </h4>
            <p className="mb-3 text-secondary">
              {item.location} · {item.start} – {item.end}
            </p>
            <ul className="list-disc space-y-1 pl-5">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        <h3 className="mb-4 mt-12">Freelance</h3>

        <div className="mb-8">
          <h4 className="mb-1">Eyetech — ECG Training with Eye Tracking</h4>
          <p className="mb-3 text-secondary">Aug 2023 – May 2024</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Built a web app for eye tracking and heat-map generation for
              ECG training.
            </li>
            <li>Implemented gaze tracking on HTML Canvas.</li>
            <li>
              Processed 100+ gaze points per second with a 30% performance
              improvement.
            </li>
          </ul>
          <p className="mt-3 text-secondary">
            Next.js · MongoDB · Tailwind CSS · WebGazer.js · HTML Canvas
          </p>
        </div>

        <h3 className="mb-4 mt-12">Education</h3>
        <div className="mb-8">
          <h4 className="mb-1">
            Bachelor of Computer Engineering — A.C. Patil College of
            Engineering
          </h4>
          <p className="text-secondary">
            Kharghar, Navi Mumbai · 2020 – 2024 · CGPA 7.98
          </p>
        </div>

        <h3 className="mb-4 mt-12">Skills</h3>
        <p className="mb-8">
          JavaScript, TypeScript, Golang, Python, Kotlin, C++, React, Next.js,
          React Native, Express.js, PostgreSQL, MySQL, MongoDB, Firebase,
          Supabase, AWS, Google Cloud, Vercel, Git, GitHub Actions, Tailwind
          CSS, Prisma, WebSockets, REST APIs.
        </p>

        <h3 className="mb-4 mt-12">Achievements</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>Gave a talk on WASM at React Mumbai.</li>
          <li>
            Ran a React and web development workshop at my college for 30+
            students.
          </li>
          <li>Organized Ace of Hacks, a 24-hour hackathon.</li>
        </ul>
      </div>
    </>
  );
};

export default About;
