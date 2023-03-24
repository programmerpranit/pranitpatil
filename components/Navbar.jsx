import Link from "next/link";

const Navbar = ({ pathname }) => {
  return (
    <>
      <nav className="flex max-md:flex-col max-w-6xl m-auto justify-between p-10 ">
        <div className="max-md:text-center max-md:my-5">
          <Link href="/">
            <h2 className="text-[28px] font-medium">Pranit Patil</h2>
          </Link>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <Link href="/">
            <p
              className={`font-medium  text-lg ${
                pathname == "" ? "text-primary" : "text-secondary"
              } hover:text-primary`}
            >
              Work
            </p>
          </Link>
          <Link href="/talk">
            <p
              className={`font-medium  text-lg ${
                pathname == "talk" ? "text-primary" : "text-secondary"
              } hover:text-primary`}
            >
              Talk
            </p>
          </Link>
          {/* <Link href="/about">
            <p
              className={`font-medium  text-lg ${
                pathname == "about" ? "text-primary" : "text-secondary"
              } hover:text-primary`}
            >
              Blog
            </p>
          </Link> */}
          <Link href="/about">
            <p
              className={`font-medium  text-lg ${
                pathname == "about" ? "text-primary" : "text-secondary"
              } hover:text-primary`}
            >
              About
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
