import React, { useState } from 'react';

function Questionnaire({ questions }) {
  const [responses, setResponses] = useState({});

  const handleStrengthChange = (event, questionIndex) => {
    const newResponses = { ...responses };
    newResponses[questionIndex] = event.target.value;
    setResponses(newResponses);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Responses:', responses);
  };

  return (
    <div className="questionnaire-container">
      <h2>Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="question">
            <p>{question.text}</p>
            <div className="strength-options">
              <label>
                <input
                  type="radio"
                  value="agree"
                  checked={responses[index] === 'agree'}
                  onChange={(e) => handleStrengthChange(e, index)}
                />
                Agree
              </label>
              <label>
                <input
                  type="radio"
                  value="neutral"
                  checked={responses[index] === 'neutral'}
                  onChange={(e) => handleStrengthChange(e, index)}
                />
                Neutral
              </label>
              <label>
                <input
                  type="radio"
                  value="disagree"
                  checked={responses[index] === 'disagree'}
                  onChange={(e) => handleStrengthChange(e, index)}
                />
                Disagree
              </label>
            </div>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Questionnaire;
