import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-quiz-feedback',
  imports: [NgClass],
  template: `
    @if (text) {
    <div class="quiz-feedback" [ngClass]="modifierClass">
      {{ text }}
    </div>
    }
  `,
  styleUrls: ['./quiz-feedback.component.scss'],
})
export class QuizFeedbackComponent {
  @Input() text: string = '';
  @Input() type: 'correct' | 'incorrect' | '' = '';

  get modifierClass(): string {
    if (this.type === 'correct') return 'quiz-feedback--correct';
    if (this.type === 'incorrect') return 'quiz-feedback--incorrect';
    return '';
  }
}
