import { Prompt } from "next/font/google";
import Navbar from "@/components/Navbar";

const prompt = Prompt({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={prompt.className}>
          <Navbar />
          {children}
        </body>
      </html>
    );
  }
  