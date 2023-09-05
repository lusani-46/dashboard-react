import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';


function Create() {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');


  const handleChangeQuestionText = (e) => {
    setQuestionText(e.target.value);
  };

  const handleAddQuestion = () => {
    if (questionText.trim() !== '') {
      const newQuestion = { text: questionText };
      setQuestions([...questions, newQuestion]);
      setQuestionText('');
    }
  };

  const handleEditQuestion = (index) => {
    const updatedText = window.prompt('Edit the question:', questions[index].text);
    if (updatedText !== null) {
      const updatedQuestions = [...questions];
      updatedQuestions[index].text = updatedText;
      setQuestions(updatedQuestions);
    }
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="questionnaire-container">
      <div className="question-form">
        <h2>Add a Question</h2>
        <input
          type="text" 
          placeholder="Enter your question"
          value={questionText}
          // onChange={(e) => setQuestionText(e.target.value)}
          onChange={handleChangeQuestionText}
        />
        <button className='add-button' onClick={handleAddQuestion}>Add</button>
      </div>

      <div className="question-list">
        <h2>List of Questions</h2>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              {question.text}
              <span className="edit-icon" onClick={() => handleEditQuestion(index)}>
                <AiOutlineEdit />
              </span>
              <span className="delete-icon" onClick={() => handleDeleteQuestion(index)}>
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
