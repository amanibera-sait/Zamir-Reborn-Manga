import Character from "./Character"
import charactersJSON from "@/components/json-data/zamir-reborn-characters.json"


export default function ChatracterList(){
    return(
        <ul>
            {charactersJSON.map((character, index) => (
                <Character key={index} {...character}/>
            ))}
        </ul>
    )
}