import React, {useEffect} from 'react'
import './about.css'
import aboutimage from '../../assets/aboutimg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(()=> {
    AOS.init({duration: 1000});
  }, []);

  return (
    <section className="about" id="about">
    <div className="about-container">
    <div className="introimg">
            <div className="intro-glowing-circle">
              <div className="image" data-aos="fade-up" data-aos-delay="200">
              <img src={aboutimage} className="App-logo" alt="logo" />
              </div>
            </div>
          </div>
        <div className="about-content">
        <h2 className="heading" data-aos="fade-up" data-aos-delay="100"> About <span> Me</span></h2>
        <h3 data-aos="fade-up" data-aos-delay="300"> Jesper Sjöström - 23 y/o - Stockholm / Helsinki </h3>
        <p data-aos="fade-up" data-aos-delay="400">Hello! My name is Jesper Sjöström, and I'm a passionate <span>frontend developer</span> with a keen interest in web design and user experience. I love creating visually appealing and user-friendly <span>websites</span> that provide a seamless browsing experience.
  I have a strong background in <span>web development</span>, having completed my studies in Informatics and Media Technology at Huddinge Gymnasiet and later pursued a specialization in Web Development at Östra Gymnasiet. I have also honed my skills further through professional training at KYH Yrkeshögskola, where I focused on frontend development.</p>
        <p data-aos="fade-up" data-aos-delay="500">Throughout my <span>journey</span>, I have gained hands-on experience working with various technologies, including HTML, CSS, JavaScript, and popular frontend frameworks like React. I am constantly expanding my knowledge and staying up-to-date with the latest industry trends to deliver modern and cutting-edge solutions.</p>
        <a href="#contact" className="btn-cta" data-aos="fade-up" data-aos-delay="1000">Say Hello!</a>
        </div>
      </div>
      </section>
  )
}

export default About