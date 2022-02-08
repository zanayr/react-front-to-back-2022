import { createContext, useState } from "react";
import { uuid } from "../utility/utility";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [ feedback, setFeedback ] = useState([
    {
      id: 1,
      rating: 7,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      rating: 7,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      rating: 6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]);
  const [ feedbackEdit, setFeedbackEdit ] = useState({
    item: {},
    edit: false,
  });

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  // Add feedback
  const addFeedback = newFeedback => {
    newFeedback.id = uuid();
    setFeedback([
      newFeedback,
      ...feedback,
    ]);
  };

    // Edit feedback
    const editFeedback = item => {
      setFeedbackEdit({
        item,
        edit: true,
      });
    };

    const updateFeedback = (id, next) => {
      setFeedback(feedback.map(prev => prev.id === id ? { ...prev, ...next } : prev));
    };
  
  return <FeedbackContext.Provider
  value={{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    { children }
  </FeedbackContext.Provider>
}

export default FeedbackContext;