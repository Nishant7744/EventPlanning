import React from 'react'

const Footer = () => {
  return (
    <footer>

        <div className="banner">

            <div className="title">
                <h1>EVENT'S</h1>
                <p>Event's and Weddings</p>
            </div>

            <div className="tag">
                <label htmlFor="">News Letter</label>
                <div>
                    <input type="text" placeholder='Email' style={{color:"white"}} />
                    <button style={{cursor:"pointer"}}>Subscribe</button>
                </div>

                <p>Sign up with your email address to recive news and updates</p>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
