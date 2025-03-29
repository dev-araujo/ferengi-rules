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

    this.feedbackText = this.getFinalFeedbackMessage(this.score);
    this.isAnswerVerified = false;
  }

  private getFinalFeedbackMessage(score: number): string {
    const percentage = (score / this.questions.length) * 100;

    const performanceLevels = [
      {
        minThreshold: 100,
        message: `Lucro Máximo! Você tem a sabedoria do Grande Nagus! }`,
      },
      {
        minThreshold: 80,
        message: `Excelente! Seus lóbulos estão tinindo com o som do lucro! Um desempenho digno de um Ferengi de respeito.`,
      },
      {
        minThreshold: 50,
        message: `Lucro Razoável. Você não saiu no prejuízo, mas um verdadeiro negociador sempre busca mais. Continue tentando!`,
      },
      {
        minThreshold: 20,
        message: `Marginal! Você quase saiu de mãos abanando. Precisa ser mais astuto e menos... ahhhh.`,
      },
      {
        minThreshold: 0.01,
        message: `Prejuízo! Um desempenho vergonhoso. Você está dando latinum de graça? Reveja suas prioridades!}`,
      },
      {
        minThreshold: -Infinity,
        message: `Nenhum lucro?! Inacreditável! Nem um Dopteriano cego faria pior. Volte para a escola de comércio! `,
      },
    ];

    const matchedLevel = performanceLevels.find(
      (level) => percentage >= level.minThreshold
    );

    return (
      `Seu placar final é ${score}!
       ${matchedLevel?.message}` ||
      performanceLevels[performanceLevels.length - 1].message
    );
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
