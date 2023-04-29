import { BASE_URL } from "@/utils/config";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (email.length == 0) return;
    if (password.length == 0) return;

    try {
      const url = `${BASE_URL}/api/auth/signup`;
      const data = {
        name,
        email,
        password,
      };
      const res = await axios.post(url, data);

      toast.success(res.data.message);
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Unknown Error Occured");
      }
    }
  };

  return (
    <>
      <div className="max-w-lg m-auto p-5 border my-10 rounded shadow">
        <h2>Sign Up</h2>
        <form onSubmit={(e) => handleSignUp(e)}>
          <p className="font-semibold mt-5">Name</p>
          <input
            type="name"
            placeholder="Pranit Patil"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border w-full rounded px-2 py-1 outline-none"
          />
          <p className="font-semibold mt-5">Email</p>
          <input
            type="email"
            placeholder="psp@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full rounded px-2 py-1 outline-none"
          />
          <p className="font-semibold mt-5">Password</p>
          <input
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-full rounded px-2 py-1 outline-none"
          />

          <button type="submit" className="bg-primary w-full my-5 rounded">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
