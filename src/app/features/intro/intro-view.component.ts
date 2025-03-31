import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IntroSlide } from './models/intro.model';

@Component({
  selector: 'app-intro-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './intro-view.component.html',
  styleUrls: ['./intro-view.component.scss'],
})
export class IntroViewComponent {
  private router = inject(Router);
  buttonText = 'Próximo...';

  readonly slides: IntroSlide[] = [
    {
      imageUrl: '../../../assets/intro/tower-commerce.webp',
      altText: 'Vista da Torre do Comércio em Ferenginar',
      text: 'Bem-vindo(a), aspirante a negociador(a), à magnífica Ferenginar, coração pulsante do comércio e epicentro do lucro universal!',
    },
    {
      imageUrl: '../../../assets/intro/latinum.webp',
      altText: 'Barras de Latinum Prensado a Ouro',
      text: 'Você almeja a cidadania? O respeito? O acesso irrestrito às oportunidades mais lucrativas da galáxia? Excelente! Mas a cidadania Ferengi não é dada... é conquistada.',
    },
    {
      imageUrl: '../../../assets/intro/ferengi-rules.webp',
      altText: 'Pergaminho antigo com as Leis de Aquisição',
      text: 'O caminho para o sucesso é pavimentado com conhecimento. As sagradas Leis de Aquisição são a base de nossa sociedade. Dominá-las é o primeiro passo para encher seus cofres.',
    },
    {
      imageUrl: '../../../assets/intro/ferengi-with-latinum.webp',
      altText: 'Ferengi com barras de latinum',
      text: 'Sua aptidão para o lucro será testada! Prepare-se para o Exame Oficial de Cidadania Ferengi. Suas respostas determinarão seu futuro... e sua linha de crédito.',
    },
    {
      imageUrl: '../../../assets/intro/quark.webp',
      altText: 'Rosto do quark (ferengi)',
      text: 'Prove que você possui os lóbulos para o negócio! Demonstre seu domínio das Leis e junte-se à elite lucrativa. Que seus negócios prosperem!',
    },
  ];

  currentSlideIndex: number = 0;
  currentSlide: IntroSlide | null = null;

  constructor() {
    this.loadSlide(this.currentSlideIndex);
  }

  private loadSlide(index: number): void {
    if (index < 0 || index >= this.slides.length) {
      this.navigateToGame();
      return;
    }

    this.currentSlide = this.slides[index];

    this.buttonText =
      index === this.slides.length - 1 ? 'Vamos começar !' : 'Próximo...';
  }

  nextSlide(): void {
    this.currentSlideIndex++;
    if (this.currentSlideIndex >= this.slides.length) {
      this.navigateToGame();
      return;
    }

    this.loadSlide(this.currentSlideIndex);
  }

  private navigateToGame(): void {
    this.router.navigate(['/jogo']);
  }
}
