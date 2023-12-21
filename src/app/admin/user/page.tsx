import React from "react";
import UsersTable from "./usersTable";

const AllEntries = async (): Promise<JSX.Element> => {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <h2 className="my-10">All Users</h2>

        <UsersTable />
      </div>
    </>
  );
};

export default AllEntries;
