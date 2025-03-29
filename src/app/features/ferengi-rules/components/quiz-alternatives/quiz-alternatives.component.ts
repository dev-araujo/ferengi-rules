import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Alternative } from '../../models/ferengi-rules.model';

@Component({
  selector: 'app-quiz-alternatives',
  imports: [NgClass],
  template: `
    <div class="quiz-alternatives">
      @for (alt of alternatives; track alt.letter) {
      <button
        class="quiz-alternatives__item"
        (click)="selectAnswer(alt.letter)"
        [disabled]="isDisabled"
        [ngClass]="{
          'quiz-alternatives__item--correct':
            isVerified && alt.letter === correctAnswerLetter,
          'quiz-alternatives__item--incorrect':
            isVerified &&
            selectedLetter === alt.letter &&
            alt.letter !== correctAnswerLetter,
          'quiz-alternatives__item--disabled':
            isDisabled &&
            !(
              isVerified &&
              (alt.letter === correctAnswerLetter ||
                selectedLetter === alt.letter)
            )
        }"
      >
        {{ alt.letter }}) {{ alt.text }}
      </button>
      } @empty {
      <p class="quiz-alternatives__empty">Carregando alternativas...</p>
      }
    </div>
  `,
  styleUrls: ['./quiz-alternatives.component.scss'],
})
export class QuizAlternativesComponent {
  @Input({ required: true }) alternatives: Alternative[] = [];
  @Input() selectedLetter: string | null = null;
  @Input() correctAnswerLetter: string | null = null;
  @Input() isDisabled: boolean = false;
  @Input() isVerified: boolean = false;

  @Output() answerSelected = new EventEmitter<string>();

  selectAnswer(letter: string): void {
    if (!this.isDisabled) {
      this.answerSelected.emit(letter);
    }
  }
}
