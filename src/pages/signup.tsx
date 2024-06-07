import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">Sign Up</h1>
        <form className="space-y-3">
          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              className="border border-gray-300 p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              name="password"
              className="border border-gray-300 p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Confirm Password</span>
            <input
              type="password"
              name="confirm-password"
              className="border border-gray-300 p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </label>
          <button
            type="submit"
            className="mt-3 p-2 bg-purple-600 text-white w-full rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={() => router.back()}
          className="mt-3 p-2 bg-gray-300 text-black w-full rounded-md hover:bg-gray-400 transition-colors duration-200"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Signup;
