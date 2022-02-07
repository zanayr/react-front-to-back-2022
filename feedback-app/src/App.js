import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackData from "./data/FeedbackData";
import { uuid } from "./utility/utility";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIcon from "./components/AboutIcon";

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
    <Router>
      <Header text="Hello World" />
      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <>
              <FeedbackForm addFeedback={ addFeedback }/>
              <FeedbackStats feedback={ feedback } />
              <FeedbackList feedback={ feedback } deleteFeedback={ deleteFeedback }/>
            </>
          }>
          </Route>
          <Route path="/about" element={ <AboutPage /> } />
        </Routes>
        <AboutIcon />
      </div>
    </Router>
  );
}

export default App;