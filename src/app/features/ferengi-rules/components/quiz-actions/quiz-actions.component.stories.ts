import type { Meta, StoryObj } from '@storybook/angular';
import { QuizActionsComponent } from './quiz-actions.component';

const meta: Meta<QuizActionsComponent> = {
  title: 'Ferengi Rules/Components/Quiz Actions',
  component: QuizActionsComponent,
  tags: ['autodocs'],
  argTypes: {
    showNextButton: {
      control: 'boolean',
      description: 'Controla a visibilidade do botão "Próxima Pergunta".',
    },
    showPlayAgainButton: {
      control: 'boolean',
      description: 'Controla a visibilidade do botão "Jogar Novamente".',
    },
    next: {
      action: 'nextClicked',
      description: 'Evento emitido ao clicar em "Próxima Pergunta".',
    },
    playAgain: {
      action: 'playAgainClicked',
      description: 'Evento emitido ao clicar em "Jogar Novamente".',
    },
  },
  args: {
    showNextButton: false,
    showPlayAgainButton: false,
  },
};

export default meta;
type Story = StoryObj<QuizActionsComponent>;

export const ShowNext: Story = {
  args: {
    showNextButton: true,
    showPlayAgainButton: false,
  },
};

export const ShowPlayAgain: Story = {
  args: {
    showNextButton: false,
    showPlayAgainButton: true,
  },
};

export const ShowBoth: Story = {
  args: {
    showNextButton: true,
    showPlayAgainButton: true,
  },
};

export const ShowNone: Story = {
  args: {
    showNextButton: false,
    showPlayAgainButton: false,
  },
};
