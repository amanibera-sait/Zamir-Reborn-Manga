import Chapter from "./Chapter";

export default function ChapterList({ chapters }) {
  return (
    <ul className="bg-gray-100 rounded-lg shadow-inner p-4 space-y-4 overflow-y-auto max-h-[500px]">
      {chapters.map((chapter, index) => (
        <Chapter key={index} {...chapter} />
      ))}
    </ul>
  );
}
