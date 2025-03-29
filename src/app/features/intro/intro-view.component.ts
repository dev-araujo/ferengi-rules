import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IntroSlide } from './models/intro.model';

@Component({
  selector: 'app-intro-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './intro-view.component.html',
  styleUrls: ['./intro-view.component.scss'],
})
export class IntroViewComponent implements OnInit {
  private router = inject(Router);

  readonly slides: IntroSlide[] = [
    {
      imageUrl: 'assets/images/intro/ferenginar-skyline.png',
      altText: 'Vista da Torre do Comércio em Ferenginar',
      text: 'Bem-vindo(a), aspirante a negociador(a), à magnífica Ferenginar, coração pulsante do comércio e epicentro do lucro universal!',
    },
    {
      imageUrl: 'assets/images/intro/latinum-bars.png',
      altText: 'Barras de Latinum Prensado a Ouro',
      text: 'Você almeja a cidadania? O respeito? O acesso irrestrito às oportunidades mais lucrativas da galáxia? Excelente! Mas a cidadania Ferengi não é dada... é conquistada.',
    },
    {
      imageUrl: 'assets/images/intro/rules-scroll.png',
      altText: 'Pergaminho antigo com as Leis de Aquisição',
      text: 'O caminho para o sucesso é pavimentado com conhecimento. As sagradas Leis de Aquisição são a base de nossa sociedade. Dominá-las é o primeiro passo para encher seus cofres.',
    },
    {
      imageUrl: 'assets/images/intro/ferengi-official.png',
      altText: 'Oficial Ferengi com um PADD',
      text: 'Sua aptidão para o lucro será testada! Prepare-se para o Exame Oficial de Cidadania Ferengi. Suas respostas determinarão seu futuro... e sua linha de crédito.',
    },
    {
      imageUrl: 'assets/images/intro/quarks-bar.png',
      altText: 'Entrada do Bar do Quark em DS9',
      text: 'Prove que você possui os lóbulos para o negócio! Demonstre seu domínio das Leis e junte-se à elite lucrativa. Que seus negócios prosperem!', // Last slide before game
    },
  ];

  currentSlideIndex: number = 0;
  currentSlide: IntroSlide | null = null;

  ngOnInit(): void {
    this.loadSlide(this.currentSlideIndex);
  }

  private loadSlide(index: number): void {
    if (index >= 0 && index < this.slides.length) {
      this.currentSlide = this.slides[index];
    } else {
      this.navigateToGame();
    }
  }

  nextSlide(): void {
    this.currentSlideIndex++;
    if (this.currentSlideIndex < this.slides.length) {
      this.loadSlide(this.currentSlideIndex);
    } else {
      this.navigateToGame();
    }
  }

  skipIntro(): void {
    this.navigateToGame();
  }

  private navigateToGame(): void {
    this.router.navigate(['/jogo'], {
      relativeTo: this.router.routerState.root.firstChild?.firstChild,
    });
  }
}
