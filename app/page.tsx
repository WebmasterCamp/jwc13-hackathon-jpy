import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/Home";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <HomePage />
    </main>
  );
}
