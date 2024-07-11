import Image from 'next/image'
import ZamirRebornJSON from '@/components/json-data/zamir-reborn-info.json'
import Link from 'next/link'

function HomePage() {
  return (
    <div className='my-5'>
        
        <div className='flex flex-col justify-center items-center text-lg'> 
            
                <div style={{width: '25%'}} className="drop-shadow-md flex-wrap-reverse">
                    <Image src={"/images/logo/Logo-2024.webp"} layout='responsive' width={2480} height={3508}/>
                </div>

            <div className="flex flex-col w-1/2 rounded bg-gray-200 bg-auto m-4 p-6 drop-shadow-md">
                <p><b>Art and Story by:</b> {ZamirRebornJSON.author}</p>
            </div>
            
            <div className="flex flex-col w-1/2 rounded bg-gray-200 bg-auto m-4 p-6 drop-shadow-md">
                <p><b>Release Date:</b> {ZamirRebornJSON.releaseDate}</p>
            </div>

            <div className="flex flex-col w-1/2 rounded bg-gray-200 bg-auto m-4 p-6 drop-shadow-md">
                <p className='flex flex-row space-x-9'><b>Genre:</b> {ZamirRebornJSON.genre}</p>
            </div>

            <div className="flex flex-row-reverse my-6 space-x-10 w-3/4">
                <div style={{width: '50%'}} className="rounded bg-gray-200 bg-auto m-4 p-10 drop-shadow-md">
                    <Link href={`/chapter-list/chapter-viewer?volume=${1}&chapter=${1}`}>
                        <Image src={"/images/covers/volume-1-cover.webp"} layout='responsive' width={2480} height={3508} className='hover:opacity-75 active:opacity-50 '/>
                        <button className=" flex justify-center items-center rounded p-3 my-10 w-full bg-gray-400 font-bold text-gray-900 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Start Reading</button>
                    </Link>
                </div>
                <p className='w-1/2 h-1/2 content-center text-3xl font-semibold rounded bg-gray-200 bg-auto m-4 p-10 drop-shadow-md'>{ZamirRebornJSON.synopsis}</p>
            </div>

        </div>
    </div>
  )
}

export default HomePage