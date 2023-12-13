import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkCard = ({ image, title, description, url }) => {
  return (
    <>
      <div className="md:w-2/5 m-5 hover:bg-blue-50 p-5 rounded-lg">
        <Image
          src={image}
          width={700}
          height={500}
          alt=""
          className="w-full object-cover rounded-lg"
        />
        <h3>{title}</h3>
        <p className="py-2">{description}</p>
        <Link href={url}>
          <p className="text-primary font-semibold">Read Case Study </p>
        </Link>
      </div>
    </>
  );
};

export default WorkCard;
