import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rule-list',
  imports: [],
  template: `<p>rule-list works!</p>`,
  styleUrl: './rule-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuleListComponent { }
