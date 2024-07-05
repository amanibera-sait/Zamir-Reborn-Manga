
"use client";

import { useState } from "react"


export default function Character({name, MBTI, icon, image, bio}){

    const imgPath = `./images/CharacterProfiles/${name}/${image}`
    const iconPath = `./images/CharacterProfiles/${name}/${icon}`

      
    const [isSelected, setIsSelected] = useState(false);
    
    function handleClick(){
        setIsSelected(!isSelected);
    }
    
    return(
        <li className="flex justify-center items-start p-2 space-x-10 w-full max-w-4xl mx-auto my-24">
            <div className="flex flex-col items-center w-1/2">
                <img src={iconPath} width={250} height={250} alt={"Icon of " + name}/>
                <p className="font-black text-2xl">{name}</p>
                <p className="font-semibold m-1.5">{MBTI}</p>
                <button onClick={handleClick} className="rounded  bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">
                    {isSelected ? "Read Less" : "Read More" }
                </button>
            </div>
            {isSelected && (
                <div className="flex flex-col w-1/2 rounded bg-gray-200 bg-auto max-w-sm m-4 p-2.5 drop-shadow-md">
                    <button onClick={handleClick} className="rounded-full flex justify-center w-10 bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">X</button>
                    <img src={imgPath} width={350} height={350} className="place-content-center m-2" alt={"Image of " + name}/>
                    <p className=" text-center font-black text-3xl m-2">{name}</p>
                    <p className="text-center font-semibold italic text-2xl m-2">{MBTI}</p>
                    <div className="text-left m-2">
                        {bio}
                    </div>
                </div>
                )}
        </li>
    );
}