import PropTypes from 'prop-types';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
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

  IncrementGood = () => {
    this.setState(prewState => {
      return { good: prewState.good + 1 };
    });
  };

  IncrementNeutral = () => {
    this.setState(prewState => {
      return { neutral: prewState.neutral + 1 };
    });
  };

  IncrementBad = () => {
    this.setState(prewState => {
      return { bad: prewState.bad + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { IncrementGood, IncrementNeutral, IncrementBad } = this;

    const CountTotalFeedback = () => {
      return good + neutral + bad;
    };

    const PositiveFeedback = () => {
      let interestSumm = Math.round((good / CountTotalFeedback()) * 100);
      const interest = interestSumm > 0 ? interestSumm : 0;
      return interest;
    };

    return (
      <Section>
        <Container>
          <Title>{this.props.title}</Title>
          <FeedbackOptions
            goodIncrement={IncrementGood}
            neutralIncrement={IncrementNeutral}
            badIncrement={IncrementBad}
          />
          <TitleStatistic>{this.props.titleStatistic}</TitleStatistic>
          {CountTotalFeedback() === 0 && (
            <Notification message={'There is no feedback'}></Notification>
          )}
          {CountTotalFeedback() !== 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              summFeedback={CountTotalFeedback()}
              positiveFeedbac={PositiveFeedback()}
            />
          )}
        </Container>
      </Section>
    );
  }
}

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
  titleStatistic: PropTypes.string.isRequired,
};
