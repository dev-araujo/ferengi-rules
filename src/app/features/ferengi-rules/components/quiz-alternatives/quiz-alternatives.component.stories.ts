import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { QuizAlternativesComponent } from './quiz-alternatives.component';
import { Alternative } from '../../models/ferengi-rules.model';

const sampleAlternatives: Alternative[] = [
  {
    letter: 'A',
    text: 'Uma vez que você tenha o dinheiro deles, nunca o devolva.',
  },
  { letter: 'B', text: 'Nunca coloque a amizade acima do lucro.' }, //
  { letter: 'C', text: 'Ganância é eterna.' }, //
  {
    letter: 'D',
    text: 'Um contrato é um contrato é um contrato... mas apenas entre Ferengis.',
  },
];

const meta: Meta<QuizAlternativesComponent> = {
  title: 'Ferengi Rules/Components/Quiz Alternatives',
  component: QuizAlternativesComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    alternatives: {
      control: 'object',
      description: 'Array de alternativas a serem exibidas.',
    },
    selectedLetter: {
      control: 'text',
      description:
        'A letra da alternativa selecionada pelo usuário (null se nenhuma).',
    },
    correctAnswerLetter: {
      control: 'text',
      description: 'A letra da alternativa correta (null se não aplicável).',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Desabilita os botões de alternativa.',
    },
    isVerified: {
      control: 'boolean',
      description:
        'Indica se a resposta foi verificada (para aplicar estilos de correto/incorreto).',
    },
    answerSelected: {
      action: 'answerSelected',
      description: 'Evento emitido quando uma alternativa é selecionada.',
    },
  },
  args: {
    alternatives: sampleAlternatives,
    selectedLetter: null,
    correctAnswerLetter: 'C',
    isDisabled: false,
    isVerified: false,
  },
};

export default meta;
type Story = StoryObj<QuizAlternativesComponent>;

export const Default: Story = {
  args: {},
};

export const Selected: Story = {
  args: {
    selectedLetter: 'B',
    isDisabled: true,
  },
};

export const VerifiedCorrect: Story = {
  args: {
    selectedLetter: 'C',
    isVerified: true,
    isDisabled: true,
    correctAnswerLetter: 'C',
  },
};

export const VerifiedIncorrect: Story = {
  args: {
    selectedLetter: 'A',
    isVerified: true,
    isDisabled: true,
    correctAnswerLetter: 'C',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    isVerified: false,
    selectedLetter: null,
  },
};

export const Empty: Story = {
  args: {
    alternatives: [],
  },
};
