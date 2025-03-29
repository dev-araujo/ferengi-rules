import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-score',
  standalone: true,
  imports: [],
  template: `
    <div class="quiz-score">
      Lucro : <span class="quiz-score__value">{{ score }}</span> Latinum
    </div>
  `,
  styleUrls: ['./quiz-score.component.scss'],
})
export class QuizScoreComponent {
  @Input({ required: true }) score: number = 0;
}
