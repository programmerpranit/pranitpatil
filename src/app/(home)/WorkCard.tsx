import Image from "next/image";
import Link from "next/link";
import React from "react";

interface WorkCardProps {
  image: string;
  title: string;
  description: string;
  url: string;
}

const WorkCard = ({
  image,
  title,
  description,
  url,
}: WorkCardProps): JSX.Element => {
  return (
    <>
      <div className="m-5 rounded-lg p-5 hover:bg-blue-50 md:w-2/5">
        <Image
          src={image}
          width={700}
          height={500}
          alt=""
          className="w-full rounded-lg object-cover"
        />
        <h3>{title}</h3>
        <p className="py-2">{description}</p>
        <Link href={url}>
          <p className="font-semibold text-primary">Read Case Study </p>
        </Link>
      </div>
    </>
  );
};

export default WorkCard;
