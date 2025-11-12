import { useRef,useEffect } from 'react'
import {ChatMessage} from './ChatMessage';
import './ChatMessages.css';

const ChatMessages = ({chatMessages}) => {

          const chatmessagesRef = useRef(null);

          useEffect(()=>{
            const containerElem = chatmessagesRef.current;
            if(containerElem){
              containerElem.scrollTop = containerElem.scrollHeight;
            }
          },[chatMessages]);

          return (
            <div className="chat-messages-container" ref={chatmessagesRef}>
              {
                chatMessages.map((chatMessage)=>{
                  return (<ChatMessage 
                  message={chatMessage.message} 
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                  />);
                })
              }
            </div>
          )
}

export default ChatMessages