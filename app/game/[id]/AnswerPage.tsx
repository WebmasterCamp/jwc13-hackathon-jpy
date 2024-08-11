"use client";
import Link from "next/link";
import quizs from "@/lib/database";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

interface AnswerPageProps {
  id: string;
}

export function AnswerPage({ id }: AnswerPageProps) {
  const searchParams = useSearchParams();
  const correct = searchParams.get("correctOrWrong") === "true";
  const view = searchParams.get("view") === "true";
  const currentQuiz = quizs.quizs[Number(id)];
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const router = useRouter();

  return (
    <div className="min-w-[1440px] flex flex-col items-center justify-center gap-[33px] p-24">
      <div className="flex gap-2 items-center self-start">
        <Link href={"/"}>
          <svg
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.9722 18.7709L2.33331 10.7501M2.33331 10.7501L9.9722 2.72925M2.33331 10.7501H20.6666"
              stroke="#343434"
              stroke-width="3.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <p className="text-4xl text-[#555555]">บริหารการเงิน</p>
      </div>
      <p className="self-start text-2xl text-[#8C8C8C] font-bold">
        {currentQuiz.id} quiz
      </p>
      <div className="w-full h-fit items-center justify-center flex flex-col">
        <p className="text-4xl font-bold text-wrap text-center text-[#343434]">
          {currentQuiz.question}
        </p>
        <div className="flex gap-6 mt-20">
          {/* {correct && !view ? (
                        <div className="text-4xl text-white p-24 bg-[#35CD4D] rounded-[36px]">
                            ถูก
                            <p>+1 coin</p>
                        </div>
                    ) : (
                        <div className="text-4xl text-white p-24 bg-[#FBAE17] rounded-[36px]">
                            ผิด
                            <p>-1 coin</p>
                            <p>เฉลย: {currentQuiz.answer}</p>
                        </div>
                    )} */}
          {correct && !view ? (
            <div className="text-4xl text-white p-24 bg-[#35CD4D] rounded-[36px]">
              ถูก
              <p>+1 coin</p>
            </div>
          ) : !correct && !view ? (
            <div className="text-4xl text-white p-24 bg-[#FBAE17] rounded-[36px]">
              ผิด
              <p>-1 coin</p>
              <p>เฉลย: {currentQuiz.answer}</p>
            </div>
          ) : view ? (
            <div className="flex gap-6 mt-20">
              {currentQuiz.options.map((option, index) => (
                <button
                  key={index}
                  className={`text-4xl text-white p-24  ${
                    currentQuiz.type == "boolean"
                      ? "bg-[#35CD4D]"
                      : "bg-[#FBAE17]"
                  } rounded-[36px]`}
                  onClick={() => {
                    setSelectedOption(option);
                    console.log("Selected Option:", selectedOption);
                    console.log(currentQuiz.answer);
                    if (selectedOption === currentQuiz.answer) {
                      setScore(score + 1);
                      router.push(
                        `/game/${currentQuiz.id}?correctOrWrong=true`
                      );
                    } else {
                      setScore(score - 1);
                      router.push(
                        `/game/${currentQuiz.id}?correctOrWrong=false`
                      );
                    }
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex gap-6 mt-20">Error Occur!</div>
          )}
        </div>
        {!view && (
          <Link
            href={`/game/${id}?view=true`}
            className="mt-10 p-3 text-2xl bg-green-500 rounded-xl text-white"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
