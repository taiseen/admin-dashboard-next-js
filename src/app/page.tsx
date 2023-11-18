"use client";
import { useRouter } from "next/navigation";

const RootPage = () => {
  const router = useRouter(); // user redirect --> programmatically by this...

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/dashboard");
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <form
        className="flex flex-col gap-5 py-6 px-5 bg-slate-800 rounded"
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="Email" className="editInputStyle" />
        <input
          type="password"
          placeholder="Password"
          className="editInputStyle"
        />
        <input type="submit" value="Login" className="submitBtn py-2" />
      </form>
    </main>
  );
};

export default RootPage;
