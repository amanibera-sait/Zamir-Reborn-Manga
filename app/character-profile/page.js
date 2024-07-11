import ChatracterList from "@/components/character-components/CharacterList";
import Heading from "@/components/layout-components/Header";

export default function Page(){
    return(
        <>
            <div className="bg-blue-800 min-h-screen flex justify-center">
                <main className="bg-white w-full max-w-7xl">
                    <Heading/>
                    <ChatracterList/>
                </main>
            </div>
        </>
    );
}