import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='offset'></div>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO LEARNFINITY' title='Endless Learning Opportunities Await!' />
            <p className = "quote">"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill.</p>
            <div className='button'>
              <button className='primary-btn'>
                BEGIN LEARNING <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                EXPLORE COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="image"></div>
    </>
  )
}

export default Hero
