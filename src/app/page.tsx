import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Founders Journal</h1>
      <div className="space-x-4">
        <Link href="/login" legacyBehavior>
          <a className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200">
            Log In
          </a>
        </Link>
        <Link href="/signup" legacyBehavior>
          <a className="px-4 py-2 bg-pink-400 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
            Sign Up
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
