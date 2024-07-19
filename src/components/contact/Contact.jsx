import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15226.038647949773!2d78.3829819!3d17.4466731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9122db7ec335%3A0x7186d84d3f97b4d2!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081%2C%20India!5e0!3m2!1sen!2sus!4v1693487826754!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>Connect with Our Team</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Hi-tech City, Hyderabad</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> learnfinity@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 6301653871</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10' placeholder=" Create a message here...">
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM LINKEDIN</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
