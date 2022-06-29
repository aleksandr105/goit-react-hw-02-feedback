import {
  OptionList,
  OptionItems,
  OptionButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = () => {
  return (
    <OptionList>
      <OptionItems>
        <OptionButton type="button">Good</OptionButton>
      </OptionItems>
      <OptionItems>
        <OptionButton type="button">Neutral</OptionButton>
      </OptionItems>
      <OptionItems>
        <OptionButton type="button">Bad</OptionButton>
      </OptionItems>
    </OptionList>
  );
};
