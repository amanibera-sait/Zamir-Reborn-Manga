import Link from "next/link";

export default function Heading(){
    return(
        <header className="rounded py-4 text-center font-bold" >
            <div className="bg-blue-400 py-10">
                <h1 className="text-5xl font-bold">Majudu Comic</h1>
                <h2 className="text-2xl p-2 font-bold">A site for Manga and Webcomics</h2>
            </div>
            <div className="flex justify-center col-span-2 my-5 space-x-7">
                <Link href="/" className="rounded text-3xl bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Home</Link>
                <Link href="./character-profile" className="rounded text-3xl bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Character Profiles</Link>
                <Link href="./chapter-list" className="rounded text-3xl bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Chapters</Link>
                <Link href="./character-profile" className="rounded text-3xl bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Contacts</Link>
            </div>
        </header>
    );
}