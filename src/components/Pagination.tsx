"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  //   const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  //   const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  //   const handleChangePage = (type) => {
  //     type === "prev"
  //       ? params.set("page", parseInt(page) - 1)
  //       : params.set("page", parseInt(page) + 1);
  //     replace(`${pathname}?${params}`);
  //   };

  return (
    <div className="flex justify-between py-4">
      <button
        className="px-2 py-1 cursor-not-allowed bg-gray-700 rounded"
        disabled
        // onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className="px-2 py-1 cursor-pointer bg-gray-700 rounded"
        // disabled={!hasNext}
        // onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
