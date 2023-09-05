import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';




const root = createRoot(document.getElementById('root'));
root.render(<App />);


const hideWelcome = () => {
  const welcomeContainer = document.getElementById('welcome-container');
  if (welcomeContainer) {
    ReactDOM.unmountComponentAtNode(welcomeContainer);
  }
};

root.render(
  <React.StrictMode>
    <div id="welcome-container">
      <Welcome />
    </div>
    <div id="dashboard-container">
      <App />
    </div>
  </React.StrictMode>
);

// Wait for the DOM to load before adding the event listener
document.addEventListener('DOMContentLoaded', function () {
  const dashboardElement = document.getElementById('dashboard-container');
  if (dashboardElement) {
    dashboardElement.addEventListener('click', hideWelcome);
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
