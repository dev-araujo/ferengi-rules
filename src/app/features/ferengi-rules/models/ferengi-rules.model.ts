export interface Rule {
  number: number | string;
  text: string;
}

export interface Alternative {
  letter: string;
  text: string;
}

export interface Question {
  questionText: string;
  alternatives: Alternative[];
  correctAnswerLetter: string;
  ruleNumber: number;
}

export interface FerengiQuoteMap {
  [score: number]: string;
}
