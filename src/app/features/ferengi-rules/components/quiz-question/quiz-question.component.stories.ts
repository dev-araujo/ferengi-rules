import type { Meta, StoryObj } from '@storybook/angular';
import { QuizQuestionComponent } from './quiz-question.component';

const meta: Meta<QuizQuestionComponent> = {
  title: 'Ferengi Rules/Components/Quiz Question',
  component: QuizQuestionComponent,
  tags: ['autodocs'],
  argTypes: {
    questionText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<QuizQuestionComponent>;

export const Default: Story = {
  args: {
    questionText: 'Qual é a primeira Regra de Aquisição?',
  },
};

export const LongQuestion: Story = {
  args: {
    questionText:
      'Quando um acordo for alcançado, certifique-se de que todos os detalhes estejam claramente definidos por escrito para evitar mal-entendidos futuros que possam custar latinum. Qual regra é essa?',
  },
};

export const NoQuestion: Story = {
  args: {
    questionText: undefined,
  },
};
