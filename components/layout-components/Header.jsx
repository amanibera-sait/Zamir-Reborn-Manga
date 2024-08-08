import Image from "next/image";
import Link from "next/link";

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
                    <Link href="./chapter-list" className="p-2 md:p-4 text-lg md:text-3xl text-gray-100 hover:text-gray-300 hover:underline">Chapters</Link>
                </div>
            </div>
        </header>
    );
}