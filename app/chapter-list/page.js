import Heading from "@/components/Header";
import VolumeList from "@/components/VolumeList";

export default function Page() {
  return (
    <>
      <div className="bg-blue-800 min-h-screen flex justify-center">
        <main className="bg-white w-full max-w-7xl p-8">
          <Heading/>
          <h2>Zamir Reborn</h2>
          <VolumeList/>
        </main>
      </div>
    </>
  );
}
