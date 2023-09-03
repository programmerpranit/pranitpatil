import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

const AdminPanel = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("token");
    cookies.remove("authorization");
    router.push("/auth/login");
  };

  return (
    <>
      <div className="my-10 max-w-lg p-5 m-auto">
        <h2>Admin Panel</h2>

        <Link href={"/admin/blogs"}>
          <div className="border hover:text-primary m-auto px-5 my-2 rounded shadow border-gray-500">
            <h3>Blogs</h3>
          </div>
        </Link>
        <Link href={"/admin/blogs"}>
          <div className="border hover:text-primary m-auto px-5 my-2 rounded shadow border-gray-500 ">
            <h3>Images</h3>
          </div>
        </Link>
        <div
          onClick={logout}
          className="border hover:text-primary m-auto px-5 my-2 rounded shadow border-gray-500 "
        >
          <h3>LogOut</h3>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
