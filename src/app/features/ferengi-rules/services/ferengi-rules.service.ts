import { Injectable } from '@angular/core';
import { Rule, Question, FerengiQuoteMap } from '../models/ferengi-rules.model';
import FerengiRules from '../constants/ferengi-rules.json';
import FerengiQuestions from '../constants/ferengi-questions.json';
import FerengiQuotes from '../constants/ferengi-quotes.json';

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
}
