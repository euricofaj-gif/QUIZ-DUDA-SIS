
export interface Option {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  subject: string;
}

export interface SubjectData {
  name: string;
  questions: Omit<Question, 'subject'>[];
}

export enum QuizState {
  NOT_STARTED,
  IN_PROGRESS,
  FINISHED,
}

export type UserAnswers = Record<number, number>;
