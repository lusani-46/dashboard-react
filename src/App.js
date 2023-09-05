import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar';
import Dashboard from './components/Dashboard';
import Questionnaire from './components/Questionnaire';
import Create from './components/create';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true);
  const [questions, setQuestions] = useState([]);

  const handleSidebarToggle = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <Router>
      <div className="grid-container">
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={handleSidebarToggle}
        />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/questionnaire"
            element={<Questionnaire questions={questions} />}
          />
          <Route
            path="/create"
            element={<Create addQuestion={addQuestion} />}
          />
        </Routes>
      </div>
              </Router>
        );
      }
      
      export default App;
      
