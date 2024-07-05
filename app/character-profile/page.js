import ChatracterList from "@/components/CharacterList";
import Heading from "@/components/Header";

export default function Page(){
    return(
        <>
            <div className="bg-blue-800 min-h-screen flex justify-center">
                <main className="bg-white w-full max-w-7xl p-8">
                    <Heading/>
                    <ChatracterList/>
                </main>
            </div>
        </>
    );
}