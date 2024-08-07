import Image from "next/image";
import Link from "next/link";

export default function Footing(){
    return(
        <header className="rounded text-center font-bold" >
            <div className="bg-gray-800 p-10 flex flex-row-reverse space-x-5">
                <div style={{width: '15%'}} className="drop-shadow-md flex-wrap-reverse">
                    <Image src={"/images/logo/Logo-2024.webp"} layout='responsive' width={2480} height={3508} alt='Zamir Reborn Logo'/>
                </div>
                <div className="flex justify-center items-center text-lg font bold px-10 space-x-7">
                    <Link target="_blank" href="https://x.com/Majudu_Art" className="rounded bg-gray-400 text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Twitter</Link>
                    <Link target="_blank" href="https://instagram.com/Majudu_Art" className="rounded bg-gray-400 text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Instagram</Link>
                    <Link target="_blank" href="https://www.webtoons.com/en/canvas/blade-conjuror-call-to-action/reunite-them-call-to-action/viewer?title_no=787333&episode_no=1" className="rounded bg-gray-400 text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Webtoon</Link>
                    <Link target="_blank" href="https://namicomi.com/en/title/UXJzXVKu/zamir-reborn" className="rounded bg-gray-400 text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">NamiComi</Link>
                </div>
            </div>
        </header>
    );
}