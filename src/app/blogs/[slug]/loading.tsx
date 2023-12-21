import React from "react";

const Loading = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto w-1/2">
        <div className="h-20 w-full animate-pulse rounded bg-slate-100"></div>
        <br />
        <div className="h-80 w-full animate-pulse rounded bg-slate-100"></div>
        <br />
        <div className="h-screen w-full animate-pulse rounded bg-slate-100"></div>
      </div>
    </>
  );
};

export default Loading;
