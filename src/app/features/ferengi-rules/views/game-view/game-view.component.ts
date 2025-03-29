import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Question } from '../../models/ferengi-rules.model';
import { FerengiRulesService } from '../../services/ferengi-rules.service';

import { QuizScoreComponent } from '../../components/quiz-score/quiz-score.component';
import { QuizQuestionComponent } from '../../components/quiz-question/quiz-question.component';
import { QuizAlternativesComponent } from '../../components/quiz-alternatives/quiz-alternatives.component';
import { QuizFeedbackComponent } from '../../components/quiz-feedback/quiz-feedback.component';
import { QuizActionsComponent } from '../../components/quiz-actions/quiz-actions.component';

@Component({
  selector: 'app-game-view',
  standalone: true,
  imports: [
    RouterLink,
    QuizScoreComponent,
    QuizQuestionComponent,
    QuizAlternativesComponent,
    QuizFeedbackComponent,
    QuizActionsComponent,
  ],
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss'],
})
export class GameViewComponent implements OnInit {
  private ferengiRulesService = inject(FerengiRulesService);

  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  currentQuestion: Question | null = null;
  score: number = 0;
  isGameOver: boolean = false;
  feedbackText: string = '';
  feedbackType: 'correct' | 'incorrect' | '' = '';
  selectedAnswerLetter: string | null = null;
  isAnswerVerified: boolean = false;

  ngOnInit(): void {
    this.loadGameData();
    this.startGame();
  }

  loadGameData(): void {
    this.questions = this.ferengiRulesService.getQuestions();
  }

  startGame(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.isGameOver = false;
    this.feedbackText = '';
    this.feedbackType = '';
    this.selectedAnswerLetter = null;
    this.isAnswerVerified = false;
    this.questions = this.shuffleArray(this.questions);
    this.loadQuestion();
  }

  loadQuestion(): void {
    this.selectedAnswerLetter = null;
    this.isAnswerVerified = false;
    this.feedbackText = '';
    this.feedbackType = '';

    if (this.currentQuestionIndex >= this.questions.length) {
      this.endGame();
      return;
    }

    this.currentQuestion = this.questions[this.currentQuestionIndex];
    if (this.currentQuestion) {
      this.currentQuestion.alternatives = this.shuffleArray(
        this.currentQuestion.alternatives
      );
    }
  }
  handleAnswerSelected(selectedLetter: string): void {
    if (this.isAnswerVerified || this.isGameOver || !this.currentQuestion) {
      return;
    }

    this.selectedAnswerLetter = selectedLetter;
    this.isAnswerVerified = true;
    const question = this.currentQuestion;

    this.feedbackType = 'incorrect';
    this.feedbackText = `Incorreto! A resposta certa era a ${question.correctAnswerLetter}. Idiota!!`;

    if (selectedLetter === question.correctAnswerLetter) {
      this.score++;
      this.feedbackType = 'correct';
      const correctAnswerText =
        question.alternatives.find((alt) => alt.letter === selectedLetter)
          ?.text ?? '';
      this.feedbackText = `Correto! A ${question.ruleNumber}ª Lei é: "${correctAnswerText}"`;
    }
  }
  handleNextQuestion(): void {
    if (!this.isGameOver) {
      this.currentQuestionIndex++;
      this.loadQuestion();
    }
  }

  handlePlayAgain(): void {
    this.startGame();
  }

  private endGame(): void {
    this.isGameOver = true;
    this.currentQuestion = null;
    this.feedbackType = '';

    this.feedbackText = this.ferengiRulesService.getFinalFeedbackMessage(
      this.score
    );
    this.isAnswerVerified = false;
  }

  private shuffleArray<T>(array: T[]): T[] {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
}
