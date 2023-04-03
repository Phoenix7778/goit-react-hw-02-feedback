// import { Item, List } from './FeedbackOptions.styled';

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <div>
//       <List>
//         {options.map(item => (
//           <Item onClick={onLeaveFeedback} key={item}>
//             {item[0].toUpperCase() + item.slice(1)}
//           </Item>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default FeedbackOptions;

// FeedbackOptions.propTypes = {
//   onLeaveFeedback: PropTypes.func.isRequired,
//   options: PropTypes.array.isRequired,
// };

import { ContainerButtons, Button } from './Feedback.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ContainerButtons>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option.replace(option.slice(0, 1), option.slice(0, 1).toUpperCase())}
        </Button>
      ))}
    </ContainerButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
