import { Prompt } from "next/font/google";
import React from "react";
import Image from "next/image";
import step1 from "/public/images/step1.png";
import step2 from "/public/images/step2.png";
import step3 from "/public/images/step3.png";

const prompt = Prompt({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

function SetLessons() {
    return (
        <main className="min-w-[1440px] h-full flex flex-col justify-center">
            <div className="flex tems-center justify-between">

                <div>
                    <div className="flex items-centermb-1">
                        <svg width="55" height="50" viewBox="0 0 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.9722 32.7709L18.3333 24.7501M18.3333 24.7501L25.9722 16.7292M18.3333 24.7501H36.6666" stroke="#343434" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className={`${prompt.className} text-3xl font-bold`}>บริหารการเงิน</p>
                    </div>
                    <div className={`${prompt.className} text-2xl font-bold pl-[35px]`}   >
                        <p className="text-[#0066FF]">10%</p>
                        <p className="text-[#8C8C8C]">2/20 quizzes</p>
                    </div>
                </div>

                <div className="relative w-[340px] h-[500px]">
                     <div className="absolute">
                        <Image className="" src={step1} alt="step1"/>
                        <Image src={step2} alt="step2"/>
                        <Image src={step3} alt="step3"/>
                        
                     </div>
                </div>
            </div>
        </main>
    )
}
export default SetLessons;