"use client";
import React, { useEffect, useState } from "react";
import { type IAdminModel, deleteEntry, getAllEntries } from "./actions";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Link from "next/link";

const UsersTable = (): JSX.Element => {
  const [entries, setEntries] = useState<IAdminModel[]>([]);

  const deleteUser = async (id: string): Promise<void> => {
    await deleteEntry(id);
    void getAllEntries().then((e) => {
      setEntries(e);
    });
  };

  useEffect(() => {
    void getAllEntries().then((e) => {
      setEntries(e);
    });
    return () => {
      setEntries([]);
    };
  }, []);

  return (
    <>
      <div className="relative mx-auto max-w-7xl overflow-x-auto rounded-md ">
        <table className="w-full text-left ">
          <thead className=" bg-black uppercase text-white ">
            <tr>
              <th scope="col" className=""></th>
              <th scope="col" className="w-32 px-4 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                verified
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
            </tr>
          </thead>
          <tbody>
            {entries.map((admin) => (
              <tr key={admin._id} className="border-b">
                <td className=" ">
                  <div className="flex gap-2 ">
                    <Link
                      className="text-black hover:text-blue-500"
                      href={`/admin/user/${admin._id}`}
                    >
                      <FaEdit size={23} />
                    </Link>

                    <div
                      onClick={() => {
                        void deleteUser(admin._id);
                      }}
                      className="cursor-pointer text-red-500"
                    >
                      <MdDeleteOutline size={25} />
                    </div>
                  </div>
                </td>
                <td className="!w-32  py-4 text-xs">{admin._id}</td>
                <td className="px-6 py-4">{admin.name}</td>
                <td className="px-6 py-4">{admin.email}</td>
                <td className="px-6 py-4">
                  {admin.verified ? "True" : "False"}
                </td>
                <td className="px-6 py-4">{admin.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersTable;
