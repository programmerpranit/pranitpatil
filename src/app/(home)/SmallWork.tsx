import Link from "next/link";
import React from "react";

interface SmallWorkProps {
  title: string;
  url: string;
}

const SmallWork = ({ title, url }: SmallWorkProps): JSX.Element => {
  return (
    <>
      <div className="flex items-center justify-between gap-5 py-5">
        <h3 className="max-md:text-lg max-md:leading-7">{title}</h3>
        <Link href={url}>
          <p className="font-semibold text-primary">Check Website </p>
        </Link>
      </div>
    </>
  );
};

export default SmallWork;
