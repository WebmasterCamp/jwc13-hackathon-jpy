'use client'
import Image from "next/image";
import Link from "next/link";
import { Prompt, Rubik } from "next/font/google";
import coin from "/public/images/coin.png";
import play from "/public/images/play.png";
import coinstack from "/public/images/coinstack.png";

const prompt = Prompt({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const rubik = Rubik({ subsets: ["latin"] });

function HomePage() {
    return (
        <main className="min-w-[1440px] flex flex-col items-center justify-center gap-[33px] mt-[5%]">
            <div className="flex gap-[43px] items-center justify-center max-lg:flex-col">
                <h1 className={`${rubik.className} text-4xl font-bold w-[468px]`}>Welcome to coin <br /> crusher!</h1>
                <div className="w-[492px] h-[128px] border-b-4 border-2 border-[#FBAE17] rounded-[28px] bg-[#FFF4D8] ">
                    <div className="flex px-4 pt-2 gap-2 items-center justify-between">
                        <div className="flex gap-2 items-center justify-center">
                            <p className="text-8xl font-black text-[#FBAE17]">1</p>
                            <Image src={coin} width={90} height={90} alt="coin" />
                        </div>
                        <div className="flex flex-col items-center justify-start pr-4">
                            <p className=" font-bold text-2xl text-[#3A3A3A]">1 coin collected</p>
                            <p className="font-bold text-3xl text-[#FBAE17]">keep it up!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-[23px]">
                <p className={`${rubik.className} text-4xl font-bold text-[#656565]`}>Our available lessons</p>
                <div className="flex items-center justify-center rounded-[55px] w-[1002px] h[389px] bg-[#EEEEEE] px-4 py-12 max-lg:w-[800px]">
                    <Link href={'/game'} className="cursor-pointer">
                        <div className="flex items-center justify-around w-[935px] h-[249px] border-b-4 border-2 border-[#818181] rounded-[42px] bg-white transition-all hover:bg-slate-100 max-lg:w-[735px]">
                            <Image src={play} width={90} height={90} alt="play" />
                            <p className={`${prompt.className} text-6xl font-bold`}>บริหารการเงิน</p>
                            <Image src={coinstack} width={190} height={190} alt="coinstack" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default HomePage