import React, { useState } from 'react';
// import './ChatSection.css';

const ChatSection = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you with Ayurveda today?' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: inputMessage }];
    setMessages(newMessages);
    setInputMessage('');

    // Here, you can integrate the API call to the AI and update the bot's response
    fetchBotResponse(inputMessage);
  };

  const fetchBotResponse = async (userInput) => {
    // Simulate API response (replace this with an actual API call)
    const botResponse = 'I see, that’s an interesting query! Here’s what Ayurveda says about it...'; 

    // After receiving the response, update the chat with the bot's message
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'bot', text: botResponse },
    ]);
  };

  return (
    <div className="chat-section">
      <h2>Ayurveda Chat Assistant</h2>

      <div className="chat-container">
        <div className="messages-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Ask anything about Ayurveda..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
