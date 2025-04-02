import { Injectable } from '@angular/core';
import { Rule, Question, FerengiQuoteMap } from '../models/ferengi-rules.model';
import FerengiRules from '../constants/ferengi-rules.json';
import FerengiQuestions from '../constants/ferengi-questions.json';
import FerengiQuotes from '../constants/ferengi-quotes.json';
// https://gist.github.com/darkyen/120c46739985ebf3b39b
@Injectable({
  providedIn: 'root',
})
export class FerengiRulesService {
  private rules: Rule[] = FerengiRules.rules;
  private questions: Question[] = FerengiQuestions.questions;
  private ferengiQuotes: FerengiQuoteMap = FerengiQuotes.quotes;

  getRules(): Rule[] {
    return [...this.rules];
  }

  getQuestions(): Question[] {
    return [...this.questions];
  }

  getQuotes(): FerengiQuoteMap {
    return { ...this.ferengiQuotes };
  }

  getFinalFeedbackMessage(score: number): string {
    const percentage = (score / this.questions.length) * 100;

    const performanceLevels = [
      {
        minThreshold: 100,
        message: `Lucro Máximo! Você tem a sabedoria do Grande Nagus! }`,
      },
      {
        minThreshold: 80,
        message: `Excelente! Seus lóbulos estão tinindo com o som do lucro! Um desempenho digno de um Ferengi de respeito.`,
      },
      {
        minThreshold: 50,
        message: `Lucro Razoável. Você não saiu no prejuízo, mas um verdadeiro negociador sempre busca mais. Continue tentando!`,
      },
      {
        minThreshold: 20,
        message: `Marginal! Você quase saiu de mãos abanando. Precisa ser mais astuto e menos... ahhhh.`,
      },
      {
        minThreshold: 0.01,
        message: `Prejuízo! Um desempenho vergonhoso. Você está dando latinum de graça? Reveja suas prioridades!`,
      },
      {
        minThreshold: -Infinity,
        message: `Nenhum lucro?! Inacreditável! Nem um Dopteriano cego faria pior. Volte para a escola de comércio! `,
      },
    ];

    const matchedLevel = performanceLevels.find(
      (level) => percentage >= level.minThreshold
    );

    return (
      `Seu placar final é ${score}!
       ${matchedLevel?.message}` ||
      performanceLevels[performanceLevels.length - 1].message
    );
  }
}
