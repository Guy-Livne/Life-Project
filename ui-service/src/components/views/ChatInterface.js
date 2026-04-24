import React from 'react';
import { MessageCircle, Send, User, Sparkles } from 'lucide-react';

function ChatInterface() {
  return (
    <div className="view-container chat-view">
      <div className="view-header">
        <MessageCircle className="view-icon" size={32} />
        <h2 className="view-title">Chat <span className="gradient-text">AI</span></h2>
      </div>
      
      <div className="chat-messages">
        <div className="chat-bubble ai">
          <div className="chat-avatar ai"><Sparkles size={16} /></div>
          <div className="chat-bubble-content">
            <p>Hello! I'm Chronos, your AI Personal Assistant. How can I help you manage your schedule or goals today?</p>
          </div>
        </div>
        
        <div className="chat-bubble user">
          <div className="chat-avatar user"><User size={16} /></div>
          <div className="chat-bubble-content">
            <p>Can you show me my goals for this week?</p>
          </div>
        </div>
      </div>

      <div className="chat-input-container">
        <input 
          type="text" 
          placeholder="Ask Chronos something..." 
          className="chat-input"
        />
        <button className="chat-send-btn">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}

export default ChatInterface;
