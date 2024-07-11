import Image from "next/image";
import Link from "next/link";

export default function Heading(){
    return(
        <header className="rounded text-center font-bold" >
            <div className="bg-gray-800 p-10 flex row-auton space-x-5">
                <div style={{width: '30%'}} className="hover:opacity-75 active:opacity-50">
                    <Link href="/">
                        <Image src={"/images/logo/Horizontal-Logo-2024.webp"} alt="Zamir Reborn Logo" width={1015} height={161}/>
                    </Link>
                </div>
                <div className="flex justify-center items-center text-lg font bold px-10 space-x-7">
                    <Link href="./character-profile" className="rounded bg-gray-400 text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Character Profiles</Link>
                    <Link href="./chapter-list" className="rounded bg-gray-400 text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Chapters</Link>
                    <Link href="./character-profile" className="rounded bg-gray-400 text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Contacts</Link>
                </div>
            </div>
        </header>
    );
}