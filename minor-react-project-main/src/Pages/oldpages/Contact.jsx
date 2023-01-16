import React from 'react'
import "./contactdesign.css"
const Contact=()=>{
    return(

        <div className="root">
       
        <div class="container">
                <div class="content">
                    <div class="left-side">
                        <div class="address details">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="topic">Address</div>
                            <div class="text-one">27 Omaxe Tower,Indore</div>
                            <div class="text-two">(M.P.) India</div>
                        </div>
                        <div class="phone details">
                            <i class="fas fa-phone-alt"></i>
                            <div class="topic">Phone</div>
                            <div class="text-one">+916264351023</div>
                            <div class="text-two">+919039696449</div>
                        </div>
                        <div class="email details">
                            <i class="fas fa-envelope"></i>
                            <div class="topic">Email</div>
                            <div class="text-one">codelab@gmail.com</div>
                            <div class="text-two">info.codelab@gmail.com</div>
                        </div>
                    </div>
                    <div class="right-side">
                        <div class="topic-text">Send us a message</div>
                        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
                        <form action="#">
                            <div class="input-box">
                                <input type="text" placeholder="Enter your name"/>
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="Enter your email"/>
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="Message"/>
                            </div>
                            <div class="input-box message-box">

                            </div>
                            <div class="button">
                                <input type="button" value="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            </div>
    )
}

export default Contact;