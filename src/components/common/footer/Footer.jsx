import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay Updated with the Latest News</h1>
            <span>Explore stories and updates from beyond the horizon.</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>LEARNFINITY</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>Empower Your Mind, Transform Your Future - Your Journey to Knowledge Starts Here.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link1'>
            <h3>Explore</h3>
            <ul>
              <li className="center">About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li className="center">Contact us</li>
            </ul>
          </div>
          <div className='box link2'>
            <h3>Quick Links</h3>
            <ul>
              <li className="center">Contact Us</li>
              <li>Pricing</li>
              <li className="center">Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box post'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val, index) => (
              <div className='items flexSB' key={index}>

                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                HYDERABAD
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 6301653871
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                sumanthvennela5@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | Made by Sumanth Vennela
        </p>
      </div>
    </>
  )
}

export default Footer
