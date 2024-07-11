import ChatracterList from "@/components/character-components/CharacterList";
import Heading from "@/components/layout-components/Header";

export default function Page(){
    return(
        <>
            <main className="bg-white w-full min-h-screen justify-center items-center">
                <Heading/>
                <ChatracterList/>
            </main>
        </>
    );
}