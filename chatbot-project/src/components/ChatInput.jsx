import { useState } from 'react'
import {Chatbot} from 'supersimpledev';
import './ChatInput.css'

export const ChatInput = ({chatMessages, setChatMessages}) => {

      const [inputText, setInputText] = useState('');

      const saveInputText = (event) => {
        event.preventDefault();
        setInputText(event.target.value);
      };

      const sendMessage = (event) => {
        event.preventDefault();

        const prevMessages = [
              ...chatMessages,
              {
                message: inputText,
                sender: "user",
                id: 'id' + (chatMessages.length + 1)
              }
        ];

        setChatMessages(prevMessages);

        const response  = Chatbot.getResponse(inputText);
        setChatMessages([
              ...prevMessages,
              {
                message: response,
                sender: "robot",
                id: 'id' + (prevMessages.length + 1)
              }
        ]);

        setInputText('');
      };


        return (
          <div className="chat-input-container">
            <input className="chat-input" onChange={saveInputText} value={inputText} type="text" placeholder="Send a message to Chatbot..." size="40"/>
            <button className="send-button" onClick={sendMessage}>Send</button>
          </div>
        );
}