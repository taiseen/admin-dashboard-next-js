import transactionsData from "@/constants/transactionsData";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className="p-5 bg-slate-800 rounded">
      <h2 className="mb-2 text-gray-300">Latest Transactions</h2>

      <table className="w-full">
        <thead>
          <tr className="text-gray-300">
            <td className="p-2">Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>

        <tbody>
          {transactionsData.map((data, idx) => {
            const { amount, date, img, name, status } = data;

            const statusBg = status.toLowerCase().includes("pending")
              ? "bg-gray-400"
              : status.toLowerCase().includes("done")
              ? "bg-green-400"
              : "bg-red-400";

            return (
              <tr key={idx} className="text-gray-400 cursor-pointer">
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <Image
                      width={40}
                      height={40}
                      src={img}
                      alt={name}
                      className="rounded-full object-cover"
                    />
                    {name}
                  </div>
                </td>

                <td>
                  <span className={`p-1.5 rounded text-black ${statusBg}`}>
                    {status}
                  </span>
                </td>

                <td>{date}</td>
                <td>{amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
