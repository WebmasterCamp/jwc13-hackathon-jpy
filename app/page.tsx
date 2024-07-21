import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/Home";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />

      {/* <Hero /> */}

      <HomePage />
    </main>
  );
}
