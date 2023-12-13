import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SmallWorkProps {
  image: string;
  title: string;
  url: string;
}

const SmallWork = ({ image, title, url }: SmallWorkProps): JSX.Element => {
  return (
    <>
      <div className="m-5 flex items-center gap-5 rounded-lg border p-5 shadow md:w-2/5">
        <Image
          src={image}
          width={700}
          height={500}
          alt=""
          className="w-2/5 rounded-lg object-contain"
        />
        <div className="">
          <h3 className="max-md:text-lg max-md:leading-7">{title}</h3>
          <Link href={url}>
            <p className="font-semibold text-primary">Check Website </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SmallWork;
