import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";

const Users = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between my-4">
        <Search />

        <Link href="/dashboard/users/add">
          <button className="px-4 py-2 bg-green-600 rounded text-gray-800 font-semibold duration-150 hover:bg-emerald-500 hover:text-gray-700">
            Add New User
          </button>
        </Link>
      </div>

      <table className="w-full bg-sidebar rounded table-auto">
        <thead>
          <tr className="pt-4 px-4 rounded">
            <td className="p-4 bg-gray-800 rounded-tl">Name</td>
            <td className="p-4 bg-gray-800">Email</td>
            <td className="p-4 bg-gray-800">Created At</td>
            <td className="p-4 bg-gray-800">Role</td>
            <td className="p-4 bg-gray-800">Status</td>
            <td className="p-4 bg-gray-800 rounded-tr">Action</td>
          </tr>
        </thead>

        <tbody>
          <tr className="">
            <td className="p-4">
              <div className="flex items-center gap-2">
                <Image
                  width={40}
                  height={40}
                  src={"/user/avatar.png"}
                  alt={"name"}
                  className="rounded-full object-cover"
                />
                Jon
              </div>
            </td>

            <td className="p-4">jom@test.com</td>
            <td className="p-4">12/05/23</td>
            <td className="p-4">user</td>
            <td className="p-4">pending</td>
            <td className="p-4">
              <div className="flex items-center gap-2">
                <Link
                  href={`/dashboard/users/${""}`}
                  className="bg-blue-500 px-2 py-1 rounded"
                >
                  View
                </Link>

                <form action={""}>
                  <input type="hidden" name="id" value={"user.id"} />
                  <button className="bg-red-500 px-2 py-1 rounded">
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};

export default Users;
