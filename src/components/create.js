import React, { useState, useEffect } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

function Create() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
    setQuestions(storedQuestions);
  }, []);

  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(questions));
  }, [questions]);

  const handleAddQuestion = () => { // Fixed function name
    if (newQuestion.trim() !== '') {
      setQuestions([...questions, { text: newQuestion }]); // Create an object with 'text' property
      setNewQuestion('');
    }
  };

  const handleEditQuestion = (index) => { // Fixed function name
    const newText = prompt('Edit the question:', questions[index].text);
    if (newText !== null) {
      const updatedQuestions = [...questions];
      updatedQuestions[index] = { text: newText };
      setQuestions(updatedQuestions);
    }
  };

  const handleDeleteQuestion = (index) => { // Fixed function name
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="questionnaire-container">
      <div className="question-form">
        <h2>Add a Question</h2>
        <input
          type="text"
          placeholder="Enter your question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          disabled={false}
        />

        <button className='add-button' onClick={handleAddQuestion}>Add</button> {/* Use handleAddQuestion */}
      </div>

      <div className="question-list">
        <h2>List of Questions</h2>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              {question.text}
              <span className="edit-icon" onClick={() => handleEditQuestion(index)}> {/* Use handleEditQuestion */}
                <AiOutlineEdit />
              </span>
              <span className="delete-icon" onClick={() => handleDeleteQuestion(index)}> {/* Use handleDeleteQuestion */}
                <AiOutlineDelete />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Create;
