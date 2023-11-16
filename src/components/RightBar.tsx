import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import Image from "next/image";

const RightBar = () => {
  // background: linear-gradient(to top, #182237, #253352);
  // bg-gradient-to-t from-blue-900 to-blue-600

  return (
    <div className=" fixed text-slate-400">
      <div className="rounded mb-4 mr-4 pb-0.5 bg-gradient-to-t from-slate-800 to-slate-600 relative">
        <div className="absolute -right-6 bottom-0 w-1/2 h-1/2">
          <Image
            fill
            alt="astronaut"
            src="/astronaut.png"
            className="object-contain opacity-20"
          />
        </div>

        <div className="flex flex-col gap-2 p-4">
          <span className="font-semibold">🔥 Available Now</span>

          <h3 className="text-sm">
            How to use the new version of the admin dashboard?
          </h3>

          <span className="font-semibold mt-2">
            Takes 4 minutes to learn
          </span>

          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>

          <button className="flex items-center gap-2 rounded px-2 py-1 w-max cursor-pointer bg-slate-700 duration-150 hover:bg-slate-600">
            <MdPlayCircleFilled /> Watch
          </button>
        </div>
      </div>

      <div className="rounded mr-4 pb-1 bg-gradient-to-t from-slate-800 to-slate-600">
        <div className="flex flex-col gap-2 p-4">
          <span className="font-semibold">🚀 Coming Soon</span>

          <h3 className="text-sm">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>

          <span className="font-semibold mt-2">Boost your productivity</span>

          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>

          <button className="flex items-center gap-2 rounded px-2 py-1 w-max cursor-pointer bg-slate-700 duration-150 hover:bg-slate-600">
            <MdReadMore /> Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
