// src/components/Chatbot.js
import React, { useState } from 'react';

const MAX_MESSAGE_HISTORY = 20; // Keep last 20 messages

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [reply, setReply] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/chatbot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input }),
        });

        // Check if the response is OK
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json(); // Ensure this is valid JSON
        setReply(data.reply);
      } catch (error) {
        console.error('Error:', error);
        setReply('Something went wrong');
      }
    };
  
    return (
      <div className="fixed bottom-4 right-4">
        {isOpen ? (
          <div className="bg-gray-800 w-80 h-96 rounded-lg shadow-lg flex flex-col">
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500' : 'bg-gray-700'}`}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-2 border-t border-gray-700">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-lg"
                  placeholder="Type a message..."
                />
                <button type="submit" className="mt-2 w-full bg-blue-500 p-2 rounded-lg">
                  Send
                </button>
              </form>
            </div>
            <div className="p-2 border-t border-gray-700">
              <p>{reply}</p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-red-600 p-4 rounded-full shadow-lg"
          >
            💬
          </button>
        )}
      </div>
    );
  };
  
  export default Chatbot;