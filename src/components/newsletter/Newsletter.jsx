import React from 'react'
import "./Newsletter.css";
import { IoMdSend} from "react-icons/io"
function Newsletter() {
  return (
   <div className="newsletter-container">
    <h1 className="newsletter-titlel">Newsletter</h1>
    <div className="newsletter-desc">
      What's fresh and New: Updates you Don't want to miss
    </div>
   <div className="input-container">
   <input className="newsletter-input" placeholder="Your Email"/>
    <button className="newsletter-button">
        <IoMdSend className="icon"/>
    </button>
   </div>
   </div>
  )
}

export default Newsletter
