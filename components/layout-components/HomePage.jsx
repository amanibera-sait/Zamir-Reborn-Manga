import Image from 'next/image'
import ZamirRebornJSON from '@/components/json-data/zamir-reborn-info.json'
import Link from 'next/link'
import BannerCarousel from './BannerCarousel'

function HomePage() {
    return (
        <div className='my-5'>
          <div className='flex flex-col justify-center items-center text-lg'>
            <div className='flex flex-col-reverse md:flex-row justify-center bg-gray-200 p-4 md:p-8 mb-20'>
              <p className='flex justify-center max-w-full md:max-w-lg h-auto mx-4 md:mx-8 p-4 text-base md:text-xl font-bold rounded bg-gray-800 text-white bg-opacity-75 drop-shadow-md'>
                {ZamirRebornJSON.synopsis}
              </p>
              <div className='flex justify-center mt-4 md:mt-0'>
                <BannerCarousel />
              </div>
            </div>
            <div className="flex justify-center my-6 w-full md:w-3/4">
              <div className="w-full md:w-1/2 rounded bg-gray-200 bg-auto m-4 p-4 md:p-10 drop-shadow-md">
                <Link href={`/chapter-list/chapter-viewer?volume=${1}&chapter=${1}`}>
                  <Image 
                    src={"/images/covers/volume-1-cover.webp"} 
                    alt='Zamir Reborn Volume 1 Cover' 
                    layout='responsive' 
                    width={2480} 
                    height={3508} 
                    className='hover:opacity-75 active:opacity-50 '
                  />
                  <button className="flex justify-center items-center rounded p-3 my-4 md:my-10 w-full bg-gray-400 font-bold text-gray-900 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">
                    Start Reading
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 rounded bg-gray-200 bg-auto m-4 p-4 md:p-6 text-xl md:text-2xl space-y-4 md:space-y-12 drop-shadow-md">
              <p><b>Art and Story by:</b> {ZamirRebornJSON.author}</p>
              <p><b>Release Date:</b> {ZamirRebornJSON.releaseDate}</p>
              <p className='flex flex-row space-x-2 md:space-x-9'><b>Genre: </b> {ZamirRebornJSON.genre}</p>
            </div>
          </div>
        </div>
      )
}

export default HomePage