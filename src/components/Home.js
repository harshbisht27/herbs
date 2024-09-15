// src/components/Home.js
import React, { useState } from 'react';
// import './Home.css';
import SignUp from './SignUp';
import SignUpDialog from '../Header';


const Home = () => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isSignUpDialogVisible, setIsSignUpDialogVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const openSignUpForm = () => {
    setIsSignUpVisible(true);
    setIsSignUpDialogVisible(false);
  };

  const handleSignUp = (name) => {
    setUserName(name);
    setIsSignUpVisible(false);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };
  const toggleSignUpDialog = () => {
    setIsSignUpDialogVisible(!isSignUpDialogVisible);
  };
  return (
    <div className="home">
      {/* Parallax Banner Section */}
      <section className="parallax-banner">
        
        <div className="banner-text">
          <h1>India is a treasure trove of herbal plants, it is, in a way our Green Gold.
          
          </h1>
         <button className='butt'>{isLoggedIn ? (
            <>
              <li><a href="#" onClick={handleLogout}>{userName}</a></li>
            </>
          ) : (
            <li><a href="#" onClick={toggleSignUpDialog}>Register</a></li>
          )}
           {isSignUpDialogVisible && (
        <SignUpDialog
          onClose={() => setIsSignUpDialogVisible(false)}
          onRegisterAsCustomer={() => openSignUpForm()}
          onRegisterAsSeller={() => openSignUpForm()}
        />
      )}

      {isSignUpVisible && <SignUp onClose={() => setIsSignUpVisible(false)} />}</button>
        </div>
        <div className='para'>
           
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="cards-container">
          <div className="card">
            <h3>Health</h3>
            <p>Ministry of Ayush provides healthcare facilities using six conventional treatments.</p>
            <a href="https://en.wikipedia.org/wiki/Ayurveda" target="_blank" rel="noreferrer">Read more...</a>
          </div>
          <div className="card">
            <h3>Education</h3>
            <p>Regulating educational standards of the Indian Systems of Medicine.</p>
            <a href="https://en.wikipedia.org/wiki/Education_in_India" target="_blank" rel="noreferrer">Read more...</a>
          </div>
          <div className="card">
            <h3>Research & Development</h3>
            <p>Promoting research activities in the Ayush System.</p>
            <a href="https://en.wikipedia.org/wiki/Research" target="_blank" rel="noreferrer">Read more...</a>
          </div>
          <div className="card">
            <h3>Medicinal Plants</h3>
            <p>Coordinating all matters relating to medicinal plants in the country.</p>
            <a href="https://en.wikipedia.org/wiki/Medicinal_plant" target="_blank" rel="noreferrer">Read more...</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
