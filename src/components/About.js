import React from "react";

export default class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div className="about-me">
                <div className="about-me-text">
                <h1>About me</h1>
                <p> Hello! I'm an Electrical Engineer with a degree from the Electrical Engineering Department of Energy at the Aristotle University
                    of Thessaloniki. My passion for engineering extends beyond the technical aspects of my profession. <br/> In my free time, 
                    I immerse myself in the world of coding, exploring various programming languages such as Python, JavaScript, HTML, and CSS.
                    I believe that the best way to learn is through hands-on experience. This philosophy guides my approach to both my work and my writing. 
                    <br/> In my books, I strive to encourage readers to dive into concepts by engaging with exercises. By trying things out for themselves, 
                    I hope they gain a deeper understanding and develop a stronger grasp of the material.  <br/> Whether it's through engineering projects, 
                    coding adventures, or educational writing, my goal is to inspire and empower others to explore, experiment, and learn. Thank you for 
                    visiting my page, and I hope you find value in the knowledge and experiences I share. 
                </p>
                <h1>About this page</h1>
                <p>
                    This page was created from scratch using simple React.js components. Designed with a focus on simplicity and functionality, it showcases
                    the power and flexibility of React.js for building web applications.
                </p>
            </div>
    </div>
        )
    }
} 
