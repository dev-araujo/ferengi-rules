import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-actions',
  standalone: true,
  imports: [],
  template: `
    <div class="quiz-actions">
      @if (showNextButton) {
      <button
        class="quiz-actions__button quiz-actions__button--next"
        (click)="next.emit()"
      >
        Próxima Pergunta &gt;&gt;
      </button>
      } @if (showPlayAgainButton) {
      <button
        class="quiz-actions__button quiz-actions__button--play-again"
        (click)="playAgain.emit()"
      >
        Jogar Novamente
      </button>
      }
    </div>
  `,
  styleUrls: ['./quiz-actions.component.scss'],
})
export class QuizActionsComponent {
  @Input() showNextButton: boolean = false;
  @Input() showPlayAgainButton: boolean = false;

  @Output() next = new EventEmitter<void>();
  @Output() playAgain = new EventEmitter<void>();
}
