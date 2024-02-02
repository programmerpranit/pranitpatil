"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Cookies from "universal-cookie";

const AdminPage = (): JSX.Element => {
  const cookieStore = new Cookies();
  const router = useRouter();

  const logout = (): void => {
    localStorage.removeItem("token");
    cookieStore.remove("authorization");
    router.replace("/");
  };
  return (
    <>
      <div className="m-auto my-10 max-w-lg p-5">
        <h2>Admin Panel</h2>
        <br />
        <Link href={"/admin/blogs"}>
          <div className="m-auto my-2 rounded border border-gray-500 px-5 text-black shadow hover:text-primary">
            <h3>Blogs</h3>
          </div>
        </Link>
        <Link href={"/admin/blogs"}>
          <div className="m-auto my-2 rounded border border-gray-500 px-5 text-black shadow hover:text-primary ">
            <h3>Images</h3>
          </div>
        </Link>
        <div
          onClick={logout}
          className="m-auto my-2 rounded border border-gray-500 px-5 shadow hover:cursor-pointer hover:text-primary "
        >
          <h3>LogOut</h3>
        </div>{" "}
      </div>
    </>
  );
};

export default AdminPage;
