
import React, { useState, useMemo, useCallback } from 'react';
import { QUIZ_DATA } from './constants';
import { QuizState, Question, UserAnswers } from './types';
import Quiz from './components/Quiz';
import Results from './components/Results';

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>(QuizState.NOT_STARTED);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});

  const flatQuestions = useMemo<Question[]>(() => {
    return QUIZ_DATA.flatMap(subject => 
      subject.questions.map(q => ({ ...q, subject: subject.name }))
    );
  }, []);

  const handleStartQuiz = useCallback(() => {
    setQuizState(QuizState.IN_PROGRESS);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
  }, []);

  const handleAnswerSelect = useCallback((questionId: number, optionIndex: number) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  }, []);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < flatQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizState(QuizState.FINISHED);
    }
  }, [currentQuestionIndex, flatQuestions.length]);

  const StartScreen: React.FC = () => (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Simulado Preparatório SIS</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
        Olá! Preparei este simulado com o mesmo formato do SIS para te ajudar a estudar de forma focada e eficiente. Responda com calma e atenção. Lembre-se, cada questão é um passo a mais na sua aprovação. Vamos começar?
      </p>
      <button
        onClick={handleStartQuiz}
        className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-transform transform hover:scale-105"
      >
        Iniciar Simulado
      </button>
    </div>
  );

  const renderContent = () => {
    switch (quizState) {
      case QuizState.IN_PROGRESS:
        return (
          <Quiz
            question={flatQuestions[currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelect}
            onNextQuestion={handleNextQuestion}
            selectedOption={userAnswers[flatQuestions[currentQuestionIndex].id]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={flatQuestions.length}
          />
        );
      case QuizState.FINISHED:
        return (
          <Results
            userAnswers={userAnswers}
            questions={flatQuestions}
            onRestart={handleStartQuiz}
          />
        );
      case QuizState.NOT_STARTED:
      default:
        return <StartScreen />;
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 p-4">
      <div className="w-full max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500">
        {renderContent()}
      </div>
       <footer className="text-center mt-6 text-sm text-slate-500 dark:text-slate-400">
          <p>Desenvolvido com dedicação para te ajudar a alcançar seus objetivos.</p>
      </footer>
    </main>
  );
};

export default App;
