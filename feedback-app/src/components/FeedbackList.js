import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedbackList( { feedback, deleteFeedback } ) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet.</p>
  }

  return <div className="feedback-list">
    { feedback.map(item => <FeedbackItem key={ item.id } item={ item } handleDelete={ deleteFeedback }/>) }
  </div>;
}

FeedbackList.propTypes = {
  feedbackList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })).isRequired,
};

export default FeedbackList;