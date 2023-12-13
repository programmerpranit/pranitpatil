import React from "react";
import TalkCard from "./TalkCard";

const Page = (): JSX.Element => {
  return (
    <>
      <h2 className="my-5 text-center">Talks</h2>

      <TalkCard />
    </>
  );
};

export default Page;
