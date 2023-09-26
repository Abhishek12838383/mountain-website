import React from 'react'
import './Home.css'

function  Home() {
  return (
    <div className='home'>
        
     <div className="nav">
        <div className="logo"><h3>MNTN</h3></div>
        <div className="menu">
            <ul>
                <li>Equipment</li>
                <li>About Us</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className="log">
        <span class="material-symbols-outlined">
account_circle
</span>
<h4>Account</h4>
        </div>

        
     </div>

     <div className="nav-2">
        <div className="follow">
            <h4>Follow</h4>
            <span class="material-symbols-outlined">
apk_install
</span>
<span class="material-symbols-outlined">
deployed_code_update
</span>
        </div>
        <div className="title"> 
        <hr />
            <h4>A HIKING GUIDE</h4>
            <p>Be Prepared For The Mountain & Beyond!</p>
        <div className="s">
        <h3>Scroll down </h3> 
            <span class="material-symbols-outlined">
arrow_downward
</span>
        </div>
         
        </div>
    
     </div>

<div className="about">
  <div className="li">
  <div className="title"> 
        <hr />
            <h4>A HIKING GUIDE</h4>
            <p>Be Prepared For The Mountain & Beyond!</p>
            </div>
  </div>
  {/* <div className="ri">
    <img src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
  </div> */}
</div>

<div className="about-2">
  <div className="li">
  <div className="title-2"> 
        <hr />
            <h4>A HIKING GUIDE</h4>
            <p>Picking The Right Hiking Gear!</p>
            </div>
  </div>
  {/* <div className="ri">
    <img src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
  </div> */}
</div>

    </div>
  )
}

export default  Home
