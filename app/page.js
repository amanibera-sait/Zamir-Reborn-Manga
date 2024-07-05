//TODO
// - Build footer component with social links.
// - Add user system and login feature.


import Heading from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="bg-blue-800 min-h-screen flex justify-center">
        <div className="bg-white w-full max-w-7xl p-8">
          <Heading/>
        </div>
      </div>
    </>
  );
}
