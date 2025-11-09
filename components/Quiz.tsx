
import React from 'react';
import { Question, Option } from '../types';

interface QuizProps {
  question: Question;
  onAnswerSelect: (questionId: number, optionIndex: number) => void;
  onNextQuestion: () => void;
  selectedOption?: number;
  questionNumber: number;
  totalQuestions: number;
}

const Quiz: React.FC<QuizProps> = ({
  question,
  onAnswerSelect,
  onNextQuestion,
  selectedOption,
  questionNumber,
  totalQuestions,
}) => {
  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="p-6 md:p-8">
      {/* Header with Subject and Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{question.subject}</span>
          <span className="text-sm text-slate-500 dark:text-slate-400">{questionNumber} / {totalQuestions}</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>

      {/* Question Text */}
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-6" dangerouslySetInnerHTML={{ __html: question.text }}></h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const baseClasses = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center";
          const stateClasses = isSelected
            ? "bg-indigo-100 dark:bg-indigo-900 border-indigo-500 dark:border-indigo-400 shadow-md"
            : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-slate-700";
          
          return (
            <button
              key={index}
              onClick={() => onAnswerSelect(question.id, index)}
              className={`${baseClasses} ${stateClasses}`}
            >
              <span className={`flex-shrink-0 w-6 h-6 mr-4 rounded-full border-2 ${isSelected ? 'border-indigo-500 bg-indigo-500' : 'border-slate-400'}`}></span>
              <span className="text-slate-700 dark:text-slate-200">{option.text}</span>
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <div className="mt-8 text-right">
        <button
          onClick={onNextQuestion}
          disabled={selectedOption === undefined}
          className="bg-indigo-600 text-white font-bold py-2 px-8 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-all disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed transform hover:scale-105"
        >
          {questionNumber === totalQuestions ? 'Ver Resultado' : 'Próxima'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
