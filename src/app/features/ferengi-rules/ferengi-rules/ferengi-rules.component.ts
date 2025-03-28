import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ferengi-rules',
  imports: [],
  template: `<p>ferengi-rules works!</p>`,
  styleUrl: './ferengi-rules.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FerengiRulesComponent { }
