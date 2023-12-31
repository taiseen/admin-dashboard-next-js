import getUser from "@/db/crud/getUser";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Single User",
  description: "Generated by create next app",
};

const SingleUserPage = async ({ params }: { params: { userId: string } }) => {
  const { userId } = params;
  const user = await getUser(userId);

  return (
    <div className="mt-4 flex gap-6">
      <div className="flex-1 p-4 bg-slate-800 text-center font-semibold text-lg rounded">
        <div className="w-full h-[350px] relative rounded overflow-hidden mb-3">
          <Image fill src={user.img} alt="userImg" className="object-cover" />
        </div>
        <span>{user.userName}</span>
      </div>

      <div className="flex-[3] p-4 bg-slate-800 rounded">
        <form className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="" className="text-gray-400">
                User Name
              </label>
              <input
                type="text"
                name="uName"
                placeholder="Jon Do"
                className="editInputStyle"
                value={user.userName}
              />
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="" className="text-gray-400">
                Email
              </label>
              <input
                type="email"
                name="uEmail"
                placeholder="jon@email.com"
                className="editInputStyle"
                value={user.email}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="" className="text-gray-400">
                Password
              </label>
              <input
                type="password"
                name="uPass"
                placeholder="*******"
                className="editInputStyle"
                value={user.password}
              />
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="" className="text-gray-400">
                Phone
              </label>
              <input
                type="tel"
                name="uName"
                placeholder="+8801717 000 000"
                className="editInputStyle"
                value={user.phone}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-gray-400">
              Address
            </label>
            <input
              type="text"
              name="uAddress"
              placeholder="Address"
              className="editInputStyle"
              value={user.address}
            />
          </div>

          <div className="flex gap-4 justify-between">
            <div className="flex flex-col flex-1">
              <label htmlFor="" className="text-gray-400">
                Role &rarr; Is Admin?
              </label>
              <select
                name="uRole"
                className="editInputStyle focus:bg-slate-800"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="" className="text-gray-400">
                Status &rarr; Is Active?
              </label>
              <select
                name="uStatus"
                className="editInputStyle focus:bg-slate-800"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>

          <input type="submit" value="Update" className="submitBtn" />
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
