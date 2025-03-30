import {
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-quiz-feedback',
  imports: [NgClass],
  template: `
    @if (text) {
    <div class="quiz-feedback" [ngClass]="modifierClass">
      @if(image && !finalImage){
      <div class="quiz-feedback__reaction">
        <img
          [src]="image"
          alt="Reação do Quark"
          class="quiz-feedback__reaction-image"
        />
      </div>
      <span class="quiz-feedback__text">{{ text }}</span>
      } @if(finalImage){
      <div class="quiz-feedback__final">
        <img
          [src]="finalImage"
          alt="Quark olhando para você"
          class="quiz-feedback__final-image"
        />
        <p class="quiz-feedback__final-text">{{ text }}</p>
      </div>
      }
    </div>
    }
  `,
  styleUrls: ['./quiz-feedback.component.scss'],
})
export class QuizFeedbackComponent implements OnChanges {
  cdr = inject(ChangeDetectorRef);
  @Input() text: string = '';
  @Input() type: 'correct' | 'incorrect' | '' = '';
  @Input() image: string | null = null;
  @Input() endGame = false;
  finalImage: string | null = null;

  get modifierClass(): string {
    if (this.type === 'correct') return 'quiz-feedback--correct';
    if (this.type === 'incorrect') return 'quiz-feedback--incorrect';
    return '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['endGame'] && this.endGame) {
      this.finalImage = 'assets/feedback/quark-final.jpg';
    }

    if (!this.endGame) {
      this.finalImage = null;
    }
    this.cdr.detectChanges();
  }
}
