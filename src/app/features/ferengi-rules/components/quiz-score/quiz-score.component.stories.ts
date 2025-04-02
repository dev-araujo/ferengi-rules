import type { Meta, StoryObj } from '@storybook/angular';
import { QuizScoreComponent } from './quiz-score.component';

const meta: Meta<QuizScoreComponent> = {
  title: 'Ferengi Rules/Components/Quiz Score',
  component: QuizScoreComponent,
  tags: ['autodocs'],
  argTypes: {
    score: {
      control: 'number',
      description: 'O valor atual do lucro (score) a ser exibido.',
    },
  },

  args: {
    score: 0,
  },
};

export default meta;
type Story = StoryObj<QuizScoreComponent>;

export const ZeroScore: Story = {
  args: {
    score: 0,
  },
};

export const PositiveScore: Story = {
  args: {
    score: 150,
  },
};

export const LargeScore: Story = {
  args: {
    score: 9875,
  },
};

export const NegativeScore: Story = {
  args: {
    score: -50,
  },
};
