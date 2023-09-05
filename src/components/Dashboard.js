import React from 'react'
import { FaThumbsUp, FaThumbsDown, FaMeh,FaQuestionCircle } from 'react-icons/fa'; 

function Dashboard() {
    console.log('Dashboard component rendered');

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Numbers of Questions</h3>
                    <span className="icon">
        < FaQuestionCircle />
      </span>  
                </div>
                <h1>458</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Agreements</h3>
                    <span className="icon">
        <FaThumbsUp />
      </span>
                </div>
                <h1>48</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Disagreements</h3>
                    <span className="icon">
        <FaThumbsDown />
      </span>
                </div>
                <h1>148</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Neutral</h3>
                    <span className="icon">
        <FaMeh />
      </span>
                </div>
                <h1>350</h1>
            </div>
            
        </div>
         </main>
  )
}

export default Dashboard
