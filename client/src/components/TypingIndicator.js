import React from 'react';

const TypingIndicator = () => (
  <div className="flex items-center">
    <div className="w-2 h-2 bg-gray-400 rounded-full mx-1 animate-bounce"></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full mx-1 animate-bounce delay-100"></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full mx-1 animate-bounce delay-200"></div>
  </div>
);

export default TypingIndicator; 