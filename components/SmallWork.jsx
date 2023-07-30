import Image from "next/image";
import Link from "next/link";
import React from "react";

const SmallWork = ({ image, title, url }) => {
  return (
    <>
      <div className="md:w-2/5 m-5 border p-5 flex items-center gap-5 shadow rounded-lg">
        <Image
          src={image}
          width={700}
          height={500}
          alt=""
          className="w-2/5 object-contain rounded-lg"
        />
        <div className="">
          <h3 className="max-md:leading-7 max-md:text-lg">{title}</h3>
          <Link href={url}>
            <p className="text-primary font-semibold">Check Website </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SmallWork;
