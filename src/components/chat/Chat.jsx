import { useEffect, useRef, useState } from "react";
import "./chat.css"
import EmojiPicker from "emoji-picker-react";


const Chat = () => {
 const [open,setOpen] = useState(false);
 const [text,setText] = useState("");

 const endRef = useRef(null)

 useEffect(()=>{
  endRef.current?.scrollIntoView({behavior:"smooth"});
 },[]);

 const handleEmoji = e => {
  setText((prev) => prev + e.emoji);
  setOpen(false)
};


  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Priyansh Singh Patel</span>
            <p>Creating a Webapp</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>


      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>We are creating a webapp named quick chat in a 
              group of three people. This project is our final 
              yaear major project.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">          
          <div className="texts">
            <p>We are creating a webapp named quick chat in a 
              group of three people. This project is our final 
              yaear major project.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>We are creating a webapp named quick chat in a 
              group of three people. This project is our final 
              yaear major project.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">          
          <div className="texts">
            <p>We are creating a webapp named quick chat in a 
              group of three people. This project is our final 
              yaear major project.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>We are creating a webapp named quick chat in a 
              group of three people. This project is our final 
              yaear major project.
            </p>
            <span>1 min ago</span>
          </div>
        </div> 
        <div className="message own"> 
        <div className="texts">
          <img src="data:image/jpeg;base64,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" alt="" />        
            <p>We are creating a webapp named quick chat in a 
              group of three people. This project is our final 
              yaear major project.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>

      </div>


      <div className="bottom">
        <div className="icons">          
        <img src="./img.png" alt="" />
        <img src="./camera.png" alt="" />
        <img src="./mic.png" alt="" />
        </div>
        <input type="text"
         placeholder="Type a message...."
         value={text}
         onChange={(e) => setText(e.target.value)} />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={()=>setOpen(prev=>!prev)} />         
        <div className="picker">
        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
        </div> 
        </div>
        <button className="sendButton">Send</button>       
      </div>
         </div>
  )
}

export default Chat