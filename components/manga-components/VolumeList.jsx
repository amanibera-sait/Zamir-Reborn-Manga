

function checkBox(number) {
  return (
    <div className='p-8 text-l bg-slate-500'>{number}</div>
  )
}


export default function VolumeList({volumes}) {
  
  return (
    <ul className="my-24">
      {volumes.map((volume, index) => (
        <checkBox key={index} number={volume} />
      ))}
    </ul>
  );
}
