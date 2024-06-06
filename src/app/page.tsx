// next_blog/src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-24 bg-gray-100 rounded-md">
      <h1 className="text-3xl font-bold mb-8">Welcome to Our Blog Platform</h1>
      <p className="text-lg mb-8 text-center">Your go-to place for the latest blog posts and articles.</p>
      <div className="flex flex-col space-y-4">
        <Link href="/login" className="px-6 py-3 bg-pink-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300">
          Login
        </Link>
        <Link href="/signup" className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
