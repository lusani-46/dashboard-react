import React, { useState, useEffect } from 'react';


const Welcome = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (<div className='welcome-message-container'>
    <div className={`welcome-message ${showMessage ? 'show' : 'hide'}`}>
      Welcome to our dashboard! 🎉
    </div>
    </div>
  );
};

export default Welcome;
