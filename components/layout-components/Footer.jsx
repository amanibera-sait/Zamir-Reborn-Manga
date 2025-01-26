import Image from "next/image";
import Link from "next/link";

export default function Footing() {
  return (
    <footer className="bg-blue-800 text-white py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="w-40 mb-6 md:mb-0">
          <Image
            src="/images/logo/Logo-2024.webp"
            alt="Zamir Reborn Logo"
            layout="responsive"
            width={2480}
            height={3508}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center text-lg space-y-6 md:space-y-0 md:space-x-12">
          <Link
            href="https://x.com/Majudu_Art"
            target="_blank"
            className="hover:text-orange-500 transition-all"
          >
            Twitter
          </Link>
          <Link
            href="https://instagram.com/Majudu_Art"
            target="_blank"
            className="hover:text-orange-500 transition-all"
          >
            Instagram
          </Link>
          <Link
            href="https://www.webtoons.com/en/canvas/blade-conjuror-call-to-action/reunite-them-call-to-action/viewer?title_no=787333&episode_no=1"
            target="_blank"
            className="hover:text-orange-500 transition-all"
          >
            Webtoon
          </Link>
          <Link
            href="https://namicomi.com/en/title/UXJzXVKu/zamir-reborn"
            target="_blank"
            className="hover:text-orange-500 transition-all"
          >
            NamiComi
          </Link>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-400">
        <p>© 2024 Zamir Reborn. All rights reserved.</p>
      </div>
    </footer>
  );
}
