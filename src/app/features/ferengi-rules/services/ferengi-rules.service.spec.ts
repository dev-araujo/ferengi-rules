import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { FerengiRulesService } from './ferengi-rules.service';
import { provideHttpClient } from '@angular/common/http';
import FerengiRules from '../constants/ferengi-rules.json';
import FerengiQuestions from '../constants/ferengi-questions.json';
import FerengiQuotes from '../constants/ferengi-quotes.json';

describe('FerengiRulesService', () => {
  let service: FerengiRulesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FerengiRulesService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(FerengiRulesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Deve testar getRules', () => {
    const expected = FerengiRules.rules;
    const result = service.getRules();
    expect(result).toEqual(expected);
  });

  it('Deve testar getQuestions', () => {
    const expected = FerengiQuestions.questions;
    const result = service.getQuestions();
    expect(result).toEqual(expected);
  });

  it('Deve testar getQuotes', () => {
    const expected = FerengiQuotes.quotes;
    const result = service.getQuotes();
    expect(result).toEqual(expected);
  });
});
