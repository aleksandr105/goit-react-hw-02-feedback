import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import {
  Section,
  Container,
  Title,
  TitleStatistic,
} from './FeedbackSection.styled';

export class FeedbackSection extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section>
        <Container>
          <Title>Please leave feedback</Title>
          <FeedbackOptions />
          <TitleStatistic>Statistics</TitleStatistic>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Container>
      </Section>
    );
  }
}
