import PropTypes from 'prop-types';
import {
  OptionList,
  OptionItems,
  OptionButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  goodIncrement,
  neutralIncrement,
  badIncrement,
}) => {
  return (
    <OptionList>
      <OptionItems>
        <OptionButton type="button" onClick={goodIncrement}>
          Good
        </OptionButton>
      </OptionItems>
      <OptionItems>
        <OptionButton type="button" onClick={neutralIncrement}>
          Neutral
        </OptionButton>
      </OptionItems>
      <OptionItems>
        <OptionButton type="button" onClick={badIncrement}>
          Bad
        </OptionButton>
      </OptionItems>
    </OptionList>
  );
};

FeedbackOptions.propTypes = {
  goodIncrement: PropTypes.func.isRequired,
  neutralIncrement: PropTypes.func.isRequired,
  badIncrement: PropTypes.func.isRequired,
};
