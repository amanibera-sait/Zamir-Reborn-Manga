import Image from "next/image";
import Link from "next/link";

export default function Footing(){
    return (
        <footer className="rounded text-center font-bold">
          <div className="bg-gray-800 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col-reverse md:flex-row-reverse md:space-x-5 items-center md:items-start">
            <div className="w-1/2 md:w-1/4 lg:w-1/5 drop-shadow-md flex-wrap-reverse mb-4 md:mb-0">
              <Image 
                src={"/images/logo/Logo-2024.webp"} 
                layout='responsive' 
                width={2480} 
                height={3508} 
                alt='Zamir Reborn Logo' 
              />
            </div>
            <div className="flex flex-col my-8 md:flex-row justify-center items-center text-lg font-bold space-y-4 md:space-y-0 md:space-x-4 lg:space-x-7 px-4 md:px-10">
              <Link 
                target="_blank" 
                href="https://x.com/Majudu_Art" 
                className="rounded bg-gray-400 text-gray-900 p-2 md:p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200 text-center w-full md:w-auto">
                Twitter
              </Link>
              <Link 
                target="_blank" 
                href="https://instagram.com/Majudu_Art" 
                className="rounded bg-gray-400 text-gray-900 p-2 md:p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200 text-center w-full md:w-auto">
                Instagram
              </Link>
              <Link 
                target="_blank" 
                href="https://www.webtoons.com/en/canvas/blade-conjuror-call-to-action/reunite-them-call-to-action/viewer?title_no=787333&episode_no=1" 
                className="rounded bg-gray-400 text-gray-900 p-2 md:p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200 text-center w-full md:w-auto">
                Webtoon
              </Link>
              <Link 
                target="_blank" 
                href="https://namicomi.com/en/title/UXJzXVKu/zamir-reborn" 
                className="rounded bg-gray-400 text-gray-900 p-2 md:p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200 text-center w-full md:w-auto">
                NamiComi
              </Link>
            </div>
          </div>
        </footer>
      );
}