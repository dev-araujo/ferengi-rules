import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `<button class="default-button" (click)="callEvent.emit()">
    {{ text }}
  </button>`,
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() text: string = '';
  @Output() callEvent = new EventEmitter<void>();
}
