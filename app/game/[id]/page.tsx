import quizs from "@/lib/database";
import { AnswerPage } from "./AnswerPage";
import { Suspense } from "react";

function Answer({ params }: { params: { id: string } }) {
  return (
    <Suspense>
      <AnswerPage id={params.id} />
    </Suspense>
  );
}

export function generateStaticParams() {
  return quizs.quizs.map((_, index) => ({ id: String(index) }));
}

export default Answer;
