import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import { uuid } from "./utility/utility";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [ feedback, setFeedback ] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  const addFeedback = newFeedback => {
    newFeedback.id = uuid();
    setFeedback([
      newFeedback,
      ...feedback,
    ]);
  };

  return (
    <>
      <Header text="Hello World" />
      <div className="container">
        <FeedbackForm addFeedback={ addFeedback }/>
        <FeedbackStats feedback={ feedback } />
        <FeedbackList feedback={ feedback } deleteFeedback={ deleteFeedback }/>
      </div>
    </>
  );
}

export default App;