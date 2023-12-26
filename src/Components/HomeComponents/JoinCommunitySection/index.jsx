import React from 'react'
import './index.scss'

function JoinCommunitySection() {
    return (
        <div className='joinCommunitySection'>
            <div className="joinCommunitySection_textBox">
                <p className='join'>Join the community</p>
                <p>Enter your email address to receive regular updates, as well as news on upcoming events and specific offers.</p>
                <div className="joinCommunitySection_textBox_inp">
                    <input type="text" placeholder='Your email address' />
                    <button>Subscribe<i class="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
            <div className="joinCommunitySection_img">
                <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/h2_img.png" />
            </div>
        </div>
    )
}

export default JoinCommunitySection