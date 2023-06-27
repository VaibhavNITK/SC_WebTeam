import React, { useState } from 'react';

import './FeedbackForm.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    if (name && email && feedback) {
      
      const domain = email.split('@')[1];
      if (domain === 'nitk.edu.in') {
        // Save the feedback to the Firebase Realtime Database
        // const feedbackRef = firebase.database().ref('feedback');
        // const newFeedback = {
        //   name: name,
        //   email: email,
        //   feedback: feedback,
        // };
        // feedbackRef.push(newFeedback);

        const res = await fetch("https://sctask3-29ca2-default-rtdb.firebaseio.com/sctask3.json", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            feedback,
          }),
        });

        setName('');
        setEmail('');
        setFeedback('');

        alert('Feedback submitted successfully!');
      } else {
        alert('Please use a nitk.edu.in email address.');
      }
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className="container">
      <h1>College Club Feedback Form</h1>
      <p>Please provide your valuable feedback to help shape the future of our club.</p>
      <form onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
