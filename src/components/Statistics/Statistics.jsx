import { StatisticsList } from './Statistics.styled';

export const Statistics = ({ neutral, good, bad }) => {
  return (
    <StatisticsList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: 0</li>
      <li>Positive feedback: 0</li>
    </StatisticsList>
  );
};
