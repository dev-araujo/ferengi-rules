import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [],
  template: `
    <div class="quiz-question">
      <p class="quiz-question__text">{{ questionText }}</p>
    </div>
  `,
  styleUrls: ['./quiz-question.component.scss'],
})
export class QuizQuestionComponent {
  @Input({ required: true }) questionText: string = '';
}
