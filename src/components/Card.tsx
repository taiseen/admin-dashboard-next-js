import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex gap-4 p-5 rounded cursor-pointer w-full bg-slate-800 hover:bg-slate-500 duration-150">
      <span className="pt-1">
        <MdSupervisedUserCircle size={24} />
      </span>

      <div className="flex flex-col gap-3">
        <span className="text-2xl font-bold">Users</span>
        <span className="">{500}</span>

        <span className="">
          <span className={`${1 ? "text-green-400" : "text-red-400"}`}>
            {10}%
          </span>
          {1 > 0 ? " more" : " less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
