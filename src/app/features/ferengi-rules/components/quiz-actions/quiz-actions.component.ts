import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-actions',
  imports: [ButtonComponent, CommonModule],
  template: `
    <div class="quiz-actions">
      <app-button
        *ngIf="showNextButton || showPlayAgainButton"
        [text]="currentButtonText"
        (callEvent)="handleAction()"
      />
    </div>
  `,
  styleUrls: ['./quiz-actions.component.scss'],
})
export class QuizActionsComponent {
  @Input() showNextButton: boolean = false;
  @Input() showPlayAgainButton: boolean = false;

  @Output() next = new EventEmitter<void>();
  @Output() playAgain = new EventEmitter<void>();

  get currentButtonText(): string {
    if (this.showPlayAgainButton) {
      return 'Jogar Novamente';
    }
    if (this.showNextButton) {
      return 'Próxima Pergunta >>';
    }
    return '';
  }

  handleAction(): void {
    if (this.showPlayAgainButton) {
      this.playAgain.emit();
      return;
    }

    if (this.showNextButton) {
      this.next.emit();
    }
  }
}
