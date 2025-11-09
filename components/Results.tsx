import React, { useMemo } from 'react';
import { UserAnswers, Question } from '../types';

interface ResultsProps {
  userAnswers: UserAnswers;
  questions: Question[];
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ userAnswers, questions, onRestart }) => {
  const { totalCorrect, scorePercentage, subjectScores } = useMemo(() => {
    let correct = 0;
    const scores: Record<string, { correct: number; total: number }> = {};

    questions.forEach(q => {
      if (!scores[q.subject]) {
        scores[q.subject] = { correct: 0, total: 0 };
      }
      scores[q.subject].total++;

      const userAnswerIndex = userAnswers[q.id];
      if (userAnswerIndex !== undefined && q.options[userAnswerIndex]?.isCorrect) {
        correct++;
        scores[q.subject].correct++;
      }
    });

    return {
      totalCorrect: correct,
      scorePercentage: (correct / questions.length) * 100,
      subjectScores: scores,
    };
  }, [userAnswers, questions]);

  const getFeedbackMessage = (percentage: number) => {
    if (percentage >= 80) {
      return { 
        title: "Excelente Desempenho!",
        message: "Você demonstrou um ótimo conhecimento. Continue assim e o sucesso é garantido. Revise apenas os detalhes.",
        color: "text-green-500"
      };
    }
    if (percentage >= 50) {
      return {
        title: "Bom Trabalho!",
        message: "Você está no caminho certo. Identifique as matérias com menor pontuação e foque seus estudos nelas.",
        color: "text-yellow-500"
      };
    }
    return {
      title: "Continue Estudando!",
      message: "Não desanime. Cada erro é uma oportunidade de aprendizado. Refaça o simulado e revise os conteúdos com atenção.",
      color: "text-red-500"
    };
  };

  const feedback = getFeedbackMessage(scorePercentage);

  return (
    <div className="p-6 md:p-8 text-center">
      <h2 className={`text-3xl font-bold mb-2 ${feedback.color}`}>{feedback.title}</h2>
      <p className="text-slate-600 dark:text-slate-300 mb-6">{feedback.message}</p>
      
      <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-xl mb-6">
        <p className="text-lg text-slate-800 dark:text-white">Sua pontuação final foi:</p>
        <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 my-2">
          {totalCorrect} <span className="text-3xl text-slate-500 dark:text-slate-400">/ {questions.length}</span>
        </p>
        <p className="text-xl font-semibold text-slate-600 dark:text-slate-200">({scorePercentage.toFixed(1)}% de acerto)</p>
      </div>

      <div className="text-left mb-8">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Desempenho por Matéria:</h3>
        <div className="space-y-3">
          {/* FIX: Use Object.keys to iterate over subjectScores. This ensures proper type inference for the 'score' object, which was previously inferred as 'unknown' when using Object.entries. */}
          {Object.keys(subjectScores).map((subject) => {
            const score = subjectScores[subject];
            return (
              <div key={subject} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{subject}</span>
                  <span className="font-mono text-slate-600 dark:text-slate-300">{score.correct} / {score.total}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <button
        onClick={onRestart}
        className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-transform transform hover:scale-105"
      >
        Tentar Novamente
      </button>
    </div>
  );
};

export default Results;
