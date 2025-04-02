import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { QuizFeedbackComponent } from './quiz-feedback.component';

const meta: Meta<QuizFeedbackComponent> = {
  title: 'Ferengi Rules/Components/Quiz Feedback',
  component: QuizFeedbackComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    text: {
      control: 'text',
      description: 'O texto principal do feedback.',
    },
    type: {
      control: 'select',
      options: ['correct', 'incorrect', ''],
      description:
        "Define o estilo do feedback ('correct', 'incorrect' ou neutro '').",
    },
    image: {
      control: 'text',
      description:
        'Caminho para a imagem de reação (opcional). Ex: assets/feedback/quark-happy.webp',
    },
    endGame: {
      control: 'boolean',
      description: 'Indica se o jogo terminou (para mostrar a imagem final).',
    },
  },
  args: {
    text: 'Este é um feedback padrão.',
    type: '',
    image: null,
    endGame: false,
  },
};

export default meta;
type Story = StoryObj<QuizFeedbackComponent>;

export const Correct: Story = {
  args: {
    type: 'correct',
    text: 'Regra Correta! Lucrativo!',
    image: 'feedback/quark-happy.webp',
  },
};

export const Incorrect: Story = {
  args: {
    type: 'incorrect',
    text: 'Regra Incorreta! Sem lucro para você!',
    image: 'feedback/quark-angry.webp',
  },
};

export const Neutral: Story = {
  args: {
    type: '',
    text: 'Aguardando sua jogada...',
    image: null,
  },
};

export const NoText: Story = {
  args: {
    type: 'correct',
    text: '',
    image: 'feedback/quark-happy.webp',
  },
};

export const EndGameFeedback: Story = {
  args: {
    type: '',
    text: 'O jogo acabou! Seu resultado final...',
    endGame: true,
    finalImage: 'feedback/quark-final.webp',
    image: '',
  },
};

export const CorrectNoImage: Story = {
  args: {
    type: 'correct',
    text: 'Correto, mesmo sem a imagem!',
    image: null,
  },
};
