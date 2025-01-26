import Image from "next/image";
import Link from "next/link";

<<<<<<< HEAD
export default function Heading() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-6">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 space-x-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/Horizontal-Logo-2024.webp"
            alt="Zamir Reborn Logo"
            width={1015}
            height={161}
            className="object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-12 text-xl font-semibold">
          <Link
            href="/chapter-list"
            className="hover:text-orange-500 transition-all"
          >
            Chapters
          </Link>
          <Link
            href="/character-list"
            className="hover:text-orange-500 transition-all"
          >
            Characters
          </Link>
          <Link href="/about" className="hover:text-orange-500 transition-all">
            About
          </Link>
          <Link href="/profile">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all">
              <span className="text-xl text-gray-600">U</span>{" "}
              {/* Placeholder for user icon */}
=======
export default function Heading(){
    return (
        <header className="rounded text-center font-bold">
            <div className="bg-gray-800 px-4 py-4 flex flex-col md:flex-row md:items-center md:space-x-5">
                <div className="hover:opacity-75 active:opacity-50 mb-4 md:mb-0 md:w-1/4 w-full flex justify-center md:justify-start">
                    <Link href="/">
                        <Image src={"/images/logo/Horizontal-Logo-2024.webp"} alt="Zamir Reborn Logo" width={1015} height={161} />
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center text-lg md:text-xl font-semibold px-2 md:px-12 md:space-x-24">
                    {/*<Link href="./character-profile" className="rounded bg-gray-400 text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Character Profiles</Link>*/}
                    <Link href="../chapter-list" className="p-2 md:p-4 text-lg md:text-3xl text-gray-100 hover:text-gray-300 hover:underline">Chapters</Link>
                    <Link href="../admin" className="p-2 md:p-4 text-lg md:text-3xl text-gray-100 hover:text-gray-300 hover:underline">Dashboard</Link>
                </div>
>>>>>>> 0098b2c5dc6fd33347aaa0b0aca33e5cdfac386f
            </div>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-xl">☰</button>
        </div>
      </div>
    </header>
  );
}
