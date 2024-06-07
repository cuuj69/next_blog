// next_blog/src/components/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div>
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300">
          Founders Journal
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/blogs" className="text-white hover:text-gray-200 transition-colors duration-300">
                Blogs
              </Link>
            </li>
            <li>
              <span className="text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                Community
              </span>
            </li>
            <li>
              <Link href="/signup" className="text-white hover:text-gray-200 transition-colors duration-300">
                Join_us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

