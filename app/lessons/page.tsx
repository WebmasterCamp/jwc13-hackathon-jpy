// import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import SetLessons from "@/components/setLessons";

function Lessons() {
    return (
        <main className=" flex min-h-screen flex-col items-center">
            <Navbar />
            <SetLessons />
        </main>
    );
}

export default Lessons;