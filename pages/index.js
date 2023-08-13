import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      router.push(`/prank?name=${encodeURIComponent(name)}`);
    }
  };

  return (
    <div className="flex justify-center font-fredoka-one items-center min-h-screen bg-[#181818]">
      <div className="w-full max-w-md p-6  border-white border-2 rounded-lg shadow-lg mx-4">
        <div className="flex justify-center ">
          <img
            src="/analytika-logo.png"
            alt="Analytika Logo"
            className="w-32 mb-4"
          />
        </div>
        <form className="text-center" onSubmit={handleNameSubmit}>
          <label className="block mb-4 text-lg font-bold text-white">
            Enter your name:
          </label>
          <input
            type="text"
            className="w-full py-2 px-4 rounded-md border bg-inherit text-white focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className="mt-6 bg-gradient-to-r from-yellow-300 via-green-500 to-green-700 text-white py-2 px-6 rounded-md hover:from-yellow-400 hover:via-green-600 hover:to-green-800 focus:outline-none"
          >
            Surprise me!
          </button>
        </form>
      </div>
    </div>
  );
}
