import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between my-4">
        <Search />

        <Link href="/dashboard/products/add">
          <button className="px-4 py-2 bg-green-600 rounded text-gray-800 font-semibold duration-150 hover:bg-emerald-500 hover:text-gray-700">
            Add New Product
          </button>
        </Link>
      </div>

      <table className="w-full bg-sidebar rounded table-auto">
        <thead>
          <tr className="pt-4 px-4 rounded">
            <td className="p-4 bg-gray-800 rounded-tl">Title</td>
            <td className="p-4 bg-gray-800">Description</td>
            <td className="p-4 bg-gray-800">Price</td>
            <td className="p-4 bg-gray-800">Created At</td>
            <td className="p-4 bg-gray-800">Stock</td>
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
                  src={"/noProduct.jpg"}
                  alt={"name"}
                  className="rounded-full object-cover"
                />
                OnePlus 7t
              </div>
            </td>

            <td className="p-4">Flagship mobile phone</td>
            <td className="p-4">$300</td>
            <td className="p-4">10-Oct-2023</td>
            <td className="p-4">16</td>
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

export default Products;
