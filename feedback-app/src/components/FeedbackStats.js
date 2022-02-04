import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  const average = (feedback.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0) / feedback.length).toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{ feedback.length } Reviews</h4>
      <h4>Average Rating: { isFinite(average) ? average : 0 }</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })).isRequired,
}

export default FeedbackStats;