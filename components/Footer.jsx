import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="p-5 text-center py-32">
        <h2>Lets Connect</h2>
        <div className="flex gap-5 justify-center py-5">
          <a href="https://www.linkedin.com/in/programmerpranit">
            <Image src={"/linkedin.webp"} width={30} height={30} alt="" />
          </a>
          <a href="https://twitter.com/pro_pranit">
            <Image src={"/twitter.webp"} width={30} height={30} alt="" />
          </a>
          <a href="https://github.com/programmerpranit">
            <Image src={"/github.webp"} width={30} height={30} alt="" />
          </a>
          <a href="https://play.google.com/store/apps/developer?id=Pranit+Patil.">
            <Image
              src={"/googleplaystore.webp"}
              width={30}
              height={30}
              alt=""
            />
          </a>
        </div>
        <p className="text-center text-lg pt-2">dev@pranitpatil.com</p>
      </div>
    </>
  );
};

export default Footer;
