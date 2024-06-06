import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>
        <form className="space-y-4">
          <label className="block">
            Email:
            <input
              type="email"
              name="email"
              className="border p-2 w-full mt-1 rounded-md"
            />
          </label>
          <label className="block">
            Password:
            <input
              type="password"
              name="password"
              className="border p-2 w-full mt-1 rounded-md"
            />
          </label>
          <label className="block">
            Confirm Password:
            <input
              type="password"
              name="confirm-password"
              className="border p-2 w-full mt-1 rounded-md"
            />
          </label>
          <button
            type="submit"
            className="mt-4 p-2 bg-blue-500 text-white w-full rounded-md"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={() => router.back()}
          className="mt-4 p-2 bg-gray-300 text-black w-full rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Signup;