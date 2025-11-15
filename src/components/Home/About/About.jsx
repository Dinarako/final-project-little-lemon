import "./About.scss"

import Cheff from "../../../assets/images/about/cheff.jpg"

import salad from "../../../assets/images/about/salad.png"
import cheese from "../../../assets/images/about/cheese.png"


const About = () => {
  return (
    <div className="about">
        <div className="container">
            <div className="image">
                <img src={Cheff} alt="cheff" />
                <img className="cheese" src={cheese} alt="cheese" />
                <img className="salad" src={salad} alt="salad" />
            </div>
            <div className="information">
                <h1>We Are More Than Multiple Survice</h1>

                <p>This is a type of restaurant which typicall serves food and drinks, in addition to light refreshment such as baked good or snacks. The term comes from the rench word meaning food.</p>

                    <button>About Us</button>
            </div>
        </div>
    </div>
  )
}

export default About