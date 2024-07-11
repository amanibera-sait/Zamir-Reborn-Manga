import Volume from "./Volume"
import storyJSON from "@/components/json-data/zamir-reborn-info.json"


export default function VolumeList(){
    
    const volumes = storyJSON.volumes;
    //console.log(volumes);
    
    return(
        <ul>
            {volumes.map((volume, index) => (
                <Volume key={index} volumeNum={index + 1}/>
            ))}
        </ul>
    )
}