import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FerengiRulesComponent } from './ferengi-rules.component';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('FerengiRulesComponent', () => {
  let component: FerengiRulesComponent;
  let fixture: ComponentFixture<FerengiRulesComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FerengiRulesComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    fixture = TestBed.createComponent(FerengiRulesComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('O componente deve existir', () => {
    expect(component).toBeTruthy();
  });
});
