import Chapter from "./Chapter";

export default function ChapterList({ chapters }) {
  return (
<<<<<<< HEAD
    <ul className="bg-gray-100 rounded-lg shadow-inner p-4 space-y-4 overflow-y-auto max-h-[500px]">
=======
    <ul className=" bg-slate-300 rounded-lg overflow-y-auto sm:overflow-y-scroll md:overflow-y-scroll h-2/4 my-28">
>>>>>>> 0098b2c5dc6fd33347aaa0b0aca33e5cdfac386f
      {chapters.map((chapter, index) => (
        <Chapter key={index} {...chapter} />
      ))}
    </ul>
  );
}
