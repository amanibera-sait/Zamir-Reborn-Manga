import Image from "next/image";
import Link from "next/link";

export default function Heading() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-6">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center px-6 space-x-24">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/Horizontal-Logo-2024.webp"
            alt="Zamir Reborn Logo"
            width={550}
            height={10}
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
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-xl">☰</button>
        </div>
      </div>
    </header>
  );
}
