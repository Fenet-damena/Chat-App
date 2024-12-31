import { useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"
const Chat = () => {
    const [open,setOpen] = useState(false);
    const [text,setText] = useState("");

    const handleEmoji = e =>{
        setText((prev) => prev + e.emoji)
        setOpen(false)
    };
    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>lala fenet</span>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
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
                        <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Numquam dolorem illo necessitatibus 
                            excepturi vero ullam, odio ipsam ea deserunt iure sit 
                            dolorum. Natus repellendus dolores excepturi velit 
                            officiis fugiat ad?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Numquam dolorem illo necessitatibus 
                            excepturi vero ullam, odio ipsam ea deserunt iure sit 
                            dolorum. Natus repellendus dolores excepturi velit 
                            officiis fugiat ad?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Numquam dolorem illo necessitatibus 
                            excepturi vero ullam, odio ipsam ea deserunt iure sit 
                            dolorum. Natus repellendus dolores excepturi velit 
                            officiis fugiat ad?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Numquam dolorem illo necessitatibus 
                            excepturi vero ullam, odio ipsam ea deserunt iure sit 
                            dolorum. Natus repellendus dolores excepturi velit 
                            officiis fugiat ad?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Numquam dolorem illo necessitatibus 
                            excepturi vero ullam, odio ipsam ea deserunt iure sit 
                            dolorum. Natus repellendus dolores excepturi velit 
                            officiis fugiat ad?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    
                    <div className="texts">
                        <img src="https://th.bing.com/th/id/R.f564cc8589f68be4690adc7a35f36da0?rik=%2b3PPs5qdMVpHhg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f03%2fSunset-wallpaper-desktop.jpg&ehk=9v%2b%2fyX708Qq6bSvK8rs5oqPPFk0wCOBUq%2fCpW6ELKcA%3d&risl=1&pid=ImgRaw&r=0" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Numquam dolorem illo necessitatibus 
                            excepturi vero ullam, odio ipsam ea deserunt iure sit 
                            dolorum. Natus repellendus dolores excepturi velit 
                            officiis fugiat ad?
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>

            </div>
            <div className="bottom">
                <div className="icons">
                <img src="./img.png" alt="" />
                <img src="./camera.png" alt="" />
                <img src="./mic.png" alt="" />
                </div>
                
                <input type="text" placeholder="Type a message ..."
                value={text}
                 onChange={(e) =>setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt=""
                    onClick={() => setOpen((prev) => !prev)} />
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