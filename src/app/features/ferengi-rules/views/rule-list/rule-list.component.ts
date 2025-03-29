import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Rule } from '../../models/ferengi-rules.model';
import { FerengiRulesService } from '../../services/ferengi-rules.service';

@Component({
  selector: 'app-rules-list-view',
  imports: [RouterLink],
  template: `
    <div class="rules-list">
      <div class="rules-list__nav">
        <a routerLink="/jogo">Ir para o Prova</a>
      </div>

      <h1 class="rules-list__title">
        Lista Completa: Leis de Aquisição Ferengi
      </h1>
      <div class="rules-list__content">
        <ul class="rules-list__list">
          @for (rule of rules; let i = $index; track i) {
          <li class="rules-list__item">
            <strong>{{ rule.number }}ª Lei:</strong> {{ rule.text }}
          </li>
          } @empty {
          <li class="rules-list__empty-message">
            Nenhuma lei encontrada. Carregando...
          </li>
          }
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./rule-list.component.scss'],
})
export class RuleListComponent implements OnInit {
  private ferengiRulesService = inject(FerengiRulesService);

  rules: Rule[] = [];

  ngOnInit(): void {
    this.rules = this.ferengiRulesService.getRules();
  }
}
